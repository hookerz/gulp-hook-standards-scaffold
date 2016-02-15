function Collapse(context){
  console.log('Collapse: instance');
  this.context = context;
  var context = context;

  this.init = function(thisContext) {
    console.log('Collapse: init');
    context = thisContext;

    this.createButton(context.catchAll, context.exit);

  }.bind(this);

  this.exit = function() {
    console.log('Collapse: exit');
    Enabler.exit('catch_all');
  }.bind(this);

}

module.exports = Collapse;
