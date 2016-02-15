function CreateJSCanvas(animation, callback, tickHandler) {
  console.log('CreateJSCanvas: instance');
  this.canvas;
  this.stage;
  this.exportRoot;
  this.loadError;
  this.onTick = tickHandler;
  this.onLoaded = callback;

  var lib = lib;
  var images = images || {};
  var ss = ss || {};

  if(animation) {
    lib = animation.lib;
    images = animation.img;
    ss = animation.ss;
  }

  this.init = function() {
    console.log('CreateJSCanvas: init()');
    createjs.MotionGuidePlugin.install();

    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'canvas');
    this.canvas.setAttribute('width', lib.properties.width);
    this.canvas.setAttribute('height', lib.properties.height);
    this.canvas.setAttribute('style', 'style="background-color:"' + lib.properties.color);

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener('fileload', this.handleFileLoad);
    loader.addEventListener('complete', this.handleComplete);

    if (lib.properties.manifest.length == 0) {
      loader.loadFile({src: 'images/index_atlas_.json', type: 'spritesheet', id: 'index_atlas_'}, true);
      //handleComplete(null);
    } else {
      loader.loadManifest(lib.properties.manifest);
    }
  }.bind(this);

  this.handleFileLoad = function(evt) {
    console.log('CreateJSCanvas: handleFileLoad()');
    if (evt.item.type == 'image') {
      images[evt.item.id] = evt.result;
    }
  }.bind(this);

  this.handleError = function (err) {
    console.log('CreateJSCanvas: Error loading images.');
  }.bind(this);

  this.handleComplete = function (evt) {
    console.log('CreateJSCanvas: handleComplete()');
    console.log(lib);
    var queue = evt.target;
    ss['index_atlas_'] = queue.getResult('index_atlas_');

    this.exportRoot = new lib.index();

    document.body.appendChild(this.canvas);

    devicePixelRatio = window.devicePixelRatio || 1;

    this.pixelRatio = devicePixelRatio;

    if (devicePixelRatio < 1) {
      devicePixelRatio = 1;
    }

    this.stage = new RetinaStage(this.canvas, devicePixelRatio);
    //this.stage = new createjs.Stage(this.canvas);

    this.stage.addChild(this.exportRoot);
    this.stage.enableMouseOver(24);
    createjs.Touch.enable(this.stage);
    this.stage.update();

    this.onLoaded(this.stage);

    createjs.Ticker.setFPS(lib.properties.fps);
    //createjs.Ticker.setFPS(60);
    if(this.onTick) {
      createjs.Ticker.addEventListener('tick', this.onTick);
    }
    createjs.Ticker.addEventListener('tick', this.stage);

  }.bind(this);

  this.init();
}

module.exports = CreateJSCanvas;
