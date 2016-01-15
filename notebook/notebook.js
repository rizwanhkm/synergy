var loadBook = function(book){
	var bookid="#"+book;
	$(bookid).turn({
		width:922,
		height:600,
		elevation:50,
		gradients:true,
		autoCenter:true
	});
	$(bookid + "-viewport").hide();
	$(bookid + "-hide").hide();
	console.log(book + "hidden");

	$(bookid + "-show").on("click", function(){
		
		$(bookid + "-show").hide();
		$(bookid + "-hide").show();
		$(bookid + "-viewport").show(300);
		
		$(document).on("keydown",function(e){
			switch(e.which){
				case 37:
					$(bookid).turn("previous");
					console.log("left key pressed");
					break;
				case 39:
					$(bookid).turn("next");
					console.log("right key pressed");
					break;

			}
			e.preventDefault();
		});
	});

	$(bookid + "-hide").on("click", function(){

		$(bookid + "-hide").hide();
		$(bookid + "-show").show();
		$(bookid + "-viewport").hide(300);

		$(document).off("keydown",function(e){ });
		$(document).unbind("keydown");
	});

};
$(document).ready(function(){
	loadBook("book1");
	loadBook("book2");

});

