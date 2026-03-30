import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  return res.json({ msg: "auto deply is working" });
});

app.listen(PORT, () => {
  console.log("sever is up and running");
});
