function setup() {
	frameRate(60)
	var c = createCanvas(400, 400);
	fill(29, 120, 116)
	r = random(0,255);	
	g = random(0,255); 
	b = random(0,255); 
	z = color(r, g, b);
	
	  cnv = createCanvas(400, 400);
	  background(29, 120, 116);
	}

function mouseClicked(){
	r = random(0,255);	
	g = random(0,255); 
	b = random(0,255); 
	z = color(r, g, b);
}

function draw() 
{	
	//Define a random color value for the horns
	background(29, 120, 116);
	a = color(0,0,0)
	b = color (0,0,0)
	d = color(159,232,255)
	f = color(255,255,255) 
	
	
	
	
	triangle(128,79,82,116,77,28)
	triangle(270,82,315,116,314,28)
	
	//head 
	fill(d);
	quad(81,134,15,300,91,377,90,171)
	quad(324,164,308,371,374,285)
	ellipse(200,176,278,258)
	
	//e-yes
	fill(a)
	ellipse(138,158,40,40)
	
	line(239,140,265,172)
	line(231,171,270,143)
	
	//nose
	fill(a)
	triangle(165,190,217,190,192,200)
	
	//mouth
	line(191,221,167,254)
	line(191,221,214,254)
	
	fill(f)
	triangle(121,149,126,157,129,150)
	

	//hornz
	fill(a);
	if ((mouseX < 430 && mouseX > 30) && (mouseY < 400 && mouseY > 0 )){
		fill(z); 
	}}
