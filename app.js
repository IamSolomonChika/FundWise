const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const port = process.env.PORT || 4000;
const connect = require("./configs/mongoDB");
const webAppRoutes = require('./routes/webAppRoutes')
const userDashboardRoutes = require('./routes/userDashboardRoutes')
const date = require('./services/dateServices')


const app = express();

app.use(express.static( path.join ( __dirname, 'public')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

// Connect to mongodb
connect();

// routes
app.use(webAppRoutes);
app.use(userDashboardRoutes.routes);
app.set("layout home", false);


app.listen(port, () => {
    console.log("Server started on port 4000 successfully");
}); 