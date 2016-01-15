var colors=["#FF684D","#FF9A54","#EF9A9A","#ccf","#cfc","#ffc","#EFF2B9","#B0C4DE","#BEED00","#EF93EE","#9E93EF"];

function giveRandomColors(){
	var numberofNotes=$("#stickynotes li").length, i = 0, changes = 0;
	while(changes < numberofNotes){
		var selector = "#stickynotes li:nth-child("+i+") a";
		var stickynotes = $(selector);
		if (stickynotes.length==1){
			changes += 1;
			console.log(changes);
		}else{
			i++;
			continue;
		}
		var randomColor = Math.floor(Math.random()*10)%colors.length;
		stickynotes.css({'background':colors[randomColor]});
		i++;
	}
};

$(document).ready(function(){
	giveRandomColors();
});

