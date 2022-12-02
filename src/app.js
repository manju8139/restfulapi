const express = require("express");
require("./db/connection");
const student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.post("/students", async (req, res) => {
    try {
        const user = new student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (err) {
        res.status(400).send(err);
    }

    // console.log(req.body);
    // const user = new student(req.body);
    // user.save().then(() =>{
    //     res.status(201).send(user);
    // }).catch((err)=>{
    //     res.status(400).send(err);
    // })
    // res.send("HELLO FROM SERVER SIDE");
});
app.get("/students", async (req, res) => {
    try {
        const getData = await sstudent.find();
        res.send(getData);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const specificData = await student.findById(_id);
        res.send(specificData);

        if (!specificData) {
            res.status(404).send();
        } else {
            res.send(specificData);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})
app.listen(port, () => {
    console.log(`connection success at ${port}`)
});

