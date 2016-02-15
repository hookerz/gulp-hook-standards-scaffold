'use strict';
var config = require('./config');
var Expand = require('./Expand');
var Collapse = require('./Collapse');

var CreateJSModule = require('./utils/CreateJSModule')
var AdKit = require('./utils/AdKit');

function Main(){
  console.log('Main: instance');

  var cjsModule = new CreateJSModule();

  var collapseAnimation;
  var expandAnimation;

  var expand = null;
  var collapse = null;

  window.adKit = new AdKit();

  this.init = function() {
    console.log('Main: init');
    var expandContainer = document.querySelector("#expand");
    var collapseContainer = document.querySelector("#collapse");

    cjsModule.load("expand", Expand, this.expandLoadComplete, {target: expandContainer, transparent: true });
    cjsModule.load("collapse", Collapse, this.collapseLoadComplete, {target: collapseContainer });
  }

  this.expandLoadComplete = function(instance){
    expand = instance;
    this.stageLoaded();
  }.bind(this);

  this.collapseLoadComplete = function(instance){
    collapse = instance;
    this.stageLoaded();
  }.bind(this);

  this.stageLoaded = function(){
    console.log('Main: stageLoaded');
    if(expand && collapse) {
      this.adLoaded(); 
    }
  }.bind(this);

  this.adLoaded = function() {
    console.log('Main: adLoaded');
    window.expand = expand;
    window.collapse = collapse;
  }.bind(this);

  this.init();
}

var main = new Main();