const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const db = process.env.DATABASE_URI;
const PORT = process.env.PORT || 8001;

const validatorHandle = require("./middlewares/validatorHandle");

connectDB(db);

app.options("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Length, X-Requested-With"
  );
  res.send(200);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Apalabrados --> Running!!");
});

//Validator
//app.use(validatorHandle);

//Routes
app.use("/api/numbers", require("./routes/api/numbers"));
app.use("/api/texts", require("./routes/api/texts"));
app.use("/api/characters", require("./routes/api/characters"));
app.use("/api/storedata", validatorHandle, require("./routes/api/storeData"));

//Inicia la app
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
