/**
 * Created with JetBrains WebStorm.
 * User: Gwen
 * @project CatchTheFlowers
 * Date: 25/07/12
 * Time: 11:52
 * To change this template use File | Settings | File Templates.
 */
var BeeNode = CGSGNodeAnimatedSprite.extend(
	{
		initialize : function(x, y, context, parentState, id) {
			this._super(x, y, null, context);

			this.speed = CGSGMath.fixedPoint(100 + Math.random() * 250);

			this.parentState = parentState;
			this.id = id;

			//name, speed, frames, sliceX, sliceY, width, height, framesPerLine
			this.addAnimation("fly", 4, 3, 0, 0, 16, 16, 1);
		},


		start : function() {
			this.initPosAndSpeed();
			this.play("fly", null);
			this.startAnim();

			var bindReStartAnim = this.reStartAnim.bind(this);
			sceneGraph.getTimeline(this, "position.x").onAnimationEnd = bindReStartAnim;
		},


		initPosAndSpeed : function() {
			this.currentPos = 0;
			var x = CGSGMath.fixedPoint(-200 + Math.random() * 180);
			var y = CGSGMath.fixedPoint(Math.random() * (canvasWidth * 0.8));
			this.translateTo(x, y);
			this.speed = CGSGMath.fixedPoint(150 + Math.random() * 100);
		},

		startAnim : function() {
			sceneGraph.animate(this, "position.x", this.speed, this.position.x,
			                   canvasWidth + 20, "linear", 0, true);
		},

		reStartAnim : function() {
			this.initPosAndSpeed();
			this.startAnim();
		}
	}
);