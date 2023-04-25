const express = require("express");
const path = require("path");
const fs = require("fs");
const notes = require("./db/db.json");
const uuid = require('uuid');
const app = express();

var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.delete("/api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const dltNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id); 
    fs.writeFileSync("./db/db.json", JSON.stringify(dltNote));
    res.json(dltNote);
})

app.listen(PORT, function () {
    console.log(`Example app listening at http://localhost:${PORT} 🚀`)
});