alert("INSTRUCTIONS TO USE");
alert("Click on the text field to add a new task.");
alert("Click on a task that is completed to strike it out.");
alert("Use the trash icon to delete a task.");
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
$("ul").on("click","span",function(){
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
		var t=$("li").length;
		console.log(t);
		if(t==0)
		{
			console.log("OVER");
			$("div").append("<h2 id='add'>ADD NEW TASKS</h2>");
		}
	});
	event.stopPropagation();
});
$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
	$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + '</li>');
		$('input[type="text"]').val("");
	
	var t=$("li").length;
	if(t>0)
	{
		console.log("MORE");
		$("#add").remove();
	}
	} 
});