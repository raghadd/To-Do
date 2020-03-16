// Check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

// Click on X to delete todo
$("ul").on("click", "span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	 
})

// Add listenr to input
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		// text input as var
		var todoText = $(this).val();
		$(this).val("");
		// add new li to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
	}
})