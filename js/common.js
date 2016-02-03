$(document).ready(function() {
	
	//кнопка sandwiich
	$(".nav_toggle").click(function() {
		$("#sandwich").toggleClass("active");
	});
	
	$(".nav_mnu ul a").click(function() {
		$(".nav_mnu").fadeOut(600);
		$("#sandwich").toggleClass("active");
	});

	$(".nav_toggle").click(function() {
		if ($(".nav_mnu").is(":visible")) {
			$(".nav_mnu").fadeOut(600);
		} else {
			$(".nav_mnu").fadeIn(600);
		};
	});


  //initialize SWIPPER touch-slider
  var pageName = ["Нулевой", "Портфолио", "Навыки", "Главная", "Навыки", "Портфолио"],
   swiperH = new Swiper('.swiper-container-h', {
    // Optional parameters 
    	initialSlide: 3,
    	grabCursor: true,
    	pagination: '.swiper-pagination-h',
    	paginationClickable: true,
    	paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + pageName[(index+1)] + '</span>';
      },
      speed: 1000
  });
  var swiperV = new Swiper('.swiper-container-v', {
      pagination: '.swiper-pagination-v',
      paginationClickable: true,
      direction: 'vertical',
      mousewheelControl: true,
      speed: 500
  });
    var swiperV = new Swiper('.swiper-container-v1', {
      pagination: '.swiper-pagination-v1',
      paginationClickable: true,
      direction: 'vertical',
      mousewheelControl: true,
      speed: 500
  });
         
});
					