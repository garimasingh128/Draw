const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

function setup() {
	let c=  	createCanvas(window.innerWidth, window.innerHeight);
	background(255);
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


// function to change the color of all text labels
function allLabelColor(textColor){
  let labels = document.getElementsByTagName("label");
	for (let i=0 ; i < labels.length; i++) {
 		labels[i].style.color = textColor;
	}
}

clear.addEventListener('click', () => {
	paths.splice(0);
	background(255);
});

dark.addEventListener('change', () => {
	if(document.getElementById("dark").checked == true){
		background(0);
		select(".sidebar").style("background-color","#222");
		select("footer").style("background-color","#222");
		select("canvas").style("background-color","black");
		allLabelColor("white");
		select("footer").style("color","white");
	}
	else{
		background(255);
		select(".sidebar").style("background-color","#e6e6e6");
		select("footer").style("background-color","#e6e6e6");
		select("canvas").style("background-color","white");
		allLabelColor("black");
		select("footer").style("color","black");
	}
});

download.addEventListener('click', () => {
saveCanvas(c, 'myCanva', 'jpg');
});
