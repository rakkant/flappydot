var Ship = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/ship.png' );
        this.direction = Ship.DIR.UP;
    },
    update: function( dt ) {
	var pos = this.getPosition();
 
	if ( this.direction == 1 && pos.y < screenHeight  ) {
	    this.setPosition( new cc.Point( pos.x, pos.y + 5 ) );
	} else if ( this.direction == 1 && pos.y >= screenHeight  ){
	    this.setPosition( new cc.Point( pos.x, 0 ) );
    }else if ( this.direction == 2 && pos.x < screenWidth  ){
        this.setPosition( new cc.Point( pos.x+5, pos.y ) );
    } else if ( this.direction == 2 && pos.x >= screenWidth  ){
        this.setPosition( new cc.Point( 0, pos.y ) );
    } 
    },
    switchDirection: function() {
	if ( this.direction == Ship.DIR.UP ) {
	    this.direction = Ship.DIR.RIGHT;
	    this.setRotation( 90 );
	} else {
	    this.direction = Ship.DIR.UP;
	    this.setRotation( 0 );
	}
    }
});

Ship.DIR = {
    UP: 1,
    RIGHT: 2
};
                            