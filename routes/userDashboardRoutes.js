const express = require('express');

const {dashboardView, iconsView, mapView, profileView, tableView} = require('../controllers/userDashboardController');
const router = express.Router();

router.get('/userDashboard', dashboardView);
router.get('/icons', iconsView);
router.get('/map', mapView);
router.get('/profile', profileView);
router.get('/table', tableView);

module.exports = {
    routes: router
}