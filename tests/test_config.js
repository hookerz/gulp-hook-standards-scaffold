'use strict';

var config = require('../app/config');
var assert = require('chai').assert;

suite('config', function () {
  setup(function () {
  });

  test('default environment is dev', function () {
    assert.strictEqual('dev', config.environment);
  });

  test('default environment has default config values', function () {
    assert.strictEqual('test', config.someValue);
  });

  test('default environment has dev specific config values', function () {
    assert.strictEqual('devstuff', config.devOnlyProperty);
  });

  test('default environment has override config values', function () {
    assert.strictEqual('999999', config.trackingId);
  });
});
