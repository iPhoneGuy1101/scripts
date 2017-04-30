var shapes, shapesHTML,
	canvas, context,
	circles, squares, images;
function getFromHTML(h, type){
	return h.getElementsByTagName(type);
};
function Initialize(){
	shapes = [];
	canvas = document.createElement("canvas");
	context = canvas.getContext("2d");
	shapesHTML = document.getElementsByTagName('shapes')[0];
	circles = getFromHTML(shapesHTML, "circle");
	squares = getFromHTML(shapesHTML, "square");
	images = getFromHTML(shapesHTML, "image");
	document.body.append(canvas);
	document.body.style.padding = "0";
	document.body.style.margin = "0";
	document.body.style.overflow = "hidden";
	initShapes(circles);
	initShapes(images, true);
	initShapes(squares);
	Draw();
};
function initShapes(circles, t){
	for(var i=0; i<circles.length; i++){
		var tmp = circles[i];
		var pos, color, size;
		if(tmp.hasAttribute("pos")) {
			pos = [parseInt(tmp.getAttribute("pos").split(",")[1]),parseInt(tmp.getAttribute("pos".split(","))[1])];
		} else {
			pos = [Math.random()*canvas.width, Math.random()*canvas.height];
		}
		if(tmp.hasAttribute("texture")) {
			texture = tmp.getAttribute('texture');
		} else {
			texture = null;
		}
		if(tmp.hasAttribute("color")) {
			color = tmp.getAttribute("color");
		} else {
			color = "rgb(R,G,B)".replace("R", Math.round(Math.random()*255)).replace("G",Math.round(Math.random()*255)).replace("B",Math.round(Math.random()*255));
		}
		if(tmp.hasAttribute("size")) {
			size = tmp.getAttribute("size");
		} else {
			size = Math.random()*32+16;
		}
		if(tmp.hasAttribute("speed")) {
			speed = tmp.getAttribute("speed");
		} else {
			speed = Math.random()*2+2;
		}

		tmp = new Shape(tmp.tagName.toLowerCase(), pos, color, size, speed, t?texture:null);
		shapes.push(tmp);
	};
	return shapes;
}
function Draw(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.fillStyle = "black";
	context.fillRect(0,0,canvas.width,canvas.height);
	for (var i = shapes.length - 1; i >= 0; i--) {
		shapes[i].show().update();
	}
	setTimeout(Draw, 1000/69);
}

function Shape(type, pos, color, size, speed, extData){
	if(type.toLowerCase()=="circle"){
		this.d = function(ctx,x,y,s){ctx.arc(x,y,s/2,0,2*Math.PI);};
	} else if(type.toLowerCase()=="square"){
		this.d = function(ctx,x,y,s){ctx.rect(x-s/2,y-s/2,s,s);};
	} else if(type.toLowerCase()=="image"){
		this.image = new Image();
		this.image.src = extData||"";
		this.d = function(ctx,x,y,s){ctx.drawImage(this.image,x-s/2,y-s/2,s,s)};
	} else {
		this.d = function(ctx,x,y,s){ctx.fillText(type+" isn't\na valid\ntype", x, y-s/3);};
	};
	this.show = function(){
		context.beginPath();
		context.fillStyle = this.color;
		this.d(context, this.x,this.y, this.size);
		context.fill();
		context.closePath();
		return this;
	};
	this.update = function(){
		this.x += this.velX;
		this.y += this.velY;
		if(this.x < 0 || this.x > canvas.width) this.velX *= -1;
		if(this.y < 0 || this.y > canvas.height) this.velY *= -1;
		return this;
	};
	this.x     = pos[0];
	this.y     = pos[1];
	this.velX  = speed!=null?(Math.random()>0.5?-speed:speed):(Math.random()-0.5);
	this.velY  = speed!=null?(Math.random()>0.5?-speed:speed):(Math.random()-0.5);
	this.color = color;
	this.size  = size;
};

window.onload = Initialize;
