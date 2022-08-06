const express = require('express');
const ejs = require('ejs');
const port = process.env.PORT || 4000;

const app = express();

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));







app.listen(port, () => {
    console.log("Server started on port 4000 successfully");
});