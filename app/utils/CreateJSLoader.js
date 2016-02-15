function CreateJSLoader(){
  console.log('CreateJSLoader: instance');

  var loadManifest = [];
  var loadIndex = 0;

  this.init = function(){

  }.bind(this);

  this.animationLoaded = function(e){
  	var animationData = {};
  	animationData.lib = window.lib;
  	animationData.images = window.images;
  	animationData.ss = window.ss;

  	window.lib = null;
  	window.images = null;
  	window.ss = null;

  	this.callback(animationData);
  }

  this.load = function(AnimationName, callback){
  	var loadData = {
  		name: AnimationName,
  		callback: callback
  	};

  	Enabler.loadScript('js/animations/'+AnimationName+'/index.js', this.animationLoaded.bind(loadData));
  }.bind(this);
}
/**
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
} /**/

module.exports = CreateJSLoader;
