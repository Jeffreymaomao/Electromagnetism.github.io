var mouse = { x: 100, y: 100 };
var canvas = document.getElementById('direction');
var ctx = canvas.getContext('2d');
const scale = 2;
[canvas.width, canvas.height] = [parseInt(canvas.style.width)*scale, parseInt(canvas.style.height)*scale];

var charge = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    draw: function() {
        ctx.fillStyle = '#B81414';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.translate(0, -1);
        ctx.font = '30px Latin Modern';
        ctx.fillText('+',this.x, this.y);
        ctx.translate(0, 1)
    }
}
var ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 6,
    color: 'red',
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};
var arrow = {
	x: mouse.x,
	y: mouse.y,
	endx: 10,
	endy: 10,
	dirx: 10,
	dirx: 10,
	length: 100,
	width: 3,
	headlen: 10,
	color: 'black',
	angle: 0,
	draw: function(){
		this.angle = Math.atan2(this.endy-this.y,this.endx-this.x);
	    ctx.save();
		ctx.fillStyle = this.color;
	    ctx.strokeStyle = this.color;
	 
	    //starting path of the arrow from the start square to the end square
	    //and drawing the stroke
	    ctx.beginPath();
	    ctx.moveTo(this.x, this.y);
	    ctx.lineTo(this.endx, this.endy);
	    ctx.lineWidth = this.width;
	    ctx.stroke();
	 
	    //starting a new path from the head of the arrow to one of the sides of
	    //the point
	    ctx.beginPath();
	    ctx.moveTo(this.endx, this.endy);
	    ctx.lineTo(this.endx-this.headlen*Math.cos(this.angle-Math.PI/7),
	               this.endy-this.headlen*Math.sin(this.angle-Math.PI/7));
	 
	    //path from the side point of the arrow, to the other side point
	    ctx.lineTo(this.endx-this.headlen*Math.cos(this.angle+Math.PI/7),
	               this.endy-this.headlen*Math.sin(this.angle+Math.PI/7));
	 
	    //path from the side point back to the tip of the arrow, and then
	    //again to the opposite side point
	    ctx.lineTo(this.endx, this.endy);
	    ctx.lineTo(this.endx-this.headlen*Math.cos(this.angle-Math.PI/7),
	               this.endy-this.headlen*Math.sin(this.angle-Math.PI/7));
	 
	    //draws the paths created above
	    ctx.stroke();
	    ctx.restore();
	}
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    arrow.draw();
    charge.draw();
    ball.draw();
}

function update() {
    ball.x = mouse.x;
    ball.y = mouse.y;
	arrow.x = mouse.x;
	arrow.y = mouse.y;
	arrow.dirx = (mouse.x - canvas.width/2);
	arrow.diry = (mouse.y - canvas.height/2);
	arrow.length = Math.sqrt((arrow.dirx)**2+(arrow.diry)**2)+1e-5;
	arrow.endx = mouse.x + 2*1e3*arrow.dirx/arrow.length**1.5;
	arrow.endy = mouse.y + 2*1e3*arrow.diry/arrow.length**1.5;
	if(background.style=='dark'){
			arrow.color = 'black';
	}
	else{
		arrow.color = 'white';
	}
}

function loop() {
    draw();
    update();
    requestAnimationFrame(loop);
}

canvas.addEventListener('mousemove', function(e) {
    var rect = canvas.getBoundingClientRect();
    var cssScaleX = canvas.width / canvas.offsetWidth;  
	var cssScaleY = canvas.height / canvas.offsetHeight;
    mouse.x = (e.clientX - rect.x)*cssScaleX;
    mouse.y = (e.clientY - rect.y)*cssScaleY;
});

loop();