import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://layonfapjyiupkjdswbj.supabase.co/",
  "sb_secret_79rVcwFLYzk18UrQXJwjig_HLSuhhYY"
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

  const lines = body.split("\n").filter((l) => l.trim());
  const punches = [];

  for (const line of lines) {
    // Skip any header lines
    if (line.startsWith("PUSH") || line.startsWith("ATTLOG")) continue;

    // Device sends tab-separated values
    const parts = line.trim().split("\t");
    if (parts.length < 3) continue;

    const userId = parts[0].trim();
    const datetime = parts[1].trim();
    const verify = parts[2].trim();
    const punchType = parts[3] ? parts[3].trim() : "0";

    // Skip if no valid user or datetime
    if (!userId || !datetime) continue;

    punches.push({
      user_id: userId,
      punch_time: new Date(`${datetime}+04:00`).toISOString(),
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

  return res.status(200).send("OK");
}

  return res.status(405).send("Method Not Allowed");
}