/* initialize elements */
var sketchArea = document.querySelector('#sketch-area');
var divGrids = document.querySelector('.grids');
var gridBtn = document.querySelector('#grid');
var clrBtn = document.querySelector('#clear');
var colorBtn = document.querySelector('#color-btn');
var boxDivs = document.getElementsByClassName('grids');

//create, append and style element for every iteration
for(var i = 0; i < 256; i++) {
	var boxDiv = document.createElement('div');
	sketchArea.appendChild(boxDiv).classList.add('grids', 'grids-init-width');
}

draw();

clrBtn.addEventListener('click', clear);

gridBtn.addEventListener('click', function() {
	var ans = prompt('Enter a Number (from 16 to 64):');
	if((ans < 16 && ans != "" && ans != null) || ans > 64) {
        alert("Input numbers within the given range!");
		clear();
    } else if (ans == "") {
    	alert("Please input a number.");
	} else if(ans == null) {
		draw();
	} else {
		setGridSize(ans);
	}
})

colorBtn.addEventListener('focus', randomColor, false);


/* functions */
function draw() {
	for(var i = 0; i < boxDivs.length; i++) {
		boxDivs[i].addEventListener("mouseover", function() {
			this.style.background = "#000";
		}, false);
	}	
}

function clear() {
	for(var i = 0; i < boxDivs.length; i++) {
		boxDivs[i].style.background = "#fff";
	}
	draw();	
}

function setGridSize(ans) {
	var x = 640 / ans;
	var count = ans*ans;

	sketchArea.innerHTML = "";
	
	for(var i = 0; i < count; i++) {
		var boxDiv = document.createElement('div');
		sketchArea.appendChild(boxDiv).classList.add('grids');
	}

	for(var j = 0; j < boxDivs.length; j++) {
		boxDivs[j].style.width = x + 'px';
		boxDivs[j].style.height = x + 'px';
	}

	draw();
}

function randomColor() {
	clear();
	for(var i = 0; i < boxDivs.length; i++) {
		boxDivs[i].addEventListener("mouseover", function() {
			var min = Math.ceil(0);
			var max = Math.floor(255);
			var rColor = Math.floor(Math.random() * (max - min + 1)) + min;
			var gColor = Math.floor(Math.random() * (max - min + 1)) + min;
			var bColor = Math.floor(Math.random() * (max - min + 1)) + min;

			this.style.background = 'rgb(' + rColor + ',' + gColor + ',' + bColor + ')';
		}, false);
	}
}

