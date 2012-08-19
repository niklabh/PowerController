function player(id){
  this.id            = id;
  this.smoothingLR   = new Array();
  this.smoothingFB   = new Array();
  this.smoothedLR    = 0;
  this.smoothedFB    = 0;
  
  this.x = CANVAS_WIDTH/2;
  this.y = CANVAS_HEIGHT/2;
  this.width = 50;
  this.height = 50;
  this.img = document.getElementById("im");
  this.score = 0;

  this.draw = function(num) {
    canvas.save();
	canvas.drawImage(this.img,this.x,this.y,this.width,this.height);
    //canvas.fillRect(this.x,this.y,this.width,this.height);
    canvas.restore();
  }

  this.update = function(){
    //Stay within Bounds
    if(this.x < 0){
      this.x = 0;
    }else if(this.x > CANVAS_WIDTH-this.width){
      this.x = CANVAS_WIDTH-this.width;
    }

    if(this.y < 0){
      this.y = 0;
    }else if(this.y > CANVAS_HEIGHT-this.height){
      this.y = CANVAS_HEIGHT-this.height;
    }
  }
}

function bead(id){
	this.id = id;
	this.visible = false;
	this.x = getRand(CANVAS_WIDTH);
	this.y = getRand(CANVAS_HEIGHT);
	this.img = document.getElementById("bead");
	
	this.draw = function(num) {
	if(this.visible){
    canvas.save();
	canvas.drawImage(this.img,this.x,this.y,this.width,this.height);
    canvas.restore();
	}
  }
  this.update = function(){
   for(var i in players){
      if(players[i].x>(this.x-25)&&players[i].x<(this.x+25))
	  {
		players[i].score += 1;
		this.visible = false;
	  }
    }
  }
  this.getRand() = function(seed){
	var rnum = Math.floor(Math.random() * seed);
	return rnum;
  };
}
