const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 9000;
let tableCount = 0;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [{
    table_id: 1,
    id: "eh",
    Name: "Jeff Loomis",
    Email: "JeffLoomis@LeffJoomis@html.com",
    phone: 23313313333,
}]
const waitingList = [{
    table_id: 1,
    id: "eh",
    Name: "Jeff Loomis",
    Email: "JeffLoomis@LeffJoomis@html.com",
    phone: 23313313333,
}]
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "homepage.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/viewtables", function (req, res) {
    res.sendFile(path.join(__dirname, "viewtables.html"));
});


app.post("/api/tables", function (req, res) {
    var newTable = req.body;
    tableCount++;
    console.log(newcharacter);
    if (tableCount > 5) {
        reservatifons.push(newTable);
    }
    else {
        waitingList.push(newTable);
    }

    res.json(newcharacter);
});