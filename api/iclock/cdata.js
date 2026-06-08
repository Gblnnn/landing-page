export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  const sn = req.query.SN || "";

  if (req.method === "GET") {
    // This exact format is what ZKTeco expects to turn green
    const response = [
      `GET OPTION FROM: ${sn}`,
      `ATT,Stamp=0`,
      `ErrorDelay=30`,
      `Delay=10`,
      `TransFlag=TransData AttLog OpLog AttPhoto EnrollUser ChgUser EnrollFP ChgFP UserPic`,
      `TimeZone=4`,  // UTC+4 for Oman 🇴🇲
      `ServerVer=2.4.1 2015-04-27`,
      `PushProtVer=2.4.1`,
      `PushOptionsFlag=1`,
    ].join("\n");

    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(response);
  }

  // POST — punch data
  let body = "";
  await new Promise((resolve) => {
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", resolve);
  });

  console.log("=== ZKTECO PUSH ===");
  console.log("Body:", body);

  return res.status(200).send("OK");
}