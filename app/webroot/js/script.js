function bootstrap_hack(){
	// badge on click
	$('table .badge').bind('click', function(){
		window.location = $(this).find('a').attr('href');
	});
}

function init_popup(){
	$('.popup.url').colorbox();
	$('.popup.inline-url').colorbox();
}

$(document).ready(function(){
	$('div#child-content').on("click", '#child-menu .btn-group .btn', function(){	
		$('#child-menu .btn').removeClass('active');
		$(this).addClass('active');
	});
    
    // change record background color in table when checkbox on checked !!
    $(document).on("change", "input[type=checkbox].check-record", function(){
        if($(this).is(':checked'))
        {
            $(this).closest('tr').addClass('on-checked');
        }
        else
        {
            $(this).closest('tr').removeClass('on-checked');
        }
    });
	
	// init popup function
	init_popup();
	
	// init bootstrap hack
	bootstrap_hack();
});
