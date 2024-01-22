const express = require("express");
const app = express();


const auth = require("./routes/auth");

app.use(express.json());


app.use("/api/v1", auth);



require("./connection/db");

app.get("/", (req, res) => {
    res.send("hello");
  });

app.listen(1000, () => {
  console.log("Server Started");
});
