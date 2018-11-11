
//buttonScrollTop//

$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop()>40){
			$('#topBTN').fadeIn();

		}else{
			$('#topBTN').fadeOut();
		}
	});
	
	$("#topBTN").click(function(){
		$('html,body').animate({scrollTop: 0},800);
	});
});

// Menu-toggle button

      $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })