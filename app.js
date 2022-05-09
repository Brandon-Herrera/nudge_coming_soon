const express = require('express')
const ejsMate = require('ejs-mate')
const path = require('path')
const mongoose = require('mongoose')
const port = 4000
const dbUrl = 'mongodb://localhost:27017/nudge_coming_soon_v1';

mongoose.connect(dbUrl)

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection: error:"))
db.once("open", () => {
    console.log("Database connected")
})

const app = express()

app.engine('ejs', ejsMate);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});