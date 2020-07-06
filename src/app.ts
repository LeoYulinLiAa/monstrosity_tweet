import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/api/users";
import bodyParser from "body-parser";
import { getMongoUrl } from "./config/config";
import tweetRouter from "./routes/api/tweets";

const app = express();

mongoose.connect(getMongoUrl(), { useNewUrlParser: true })
  .then(() => console.log("Connected to Database"))
  .catch(error => console.log(`Could not connect to database: ${error}`));

app.listen(5000, () => {
  console.log("running");
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({});
});

app.use("/api/users", userRoutes);
app.use("/api/tweets", tweetRouter);
