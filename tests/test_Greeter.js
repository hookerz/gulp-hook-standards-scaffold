'use strict';

var assert = require('chai').assert;
var Greeter = require('../app/Greeter');

suite('example_module', function () {
  setup(function () {});

  suite('Greeter', function () {

    test('default greeting should equal "Hello, world!"', function () {
      var g = new Greeter();
      assert.strictEqual('Hello, world!', g.getGreeting());
    });

    test('custom greeting should equal "hello world"', function () {
      var g = new Greeter('hello world');
      assert.strictEqual('hello world', g.getGreeting());
    });

  });
});
