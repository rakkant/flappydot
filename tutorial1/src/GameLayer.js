var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.gold = new Gold();
	   this.addChild( this.gold );
	   this.gold.randomPosition();
        this.scheduleUpdate();
       this.ship = new Ship();
	   this.ship.setPosition( new cc.Point( 200, 220 ) );
	   this.addChild( this.ship );
	   this.ship.scheduleUpdate();
        this.addKeyboardHandlers();
    this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
	this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
        this.scoreLabel.setString( 5 );
	this.addChild( this.scoreLabel );
        return true;
    },
    onKeyDown: function( keyCode, event ) {
	if ( keyCode == cc.KEY.space ) {
	    this.ship.switchDirection();
	   }
    },
    onKeyUp: function( keyCode, event ) {
	console.log( 'Up: ' + keyCode.toString() );
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            },
            
        }, this);
    },
     update: function() {
	if ( this.gold.closeTo( this.ship ) ) {
	    this.gold.randomPosition();
	}
    }

});

 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

    