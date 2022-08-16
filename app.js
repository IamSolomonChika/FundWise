const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = process.env.PORT || 4000;
const connect = require("./configs/mongoDB");
const webAppRoutes = require('./routes/webAppRoutes')

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to mongodb
// connect();

// routes
app.use(webAppRoutes);



app.listen(port, () => {
    console.log("Server started on port 4000 successfully");
});