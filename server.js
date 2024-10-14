import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    heading: "Nathy ALem",
  });
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
