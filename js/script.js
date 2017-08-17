/* Author: Mark Atherton */

$(document).ready(function(){

	//browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700;
	//grab the "back to top" link
	$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	

});
function fixedSizePopup() {
	  var theWindow = window.open('https://matherton.typeform.com/to/Ggm0ss', '_blank', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no top=300,left=500,width=500,height=500');
	}
//toggle open for btn text and add close form functionality
$('.open-form').click(function(){
    var $this = $(this);
    $this.removeClass('open');
    if($this.hasClass('open')){
        $this.text('open contact form');         
    } else {
        $this.text('close contact form');
    }
});
