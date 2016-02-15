function Collapse(){
  console.log('Collapse: instance');
  var context = null;

  this.init = function(thisContext) {
    console.log('Ad: init');
    context = thisContext;

    this.createButton(context.catchAll, context.exit);

  }.bind(this);

  this.exit = function() {
    console.log('Ad: exit');
    Enabler.exit('catch_all');
  }.bind(this);

}

module.exports = Collapse;
