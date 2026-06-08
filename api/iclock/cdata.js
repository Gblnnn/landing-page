export default function handler(req, res) {
  console.log("ICLOCK HIT");

  console.log("QUERY:", req.query);

  let raw = "";

  req.on("data", chunk => {
    raw += chunk.toString();
  });

  req.on("end", () => {
    console.log("RAW:", raw);

    res.status(200).send("OK");
  });
}