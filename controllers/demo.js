'use strict'
var moment = require('moment');

module.exports = {
  date: function (req, res){
    res.json({date: moment.utc().format('YYYY-MM-DD HH:mm:ss')});
  },
};
