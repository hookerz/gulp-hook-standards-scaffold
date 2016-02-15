function PoliteLoad(){
  console.log('PoliteLoad: instance');
  this.loader = undefined;
  this.loadIndex = 0;
  this.loadManifest = [];

  this.init = function(){
    console.log('PoliteLoad: init');
    if( !Enabler.isInitialized() ) {
      Enabler.addEventListener( studio.events.StudioEvent.INIT, this._enablerInitialized );
    } else {
      this.enablerInitialized();
    }
  }.bind(this);

  this._enablerInitialized = function() {
    console.log('PoliteLoad: _enablerInitialized');
    if( Enabler.isPageLoaded() ) {
      this._adReady();
    } else {
      Enabler.addEventListener( studio.events.StudioEvent.PAGE_LOADED, this._adReady);
    }
  }.bind(this);

  this._adReady = function(){
    console.log('PoliteLoad: _adReady');
    this._loadScripts();
  }.bind(this);

  this._loadScripts = function(){
    console.log('PoliteLoad: _loadScripts:', this.loadManifest[this.loadIndex]);
    if(this.loadIndex < this.loadManifest.length) {
      var path = this.loadManifest[this.loadIndex];
      this.loadIndex++;
      Enabler.loadScript(path, this._loadScripts);
    }
  }.bind(this);

  this.addScript = function(url){
    console.log('PoliteLoad: addScript:',url);
    this.loadManifest.push(url);
  }.bind(this);

  this.addAnimation = function(url){
    console.log('PoliteLoad: addScript:',url);
    this.loadManifest.push(url);
  }.bind(this);
}

module.exports = PoliteLoad;
