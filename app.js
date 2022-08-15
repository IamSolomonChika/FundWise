const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = process.env.PORT || 4000;
import connect from "./configs/mongoDB";

const app = express();

app.use(express.static('public'));
app.set('view engine', ejs);
app.use(bodyParser.urlencoded({ extended: true }));

connect();





app.listen(port, () => {
    console.log("Server started on port 4000 successfully");
});