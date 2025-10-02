const express = require('express');
const {auth, storage} = require('../config/firebase');


const app = express();

app.get("/", (req, res) => {
    res.send("SecureBox is running with Firebase!");
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
