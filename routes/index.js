'use strict'
var express = require('express');
var demo = require('../controllers/demo');
var api = express.Router();

api.get('/date',demo.date);

module.exports = api;
