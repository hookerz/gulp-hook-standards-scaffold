(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/hookLogo.png", id:"hookLogo"},
		{src:"images/kettle.png", id:"kettle"},
		{src:"images/table.png", id:"table"},
		{src:"images/teapot.png", id:"teapot"}
	]
};



// symbols:



(lib.hookLogo = function() {
	this.initialize(img.hookLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,84);


(lib.kettle = function() {
	this.initialize(img.kettle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,33);


(lib.table = function() {
	this.initialize(img.table);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,40);


(lib.teapot = function() {
	this.initialize(img.teapot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,38);


(lib.mc_simpleSquare = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.mc_replay = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#767B7E").s().p("AgrArQgTgSAAgZQAAgYATgSQARgTAaAAQAZAAASATIAUgTIAAAvIgyAAIATgRQgOgPgSAAQgUAAgNAOQgOAOAAASQAAATAOAOQANAOAUAAQARAAAPgOIAKALQgSASgYAAQgaAAgRgTg");
	this.shape.setTransform(6.4,6.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.7,12.5);


(lib.mc_logo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hookLogo();
	this.instance.setTransform(-66,-37);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66,-37,148,84);


(lib.mc_hit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5D5D").s().p("Ah8B9IAAj5ID5AAIAAD5g");
	this.shape.setTransform(12.5,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.mc_ctaCopy = function() {
	this.initialize();

	// copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACDAiQgFgDgEgHQgCgHAAgLQgBgOAHgIQAGgHAPAAQAOAAAGAHQAHAIAAAOQAAALgEAHQgDAHgFADQgGAEgJAAQgKAAgGgEgACLgKQgDABgCAFQgBAEAAAGIABANQACAEADACQACACAGAAQAEAAAEgCQACgCACgEQACgFgBgIQABgGgCgEQgCgFgCgBQgEgCgEAAQgGAAgCACgADpAdQgGgIAAgQQgBgMAHgIQAGgIANAAQAIAAAGADQAFADADAGQACAGAAAIIAAADIAAADIgkAAQAAAJAFAEQAEAEAIAAIAJgBIAIgCIABAKIgJADIgKABQgPAAgIgIgAEJAAQAAgFgEgEQgDgDgGAAQgGAAgDADQgDAEAAAFIAZAAIAAAAgAigAgQgEgEAAgKQAAgJAFgFQAFgEALAAIAHAAIAGABIAAgDQAAgFgDgDQgDgCgHAAIgJABIgIACIgBgKQAJgEAMAAQAIAAAFACQAFADACAFQADAFgBAIIAAAkIgKAAIAAgGIgBAAQgDADgEACQgFACgFAAQgIAAgGgFgAiVAKQgEADAAAEQAAAGAEACQACACAEAAIAGgBQADgBACgCIACgEIAAgJIgEgBIgGgBQgHAAgCACgAjYAdQgHgIAAgQQAAgMAGgIQAHgIANAAQAHAAAGADQAFADADAGQADAGAAAIIAAADIAAADIgkAAQAAAJAEAEQAEAEAJAAIAIgBIAIgCIACAKIgJADIgLABQgPAAgHgIgAi4AAQAAgFgEgEQgDgDgGAAQgHAAgDADQgDAEAAAFIAaAAIAAAAgAC5AkIAAg6IAKAAIABALIAAAAQADgGAEgDQAFgDAFAAIAEAAIADABIgBANIgDgBIgDAAQgFAAgDACQgEACgBAEQgDACAAAGIAAAegABgAkIAAglQAAgFgCgDQgDgCgFAAQgEAAgEACQgCADAAAEIAAAmIgNAAIAAgmQAAgFgDgCQgDgCgFAAIgFABQgEACgBACIAAAqIgNAAIAAg6IAKAAIACAGIAHgFQAEgCAEAAQAGAAAEACQAEACACAFQADgFAEgCQAFgCAFAAQAGAAAEADQAFACACAFQADAFAAAHIAAAlgAgXAkIAAglQAAgFgDgDQgDgCgGAAIgGABQgEABgCADIAAAqIgMAAIAAg6IAJAAIACAFQADgDAFgBQAEgCAFAAQAJAAAGAGQAFAFAAALIAAAlgAhoAkIAAg6IAKAAIABALIABAAQACgGAFgDQAEgDAGAAIADAAIADABIgBANIgDgBIgDAAQgEAAgEACQgEACgCAEQgBACgBAGIAAAegAkTAkIAAhJIANAAIAAA9IAhAAIAAAMg");
	this.shape.setTransform(32.7,7.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,16.7);


(lib.mc_ctaBaseTint = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	this.shape.setTransform(45,11.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,23);


(lib.mc_ctaBase = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0F8C").s().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	this.shape.setTransform(45,11.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,23);


(lib.mc_catchall = function() {
	this.initialize();

	// Layer 1
	this.hit = new lib.mc_hit();
	this.hit.setTransform(12,13,1,1,0,0,0,12,13);
	this.hit.alpha = 0;

	this.addChild(this.hit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.mc_bg = function() {
	this.initialize();

	// BG
	this.instance = new lib.mc_simpleSquare();
	this.instance.setTransform(150,125,6,5,0,0,0,25,25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(4).call(this.frame_14).wait(1));

	// HitZone
	this.hit = new lib.mc_hit();
	this.hit.setTransform(46.5,13.5,3.68,1.04,0,0,0,12.5,12.5);
	this.hit.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(15));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AmtBzQgTAAgBgVIAAi8QABgTATgBINbAAQATABABATIAAC8QgBAVgTAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:45,y:11.5}).wait(1).to({graphics:mask_graphics_1,x:45,y:11.5}).wait(1).to({graphics:mask_graphics_2,x:45,y:11.5}).wait(1).to({graphics:mask_graphics_3,x:45,y:11.5}).wait(1).to({graphics:mask_graphics_4,x:45,y:11.5}).wait(1).to({graphics:mask_graphics_5,x:45,y:11.5}).wait(1).to({graphics:mask_graphics_6,x:45,y:11.5}).wait(1).to({graphics:mask_graphics_7,x:45,y:11.5}).wait(1).to({graphics:mask_graphics_8,x:45,y:11.5}).wait(3).to({graphics:mask_graphics_11,x:45,y:11.5}).wait(1).to({graphics:mask_graphics_12,x:45,y:11.5}).wait(1).to({graphics:mask_graphics_13,x:45,y:11.5}).wait(1).to({graphics:mask_graphics_14,x:45,y:11.5}).wait(1));

	// Copy
	this.instance = new lib.mc_ctaCopy();
	this.instance.setTransform(45.5,-6.7,1,1,0,0,0,33.5,8.3);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regX:32.7,regY:7.8,x:44.7,y:2.6},0).wait(1).to({y:6.7},0).wait(1).to({y:8.7},0).wait(1).to({y:9.8},0).wait(1).to({y:10.4},0).wait(1).to({y:10.7},0).wait(1).to({regX:33.5,regY:8.3,x:45.5,y:11.3},0).wait(5));

	// Copy
	this.instance_1 = new lib.mc_ctaCopy();
	this.instance_1.setTransform(45.5,11.3,1,1,0,0,0,33.5,8.3);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:32.7,regY:7.8,x:44.7,y:22.2},0).wait(1).to({regX:33.5,regY:8.3,x:45.5,y:29.3},0).wait(12));

	// Base Color
	this.instance_2 = new lib.mc_ctaBaseTint();
	this.instance_2.setTransform(45,11.5,1,1,0,0,0,45,11.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({alpha:0.518},0).wait(1).to({alpha:0.751},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:1},0).wait(3).to({alpha:0},3).wait(1));

	// Base
	this.instance_3 = new lib.mc_ctaBase();
	this.instance_3.setTransform(45,11.5,1,1,0,0,0,45,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.5,26.5);


(lib.mc_replay_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"over":1,"out":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(10));

	// Layer 1
	this.instance = new lib.mc_replay();
	this.instance.setTransform(0.1,10,1,1,0,0,0,6.4,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:6.3,rotation:7.4,x:0},0).wait(1).to({rotation:38.5},0).wait(1).to({rotation:129.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.5},0).wait(1).to({rotation:179.2},0).wait(1).to({rotation:264.8,x:0.1,y:10.1},0).wait(1).to({regX:6.4,scaleX:1,scaleY:1,rotation:317.4,y:10},0).wait(1).to({regX:6.3,scaleX:1,scaleY:1,rotation:333.7,x:0},0).wait(1).to({rotation:344.8,x:0.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:352.1,x:0},0).wait(1).to({rotation:356.8},0).wait(1).to({rotation:359.2},0).wait(1).to({regX:6.4,rotation:360,x:0.1},0).wait(10));

	// hitArea (resize me)
	this.hit = new lib.mc_hit();
	this.hit.setTransform(0.2,10.4,1,1,0,0,0,12,13);
	this.hit.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-2.6,25,25);


(lib.mc_mainContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.buttonOver = function (e) {
			
			console.log(e.target +" : mouse over");
			
			if (e.target.currentLabel !== "over") {
				e.target.gotoAndPlay("over");
			}
			
		}.bind (this); 
		
		this.buttonOut = function (e) {
			
			console.log(e.target +" : mouse out");
			
				if (e.target.currentLabel !== "out") {
				e.target.gotoAndPlay("out");
			}
			
		}.bind (this); 
		
		
		/* catchall code */
		if(this.catchall){
			this.catchall.addEventListener("click", adKit.clickCatchAll);
			adKit.createButton(this.catchall);
		}
		/**/
		
		/* replay button code */
		if(this.replay){
			this.replay.addEventListener("click", adKit.replay);
			this.replay.addEventListener("mouseover", this.buttonOver);	
			this.replay.addEventListener("mouseout", this.buttonOut);
			adKit.createButton(this.replay);
		}
		/**/
		
		/* cta code */
		if(this.cta){
			this.cta.addEventListener("click", adKit.clickCTA);
			this.cta.addEventListener("click", this.buttonOut);
			this.cta.addEventListener("mouseover", this.buttonOver);
			this.cta.addEventListener("mouseout", this.buttonOut);
			adKit.createButton(this.cta);
		}
		/**/
	}
	this.frame_40 = function() {
		//if (this.replay) this.replay.gotoAndPlay("over");
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(9).call(this.frame_49).wait(1));

	// images
	this.instance = new lib.kettle();
	this.instance.setTransform(254.5,214);

	this.instance_1 = new lib.teapot();
	this.instance_1.setTransform(237.5,208);

	this.instance_2 = new lib.table();
	this.instance_2.setTransform(210.5,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(50));

	// replay
	this.replay = new lib.mc_replay_1();
	this.replay.setTransform(297.5,-6,1,1,0,0,0,10.5,22);

	this.timeline.addTween(cjs.Tween.get(this.replay).wait(39).to({y:24,alpha:0},0).wait(1).to({regX:0.7,regY:9.9,x:287.7,y:11.9,alpha:0.06},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.823},0).wait(1).to({alpha:0.903},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.996},0).wait(1).to({regX:10.5,regY:22,x:297.5,y:24,alpha:1},0).wait(2));

	// CTA
	this.cta = new lib.CTA();
	this.cta.setTransform(-115.9,121.5,1,1,0,0,0,45,11.5);
	this.cta.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(23).to({x:148,y:201.5,alpha:0.012},0).wait(1).to({regX:46.2,regY:13.2,x:149.7,y:198.6,alpha:0.465},0).wait(1).to({x:149.8,y:197.1,alpha:0.613},0).wait(1).to({x:149.9,y:196.1,alpha:0.711},0).wait(1).to({x:150,y:195.4,alpha:0.782},0).wait(1).to({y:194.9,alpha:0.837},0).wait(1).to({x:150.1,y:194.4,alpha:0.879},0).wait(1).to({y:194.1,alpha:0.913},0).wait(1).to({y:193.8,alpha:0.939},0).wait(1).to({x:150.2,y:193.6,alpha:0.96},0).wait(1).to({y:193.4,alpha:0.976},0).wait(1).to({y:193.3,alpha:0.987},0).wait(1).to({alpha:0.994},0).wait(1).to({y:193.2,alpha:0.999},0).wait(1).to({regX:45,regY:11.5,x:149,y:191.5,alpha:1},0).wait(13));

	// catchall
	this.catchall = new lib.mc_catchall();
	this.catchall.setTransform(300,250,12,10,0,0,0,25,25);
	this.catchall.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.catchall).wait(50));

	// logo
	this.instance_3 = new lib.mc_logo();
	this.instance_3.setTransform(150,91);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:8,regY:5,x:158,y:96,alpha:0.015},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.147},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.559},0).wait(1).to({alpha:0.697},0).wait(1).to({alpha:0.812},0).wait(1).to({alpha:0.899},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.99},0).wait(1).to({regX:0,regY:0,x:150,y:91,alpha:1},0).wait(38));

	// BG
	this.instance_4 = new lib.mc_bg();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.9,-30.6,562.5,310.6);


// stage content:
(lib.index = function() {
	this.initialize();

	// Main
	this._main = new lib.mc_mainContainer();
	this._main.setTransform(25,25,1,1,0,0,0,25,25);

	this.addChild(this._main);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,94.4,562.5,310.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;