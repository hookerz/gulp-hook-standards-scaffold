'use strict';

var config = require('./config');
var Greeter = require('./Greeter');

var g = new Greeter();

console.log(g);

console.log(g.getGreeting());
