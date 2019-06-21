$(document).ready(function(){
	
	$("#accordion").accordion({ 
	collapsible: true 
	});
	
	$('#accordion2').accordion({
		collapsible: true
	});
	
	$('#accordion3').accordion({
		collapsible: true
	});
	
		$('#accordion4').accordion({
		collapsible: true
	});
	
		$('#accordion5').accordion({
		collapsible: true
	});
	
	$("#shady").click(function(){
	$(this).slideUp('slow');
	$(this).slideDown('slow');
	});
	
	$("#last").click(function(){
		$(this).animate({opacity: '0.2' }, 'slow')
		$(this).animate({opacity: '1' }, 'slow')
	});
	

});