$(document).ready(function() {
	defGrid();
	
	function defGrid() { 
		for(var i = 0; i < 256; i++) {
			$('.container').append('<div class="grid"></div>');
			$('div.grid').css({'background-color': 'white', 'width': '40px', 'height': '40px', 'float': 'left', 'display': 'inline-block', 'position': 'relative'});
		}
		draw();
	}
		
	$('#grid').click(function() {
		var ans = prompt('Enter a Number (from 16 to 64):');
		if((ans < 16 && ans != "" && ans != null) || ans > 64) {
            alert("Input numbers within the given range!");
			clear();
        } else if (ans == "" || ans == null) {
            clear();
		} else {
			style(ans);
		}
	});
	
	$('#clear').click(function() {
		clear();
		});	
	
	function style(ans) {
		var x = 640 / ans;
		var count = ans*ans;
		$('div.grid').remove();
		for(var i = 0; i < count; i++) {
			$('.container').append('<div class="grid"></div>');
		}	
			$('div.grid').each(function() {
				$(this).css({'background-color': 'white', 'width': x+'px', 'height': x+'px', 'float': 'left', 'display': 'inline-block', 'position': 'relative'});
			});
		draw();
	}
	
	function draw() {
        $('.grid').mouseenter(function() {
		$(this).css({'background-color': 'black'})});
    }
	
	function clear() {
        $('div.grid').css('background', 'white');
    }
});


