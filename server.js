const _ = require("lodash");
const fs = require("fs");


const express = require("express");
const app = express();

const moviesRouter = require("./api/movies");

app.use(express.json());
app.use('/movies', moviesRouter);








let param = process.argv[2];




let db = [];


function fillDB() {
    for (var x = 0; x < 3; x++) {
        db.push({
            name: "Ayoze" + _.random(0, 100),
            age: 28 + _.random(0, 50)
        });
    }
}

//API REST USERS


//API REST FILMS

//APP START
fillDB();


app.listen(3000, () => console.log('Ready on port 3000!'));