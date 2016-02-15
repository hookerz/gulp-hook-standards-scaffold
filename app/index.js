'use strict';
var config = require('./config');

var Expand = require('./Expand');
var Collapse = require('./Collapse');

var CreateJSLoader = require('./utils/CreateJSLoader')
var CreateJSCanvas = require('./utils/CreateJSCanvas');

function Main(){
  console.log('Main: instance');

  var cjsLoader = new CreateJSLoader();

  var collapseAnimation;
  var expandAnimation;

  var expand = null;
  var collapse = null;

  this.init = function() {

    cjsLoader.load("expand", this.expandLoadComplete);
    cjsLoader.load("collapse", this.collapseLoadComplete);

  }.bind(this);

  this.expandLoadComplete = function(animationData){
    expandAnimation = animationData;
    this.animationsLoaded();
  }.bind(this);

  this.collapseLoadComplete = function(animationData){
    collapseAnimation = animationData;
    this.animationsLoaded();
  }.bind(this);

  this.animationsLoaded = function(){
    if(collapseAnimation && expandAnimation) {
      this.onAdLoaded();
    }
  }.bind(this);

  this.onAdLoaded = function() {
    console.log('index: onAdLoaded');
    //this.stage = new CreateJSCanvas(gameAnimation, this.onStageLoaded);

  }.bind(this);

  this.init();
}

var main = new Main();