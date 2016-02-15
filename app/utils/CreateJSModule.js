var CreateJSLoader = require('./CreateJSLoader')
var CreateJSCanvas = require('./CreateJSCanvas');

var cjsLoader = new CreateJSLoader();

function CreateJSModule() {

  this.load = function(animationName, module, callback, options){
  	var options = options || {};
  	console.log('CreateJSModule: load:', animationName);
  	var moduleData = {
  		name: animationName,
  		module: module,
  		callback: callback,
  		options: options
  	}
  	cjsLoader.load(animationName, this.loadComplete.bind(moduleData));
  }.bind(this);

  this.loadComplete = function(animationData){
	expand = new CreateJSCanvas(animationData, moduleLoaded.bind(this), this.options);
  }

  function moduleLoaded(stage){
    console.log('CreateJSModule: stageLoaded');
    var moduleInstance = new this.module(stage);
    this.callback(moduleInstance);
  }
}

module.exports = CreateJSModule;