global.window = global;
global.assert = require('chai').assert;
require('../src/static/index');
require('./index.spec.js');