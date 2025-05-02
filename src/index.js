require("dotenv").config();
const express = require("express");

const app = express();

app.use("/", (req, res) => {
    res.status(200).send("home route")
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})