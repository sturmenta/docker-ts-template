const bodyParser = require("body-parser");
const app = require("express")();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/test", async (req, res) => {
  const myPass = process.env.MY_SUPER_PASSWORD;

  res.json({ result: "test working", myPass });
});

// ────────────────────────────────────────────────────────────────────────────────

app.listen(process.env.port || 3000, () => {
  console.log(`Server running on port ${process.env.port || 3000}`);
});
