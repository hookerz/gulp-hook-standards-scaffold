'use strict';
var config = require('./config');

var Expand = require('./Expand');
var Collapse = require('./Collapse');

var CreateJSLoader = require('./utils/CreateJSLoader')
var CreateJSCanvas = require('./utils/CreateJSCanvas');

var AdKit = require('./utils/AdKit');

function Main(){
  console.log('Main: instance');

  var cjsLoader = new CreateJSLoader();

  var collapseAnimation;
  var expandAnimation;

  var expand = null;
  var collapse = null;
  var loadCount = 0;

  window.adKit = new AdKit();

  this.init = function() {
    console.log('Main: init');
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
      expand = new CreateJSCanvas(expandAnimation, this.stageLoaded);
      collapse = new CreateJSCanvas(collapseAnimation, this.stageLoaded);
    }
  }.bind(this);

  this.stageLoaded = function(){
    console.log('Main: stageLoaded');
    loadCount++;
    if(loadCount == 2){
      this.onAdLoaded();
    }
  }.bind(this);

  this.onAdLoaded = function() {
    console.log('Main: onAdLoaded');
    

  }.bind(this);

  this.init();
}

var main = new Main();