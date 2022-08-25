import bodyParser from "body-parser";
import express, { Request, Response } from "express";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req: Request, res: Response) => {
  return res.json({ status: "success" });
});

// ────────────────────────────────────────────────────────────────────────────────

app.listen(3000, () => console.log(`Server running on port 3000`));
