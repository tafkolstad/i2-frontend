const express = require("express");
const app = express();
const employees = require("./selvklart-frontend/public/assets/ansatte.json")
const fs = require('fs')
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get("/employees", (req, res) => {
    res.json(employees)
});

app.post("/employees/:id", (req, res) => {
    const tagList = req.body.tags.split(' ')

    employees[Number(req.params.id)].name = req.body.name
    employees[Number(req.params.id)].title = req.body.title
    employees[Number(req.params.id)].phone = req.body.phone
    employees[Number(req.params.id)].email = req.body.email
    employees[Number(req.params.id)].tags = tagList

    fs.writeFile('./selvklart-frontend/public/assets/ansatte.json', JSON.stringify(employees), err => {
        if (err) {
            console.log(err)
            return
        }
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));