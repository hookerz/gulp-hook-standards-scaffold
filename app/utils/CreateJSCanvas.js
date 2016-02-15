function CreateJSCanvas(animation, callback, options) {
  console.log('CreateJSCanvas: instance');
  this.canvas;
  this.stage;
  this.exportRoot;
  this.loadError;

  var defaults = {
    target: null,
    transparent: false,
    onTick: null
  }

  var options = mergeOptions(defaults, options);

  this.target = options.target;
  this.transparent = options.transparent;
  this.onTick = options.onTick;
  this.onLoaded = callback;

  var lib;
  //var images;
  var ss;

  if(animation) {
    lib = animation.lib;
    //images = animation.img;
    ss = animation.ss;
  }

  this.init = function() {
    console.log('CreateJSCanvas: init()');
    createjs.MotionGuidePlugin.install();

    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'canvas');
    this.canvas.setAttribute('width', lib.properties.width);
    this.canvas.setAttribute('height', lib.properties.height);
    if(!this.transparent) {
      this.canvas.setAttribute('style', 'style="background-color:"' + lib.properties.color);
    }

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener('fileload', this.handleFileLoad);
    loader.addEventListener('complete', this.handleComplete);

    if (lib.properties.manifest.length == 0) {
      try {
        console.log('CreateJSCanvas: Loading spritesheet.');
        loader.loadFile({src: 'images/index_atlas_.json', type: 'spritesheet', id: 'index_atlas_'}, true);
      } catch(e) {
        console.log('CreateJSCanvas: No images found.');
        handleComplete(null);
      }
      //handleComplete(null);
    } else {
      console.log('CreateJSCanvas: Loading images.');
      loader.loadManifest(lib.properties.manifest);
    }
  }.bind(this);

  this.handleFileLoad = function(evt) {
    console.log('CreateJSCanvas: handleFileLoad()',evt.item.id);
    if (evt.item.type == 'image') {
      images[evt.item.id] = evt.result;
      //window.img[evt.item.id] = evt.result;
    }
  }.bind(this);

  this.handleError = function (err) {
    console.log('CreateJSCanvas: Error loading images.');
  }.bind(this);

  this.handleComplete = function (evt) {
    console.log('CreateJSCanvas: handleComplete()');
    console.log(images);
    images = {};
    var queue = evt.target;
    ss['index_atlas_'] = queue.getResult('index_atlas_');

    this.exportRoot = new lib.index();

    window.exportRoot = this.exportRoot;

    if(this.target) {
      this.target.appendChild(this.canvas);
    } else {
      document.body.appendChild(this.canvas);
    }

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
    this.stage.root = this.stage.children[0];
    this.onLoaded(this.stage.root);
    this.stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    //createjs.Ticker.setFPS(60);
    if(this.onTick) {
      createjs.Ticker.addEventListener('tick', this.onTick);
    }
    createjs.Ticker.addEventListener('tick', this.stage);

  }.bind(this);

  function mergeOptions(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }

  this.init();
}

module.exports = CreateJSCanvas;
