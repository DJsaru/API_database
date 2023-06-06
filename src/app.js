const express = require("express");
const { request } = require("http");

require("./db/conn.js");
const Student = require("./models/students.js");
const { error } = require("console");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello from the other side Sarang");
})

//create a new student
app.post("/students", (req,res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
    res.send("hello from the other side");
})

app.listen(port, () => {
    console.log(`HEYYY SUCCESS AT ${port}`);
})