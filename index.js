const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

function setup() {
 let c=  	createCanvas(window.innerWidth, window.innerHeight);
background(255);
//saveCanvas(c, 'myCanvas', 'jpg');
download.addEventListener('click', () => {
saveCanvas(c, 'myCanva', 'jpg');
});
}

function draw() {
	noFill();
	
	if(mouseIsPressed){
		const point = {
			x: mouseX,
			y: mouseY,
			color: colorInput.value,
			weight: weight.value
		};
		currentPath.push(point);
	}
	
	paths.forEach(path => {
		beginShape();
		path.forEach(point => {
			stroke(point.color);
			strokeWeight(point.weight);
			vertex(point.x, point.y);
		});
		endShape();
	});
}

function mousePressed() {
	currentPath = [];
	paths.push(currentPath);
}

clear.addEventListener('click', () => {
	paths.splice(0);
	background(255);
});

download.addEventListener('click', () => {
saveCanvas(c, 'myCanva', 'jpg');
});