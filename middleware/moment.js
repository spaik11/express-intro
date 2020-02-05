const moment = require('moment');

const showMoment = (req, res, next) => {
    console.log(moment().format('LLL'));
    next();
};

module.exports = { showMoment };