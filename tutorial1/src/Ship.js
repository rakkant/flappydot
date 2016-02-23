var Ship = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/ship.png' );
        this.direction = Ship.DIR.UP;
    },
    update: function( dt ) {
	var pos = this.getPosition();
 
	if (this.direction == 1){
	   if (  pos.y < screenHeight  ){
		  this.setPosition( new cc.Point( pos.x, pos.y + 5 ) );
	   } else if (  pos.y >= screenHeight  ){
		 this.setPosition( new cc.Point( pos.x, 0 ) );
	   }
    }else if (this.direction == 2){
	   if (pos.x < screenWidth  ){
	  	 this.setPosition( new cc.Point( pos.x+5, pos.y ) );
       } else if (pos.x >= screenHeight ){
		this.setPosition( new cc.Point( 0 ,pos.y ) );
  	   }
    }
//    } else if (this.direction == 3){
//	  if (  pos.y < screenHeight  ){
//		 this.setPosition( new cc.Point( pos.x, pos.y -5 ) );
//	  }else if (  pos.y >= screenHeight  ){
// 	  this.setPosition( new cc.Point( pos.x,  pos.y) );
//	  }
//    }else if (this.direction == 4){
//	  if (pos.x < screenWidth  ){
//	    this.setPosition( new cc.Point( pos.x-5, pos.y ) );
//   	 }else if (pos.x >= screenWidth ){
//        this.setPosition( new cc.Point( pos.x, pos.y ) );
//  	 }
//   }      
    
},
    
    switchDirection: function() {
	if ( this.direction == Ship.DIR.UP ) {
	    this.direction = Ship.DIR.RIGHT;
	    this.setRotation( 90 );
    }
//	} else if ( this.direction == Ship.DIR.RIGHT ){
//        this.direction = Ship.DIR.DOWN;
//	    this.setRotation( 180 );
//    }else if ( this.direction == Ship.DIR.DOWN ){
//        this.direction = Ship.DIR.LEFT;
//	    this.setRotation( -90 );
//    }
        else {
	    this.direction = Ship.DIR.UP;
	    this.setRotation( 0 );
	}
    }
});

Ship.DIR = {
    UP: 1,
    RIGHT: 2,
    DOWN: 3,
    LEFT: 4
};
                            