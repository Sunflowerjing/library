const path = require('path');



const ENV = process.env.NODE_ENV === 'development';

const webpackCommon = {
    mode: ENV ? 'development' : 'production'
};


module.exports = webpackCommon;