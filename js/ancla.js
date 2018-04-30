$(document).ready(function(){
    
$('button.btn').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
			$('body,html').stop(true,true).animate({			
				scrollTop: $(strAncla).offset().top
			},2000);
	});	
});