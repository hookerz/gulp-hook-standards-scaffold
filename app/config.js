'use strict';

/** the default config values for all environments */
var defaultConfig = {
  someValue: 'test',
  environment: 'unknown',
  trackingId: '12365534'
};

/**
 * Each environment can expose a custom configuration
 * A matcher function which can determine if the given environment is active based on a context object which is
 * generally 'window'
 * */
var environments = [
  {
    name: 'dev',
    matcher: function (context) {
      return context === undefined ||
        context.location.hostname === 'localhost' ||
        context.location.hostname === '127.0.0.1';
    },
    config: {
      devOnlyProperty: 'devstuff',
      trackingId: '999999'
    }
  },
  {
    name: 'qa',
    matcher: function (context) {
      return context.location.hostname === 'hookdevz.com';
    },
    config: {}
  },
  {
    name: 'production',
    matcher: function (context) {
      return context.location.hostname === 'google.com';
    },
    config: {}
  }
];

/** Creates a new object with a copy of the properties of obj, with the object prototype set to defaultObject */
var wrapWithDefaults = function (obj, defaultObject) {
  var newObj = Object.create(defaultObject);

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }

  return newObj;
};

var getEnv = function (context) {
  var result;

  for (var i = 0; i < environments.length; i++) {
    var env = environments[i];
    if (env.matcher(context)) {
      result = env;
      console.info('selecting env: ' + env.name);
      break;
    }
  }

  if (typeof result === 'undefined') {
    result = environments[0];
    console.warn('defaulting to first environment: ' + result.name);
  }

  // wrap the raw object literal so its a new object with the defaultConfig as its object prototype
  result.config = wrapWithDefaults(result.config, defaultConfig);
  result.config.environment = result.name;
  return result;
};

module.exports = getEnv((typeof window === 'undefined' ? undefined : window)).config;
