import bodyParser from "body-parser";
import express, { Request, Response } from "express";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req: Request, res: Response) => {
  console.log(`process.env.MY_SUPER_PASSWORD`, process.env.MY_SUPER_PASSWORD);

  return res.json({ status: "success!!" });
});

app.listen(4000, () => console.log(`Server running on port 4000`));
