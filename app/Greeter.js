'use strict';

function Greeter(greeting) {
  this.greeting = greeting || 'Hello, world!';
}

Greeter.prototype.getGreeting = function () {
  return this.greeting;
};

module.exports = Greeter;
