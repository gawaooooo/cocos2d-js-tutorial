var AnimationLayer = cc.Layer.extend({
	ctor: function() {
		this._super();
		this.init();
	},
	init: function() {
		this._super();
		
		// create the hero sprite
		var spriteRunner = new cc.Sprite(res.runner_png);
		spriteRunner.attr({x: 80, y: 85});
		
		// create the move action
		// move the sprite from (80, 85) to (300, 85) in two seconds
		var actionTo = new cc.MoveTo(2, cc.p(300, 85));
		this.addChild(spriteRunner);
	}
});