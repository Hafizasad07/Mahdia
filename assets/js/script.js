$(".header-flex1 .header-icon").click(function(){
    $(".sidebar-section .sidebar-content").addClass("sidebar-animation");
    $(".sidebar-section").addClass("show");
    $(".sidebar-section .sidebar-content").addClass("in-left");
    setTimeout(() => {
        $(".sidebar-section .sidebar-content-right").addClass("sidebar-animation");
        $(".sidebar-section .sidebar-content-right").addClass("in-left");        
    }, 1000);
})

$(".sidebar-close-function").click(function(){
    $(".sidebar-section").removeClass("show");
    $(".sidebar-section .sidebar-content-right").removeClass("in-left"); 
    setTimeout(() => {
        $(".sidebar-section .sidebar-content").removeClass("in-left");
    }, 1000);
})

jQuery(".item-carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    margin: 20, 
    responsiveClass: true,
    autoHeight: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 2
      },
  
      1366: {
        items: 2
      }
    }
});



//  Scroll Image Animation
var $animation_elements = $('.img-animation');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        var taargetAnimation = $element.attr('data-target');
        $element.addClass(taargetAnimation);
        setTimeout(() => {
            $element.addClass("no-before");
        }, 1000);
    }
    // else {
        
    // }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');