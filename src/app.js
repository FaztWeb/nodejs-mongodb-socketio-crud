import express from "express";
const app = express();

app.use(express.static(__dirname + "/public"));

export default app;
