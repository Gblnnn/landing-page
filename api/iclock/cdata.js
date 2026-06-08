import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const sn = req.query.SN || "UNKNOWN";

  if (req.method === "GET") {
    const response = [
      `GET OPTION FROM: ${sn}`,
      `ATT,Stamp=0`,
      `ErrorDelay=30`,
      `Delay=10`,
      `TransFlag=TransData AttLog OpLog AttPhoto EnrollUser ChgUser EnrollFP ChgFP UserPic`,
      `TimeZone=4`,
      `ServerVer=2.4.1 2015-04-27`,
      `PushProtVer=2.4.1`,
      `PushOptionsFlag=1`,
    ].join("\n");

    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(response);
  }

  if (req.method === "POST") {
    let body = "";
    await new Promise((resolve) => {
      req.on("data", (chunk) => (body += chunk.toString()));
      req.on("end", resolve);
    });

    console.log("Raw body:", body);

    // Only process attendance logs
    if (body.includes("ATTLOG")) {
      const lines = body.split("\n").filter((l) => l.trim());
      const punches = [];

      for (const line of lines) {
        // Skip header lines
        if (line.startsWith("PUSH") || line.startsWith("ATTLOG")) continue;

        // Format: UserID  Date  Time  Verify  PunchType
        const parts = line.trim().split(/\s+/);
        if (parts.length < 4) continue;

        const [userId, date, time, verify, punchType] = parts;

        punches.push({
          user_id: userId,
          punch_time: new Date(`${date}T${time}+04:00`).toISOString(), // Oman timezone
          verify_type: parseInt(verify) || 0,
          punch_type: parseInt(punchType) || 0,
          device_serial: sn,
          raw: line.trim(),
        });
      }

      if (punches.length > 0) {
        const { error } = await supabase.from("punches").insert(punches);

        if (error) {
          console.error("Supabase error:", error);
          return res.status(500).send("ERROR");
        }

        console.log(`Saved ${punches.length} punches from device ${sn}`);
      }
    }

    return res.status(200).send("OK");
  }

  return res.status(405).send("Method Not Allowed");
}