/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-hero-secondary-variant-with-card.js. */
(function ($, Drupal) {
$(document).ready(function () {

  for(var i = 0; i <= 9; i++) { 
    if ($('.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .slider-items').length) {
      // Get count of slides
      $('.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .slider-items').on('init reinit', function (event, slick) {

        if (slick.slideCount < 4) {
          $('.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] div.carousel-control').addClass('control-hidden');
        }
        else {
          $('.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] div.carousel-control').removeClass('control-hidden');
        }
      });
      
      $('.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .slider-items').slick({
        speed: 300,
        // slidesToShow: 4,
        initialSlide: 0,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-prev',  
        nextArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-next',
        infinite: true,
        mobileFirst: true,
        rows: 1,

        responsive: [{
          breakpoint: 1200, // mf min(1200)
          settings: {
            // slidesToShow: 2.2,
            initialSlide: 0,
            infinite: true,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-prev',  
            nextArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-next',
            variableWidth: true,
          },
        }, {
          breakpoint: 992,  // mf min(992)
          settings: {
            // slidesToShow: 1.8,
            initialSlide: 0,
            infinite: true,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-prev',  
            nextArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-next',
            variableWidth: true,
          },
        }, {
          breakpoint: 767, // mf min(767)
          settings: {
            // slidesToShow: 1.6,
            initialSlide: 0,
            infinite: true,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-prev',  
            nextArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-next',
            variableWidth: true,
          },
        }, {
          breakpoint: 576,  // mf min(576)
          settings: {
            // slidesToShow: 1.5,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
            
            rows: 1,
            prevArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-prev',  
            nextArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-next',
            variableWidth: true,
          },
        }, {          
          breakpoint: 300,  // mf min(320)
          settings: {
            // slidesToShow: 1,
            initialSlide: 0,
            infinite: true,
            slidesToScroll: 1,
            
            rows: 1,
            prevArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-prev',  
            nextArrow: '.wp-block-custom-ge-hero-secondary-variant-with-card[data-ge-hero-secondary-variant-with-card-instance-id = \'' + i + '\'] .ctrl-next',
            variableWidth: true,
          },
        },
        

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ],
                    
      });    
    }    
  }
  
});
})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-hero-secondary-variant-with-card.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-sub-navigation-variant-1.js. */
// import $ from "jquery";

(function ($, Drupal) {
    $(document).ready(function () {

        if ($(window).width() < 768) {
            $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').on('click', function () {

                const targetEl = $(this).attr('href');
                if ($(this).closest(".wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone").hasClass("sticky")) {
                    if ($(targetEl).length) {
                        $('html, body').animate({
                            scrollTop: $(targetEl).offset().top - 135
                        });
                    }
                } else {
                    if ($(targetEl).length) {
                        $('html, body').animate({
                            scrollTop: $(targetEl).offset().top - 198
                        });
                    }
                }

            });
        } else if ($(window).width() > 767 && $(window).width() < 991) {
            $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').on('click', function () {

                const targetEl = $(this).attr('href');
                if ($(this).closest(".wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone").hasClass("sticky")) {
                    if ($(targetEl).length) {
                        $('html, body').animate({
                            scrollTop: $(targetEl).offset().top - 160
                        });
                    }
                } else {
                    if ($(targetEl).length) {
                        $('html, body').animate({
                            scrollTop: $(targetEl).offset().top - 240
                        });
                    }
                }

            });
        } else if ($(window).width() > 1200) {
            $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').on('click', function () {

                const targetEl = $(this).attr('href');
                if ($(this).closest(".wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone").hasClass("sticky")) {
                    if ($(targetEl).length) {

                        $('html, body').animate({
                            scrollTop: $(targetEl).offset().top - 155
                        });
                    }

                } else {
                    if ($(targetEl).length) {
                        $('html, body').animate({
                            scrollTop: $(targetEl).offset().top - 235
                        });
                    }
                }

            });
        } else {
            $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').on('click', function () {

                const targetEl = $(this).attr('href');
                if ($(this).closest(".wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone").hasClass("sticky")) {
                    if ($(targetEl).length) {
                        $('html, body').animate({
                            scrollTop: $(targetEl).offset().top - 170
                        });
                    }
                } else {
                    if ($(targetEl).length) {
                        $('html, body').animate({
                            scrollTop: $(targetEl).offset().top - 250
                        });
                    }
                }

            });
        }

        $(window).scroll(function () {
            if ($('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone').length) {
                let subNavHeightFromTop = $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone').position().top;
                let scrollTop = $(window).scrollTop();
                if (scrollTop > subNavHeightFromTop) {

                    $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone').addClass('sticky');
                    $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone li').addClass('padd-LR');

                } else {
                    $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone').removeClass('sticky');
                    $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone li').removeClass('padd-LR');

                }

                let scrollPosition = $(window).scrollTop();
                $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').each(function (subNavLink) {
                    let currentLink = $(this);
                    let refSection = $(currentLink.attr("href"));

                    if ($(window).width() < 768) {
                        if (subNavLink == 0) {
                            if ((refSection.position().top - 160) <= scrollPosition && (refSection.position().top + 360) + refSection.height() > scrollPosition) {
                                $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').removeClass("highlight-nav-item");
                                currentLink.addClass("highlight-nav-item");
                            } else {
                                currentLink.removeClass("highlight-nav-item");
                            }
                        } else {
                            if ((refSection.position().top - 60) <= scrollPosition && (refSection.position().top + 60) + refSection.height() > scrollPosition) {
                                $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').removeClass("highlight-nav-item");
                                currentLink.addClass("highlight-nav-item");
                            }
                            else {
                                currentLink.removeClass("highlight-nav-item");
                            }
                        }
                    } else if ($(window).width() > 767 && $(window).width() < 991) {
                        if (subNavLink == 0) {
                            if ((refSection.position().top - 160) <= scrollPosition && (refSection.position().top + 360) + refSection.height() > scrollPosition) {
                                $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').removeClass("highlight-nav-item");
                                currentLink.addClass("highlight-nav-item");
                            } else {
                                currentLink.removeClass("highlight-nav-item");
                            }
                        } else {
                            if ((refSection.position().top - 80) <= scrollPosition && (refSection.position().top + 80) + refSection.height() > scrollPosition) {
                                $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').removeClass("highlight-nav-item");
                                currentLink.addClass("highlight-nav-item");
                            }
                            else {
                                currentLink.removeClass("highlight-nav-item");
                            }
                        }
                    } else if ($(window).width() > 1200) {
                        if (subNavLink == 0) {
                            if ((refSection.position().top - 160) <= scrollPosition && (refSection.position().top + 360) + refSection.height() > scrollPosition) {
                                $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').removeClass("highlight-nav-item");
                                currentLink.addClass("highlight-nav-item");
                            } else {
                                currentLink.removeClass("highlight-nav-item");
                            }
                        } else {
                            if ((refSection.position().top - 160) <= scrollPosition && (refSection.position().top + 160) + refSection.height() > scrollPosition) {
                                $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').removeClass("highlight-nav-item");
                                currentLink.addClass("highlight-nav-item");
                            }
                            else {
                                currentLink.removeClass("highlight-nav-item");
                            }
                        }
                    } else {
                        if (subNavLink == 0) {
                            if ((refSection.position().top - 160) <= scrollPosition && (refSection.position().top + 360) + refSection.height() > scrollPosition) {
                                $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').removeClass("highlight-nav-item");
                                currentLink.addClass("highlight-nav-item");
                            } else {
                                currentLink.removeClass("highlight-nav-item");
                            }
                        } else {
                            if ((refSection.position().top - 175) <= scrollPosition && (refSection.position().top + 175) + refSection.height() > scrollPosition) {
                                $('.wp-block-custom-ge-sub-navigation-variant-1 .subNavGEone ul li a').removeClass("highlight-nav-item");
                                currentLink.addClass("highlight-nav-item");
                            }
                            else {
                                currentLink.removeClass("highlight-nav-item");
                            }
                        }
                    }
                });
            }

        });

    });
})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-sub-navigation-variant-1.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-user-bio-grid.js. */
// Place your frontend scripts here

/*
  If you use frontend scripts, please uncomment the
  corresponding line on "webpack.config.js"
 */
 

  (function () {
    equalHeight();
  })();
   
  // window.onresize = function(){
  //   equalHeight();
  // }
   
  function equalHeight() {
    var findClass = document.getElementsByClassName('card-body-leader');
    var tallest = 0; 
    // Loop over matching divs
    for(i = 0; i < findClass.length; i++)
    {
      var ele = findClass[i];
      var eleHeight = ele.offsetHeight;
      tallest = (eleHeight>tallest ? eleHeight : tallest);
    }
    for(i = 0; i < findClass.length; i++)
    {
      findClass[i].style.height = tallest + 50 + "px";
    }
  }

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-user-bio-grid.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-image-block-with-hotspot.js. */
//import $ from "jquery";
(function ($, Drupal) {
    $(document).ready(function() {
        $(".hotspot").on('click',function(){
            var hotspotAttr = $(this).attr('data-hotspot');
            var parentID = '#'+ $(this).parents('.wp-block-custom-ge-image-block-with-hotspot').attr('id');
            
            if($(parentID).find(".img-hotspot-content.img-hotspot-content-visible[data-hotspot="+hotspotAttr+"]").length){
                $(parentID).find(".img-hotspot-content[data-hotspot="+hotspotAttr+"]").removeClass('img-hotspot-content-visible');
                $(this).removeClass('show-content');
            }
            else{
                $(parentID).find(".img-hotspot-content").removeClass('img-hotspot-content-visible');
                $(parentID).find(".hotspot").removeClass('show-content');
                var height =  $(this).height();
                var width = $(parentID).find(".img-hotspot-content[data-hotspot="+hotspotAttr+"]").outerWidth() / 2 - $(this).outerWidth() / 2;
                var left = $(this).position().left - width - 1;
                var hotspotHT = $(parentID).find(".img-hotspot-content[data-hotspot="+hotspotAttr+"]").outerHeight()/2;
                var right = "unset" ;
                var top ;

                if(window.outerWidth<992){
                   var rightSidePosition=  $(this).parents('.img-wrapper').width() - $(this).position().left ;
                   top = $(this).position().top + height + 74 ;
                    if($(this).position().left<95){
                        left = $(this).position().left + 5 - $(this).outerWidth() * 2;
                    }
                    else if(rightSidePosition<95){
                        right = rightSidePosition + 5 - $(this).outerWidth() * 2;
                        left ="unset";
                    } 
                    else{
                        if($(parentID).find(".img-hotspot-content.left-position[data-hotspot="+hotspotAttr+"]").length || $(parentID).find(".img-hotspot-content.right-position[data-hotspot="+hotspotAttr+"]").length){
                            top = $(this).position().top + height + 74 ;
                        }
                    }
                   
                }
                else{
                    if($(parentID).find(".img-hotspot-content.left-position[data-hotspot="+hotspotAttr+"]").length || $(parentID).find(".img-hotspot-content.right-position[data-hotspot="+hotspotAttr+"]").length){
                        top = $(this).position().top + (height/2)  - hotspotHT;
                    }
                    else{
                        top = $(this).position().top + height + 74 ;
                    }
                }
                $(parentID).find(".img-hotspot-content[data-hotspot="+hotspotAttr+"]").css({
                    'left': left +"px", 'top': top+"px", 'right':right,
                })

                $(this).addClass('show-content');
                $(parentID).find(".img-hotspot-content[data-hotspot="+hotspotAttr+"]").addClass('img-hotspot-content-visible');

            }
           
        });

        // default first content visible script
        if($('.wp-block-custom-ge-image-block-with-hotspot').length){
            $('.wp-block-custom-ge-image-block-with-hotspot').each(function(){
                var $this = $(this).find('.hotspot-container').children().first('.hotspot');
                var firstElementHotspotAttr = $this.attr('data-hotspot');
                var firstElementParentID = '#'+ $this.parents('.wp-block-custom-ge-image-block-with-hotspot').attr('id');
                var firstElementHeight =  $this.height();
                var firstElementWidth = $(firstElementParentID).find(".img-hotspot-content[data-hotspot="+firstElementHotspotAttr+"]").outerWidth() / 2 - $this.outerWidth() / 2;
                var firstElementLeft = $this.position().left - firstElementWidth - 1;
                var firstElementHotspotHT = $(firstElementParentID).find(".img-hotspot-content[data-hotspot="+firstElementHotspotAttr+"]").outerHeight()/2;
                var firstElementRight = "unset" ;
                var firstElementTop ;

                if(window.outerWidth<992){
                    var rightSidePosition=  $this.parents('.img-wrapper').width() - $this.position().left ;
                    firstElementTop = $this.position().top + firstElementHeight + 74 ;
                    if($this.position().left<95){
                        firstElementLeft = $this.position().left + 5 - $this.outerWidth() * 2;
                    }
                    else if(rightSidePosition<95){
                        firstElementRight = rightSidePosition + 5 - $this.outerWidth() * 2;
                        firstElementLeft ="unset";
                    } 
                    else{
                        if($(firstElementParentID).find(".img-hotspot-content.left-position[data-hotspot="+firstElementHotspotAttr+"]").length || $(firstElementParentID).find(".img-hotspot-content.right-position[data-hotspot="+firstElementHotspotAttr+"]").length){
                            firstElementTop = $this.position().top + firstElementHeight + 74 ;
                        }
                    }
                
                }
                else{
                    if($(firstElementParentID).find(".img-hotspot-content.left-position[data-hotspot="+firstElementHotspotAttr+"]").length || $(firstElementParentID).find(".img-hotspot-content.right-position[data-hotspot="+firstElementHotspotAttr+"]").length){
                        firstElementTop = $this.position().top + (height/2)  - firstElementHotspotHT;
                    }
                    else{
                        firstElementTop = $this.position().top + firstElementHeight + 74 ;
                    }
                }
                $(firstElementParentID).find(".img-hotspot-content[data-hotspot="+firstElementHotspotAttr+"]").css({
                    'left': firstElementLeft +"px", 'top': firstElementTop+"px", 'right':firstElementRight,
                })

                $this.addClass('show-content');
                $(firstElementParentID).find(".img-hotspot-content[data-hotspot="+firstElementHotspotAttr+"]").addClass('img-hotspot-content-visible');
            });
        }
        

    });
})(jQuery, Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-image-block-with-hotspot.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-content-left-right-image-variant-text-carousel.js. */
(function ($, Drupal) {

document.documentElement.setAttribute('data-browser', navigator.userAgent);

$(document).ready(function () {

  for(var i = 0; i <= 9; i++) { 
    if ($('.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .slider-items').length) {
      // Get count of slides
      $('.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .slider-items').on('init reinit', function (event, slick) {

        if (slick.slideCount < 2) {
          $('.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] div.carousel-control').addClass('control-hidden');
        }
        else {
          $('.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] div.carousel-control').removeClass('control-hidden');
        }
      });
      
      $('.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .slider-items').slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        prevArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-prev',  
        nextArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-next',
        
        infinite: false,
        mobileFirst: true,
        rows: 1,
        // variableWidth: true,
        
        responsive: [{
          breakpoint: 1200, // mf min(1200)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-prev',  
            nextArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-next',
            // variableWidth: true,
          },
        }, {
          breakpoint: 992,  // mf min(992)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-prev',  
            nextArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-next',
            // variableWidth: true,
          },
        }, {
          breakpoint: 767, // mf min(768)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-prev',  
            nextArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-next',
            // variableWidth: true,
          },
        }, {
          breakpoint: 576,  // mf min(576)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-prev',  
            nextArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-next',
            // variableWidth: true,
          },
        }, {          
          breakpoint: 300,  // mf min(320)
          settings: {
            slidesToShow: 1, // 1.2
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-prev',  
            nextArrow: '.wp-block-custom-ge-content-left-right-image-variant-text-carousel div[data-ge-content-left-right-image-variant-text-carousel-instance-id = \'' + i + '\'] .ctrl-next',
            // variableWidth: true,
          },
        },
          
          
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],              
      });    
    }    
  }
  
});

})(jQuery, Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-content-left-right-image-variant-text-carousel.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-spotlight-small-variant-1.js. */
// Place your frontend scripts here

//import $ from "jquery";
// Import Slick
//import 'slick-carousel/slick/slick.min';
  (function ($, Drupal) {
    document.documentElement.setAttribute("data-browser", navigator.userAgent);
  
    $(document).ready(function(){
    
      for(var i = 0; i <= 9; i++) { 
        if ($(".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .slider-items").length) {
          // Get count of slides
          $(".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .slider-items").on('init reinit', function(event, slick){
            if (slick.slideCount < 4 ) {
              $(".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] div.carousel-control").addClass("control-hidden");
            }
            else {
              $(".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] div.carousel-control").removeClass("control-hidden");
            }
          });
          
          $(".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .slider-items").slick({
            speed: 300,
            slidesToShow: 3.25,
            slidesToScroll: 1,
            
            prevArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-prev",  
            nextArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-next",
            
            infinite: false,
            mobileFirst: true,
            rows: 1,
            variableWidth: true,
            
            responsive: [{
                breakpoint: 1200, //mf min(1200)
                settings: {
                  slidesToShow: 2.25,
                  slidesToScroll: 1,
                  rows: 1,
                  prevArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-prev",  
                  nextArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-next",
                  variableWidth: true,
                },
              }, {
                breakpoint: 992,  //mf min(992)
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  rows: 1,
                  prevArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-prev",  
                  nextArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-next",
                  variableWidth: true,
                },
              }, {
                breakpoint: 768, //mf min(768)
                settings: {
                  slidesToShow: 1.6,
                  slidesToScroll: 1,
                  rows: 1,
                  prevArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-prev",  
                  nextArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-next",
                  variableWidth: true,
                },
              }, {
                breakpoint: 576,  //mf min(576)
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                  rows: 1,
                  prevArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-prev",  
                  nextArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-next",
                  variableWidth: true,
                },
              }, {          
                breakpoint: 300,  //mf min(320)
                settings: {
                  slidesToShow: 1, //1.2
                  slidesToScroll: 1,
                  rows: 1,
                  prevArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-prev",  
                  nextArrow: ".wp-block-custom-ge-spotlight-small-variant-1[data-ge-spotlight-small-variant-1-instance-id = '" + i + "'] .ctrl-next",
                  variableWidth: true,
                },
              },
              
              
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]              
          });    
        }    
      }
      
    });
   
  })(jQuery, Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-spotlight-small-variant-1.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-content-left-right-image-variant-2.js. */
// Place your frontend scripts here
//import $ from 'jquery';


	(function ($, Drupal) {   
        $(document).ready(function() {
          $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '1'] .play-button").on('click', function(ev) {
            $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '1'] .iframing").trigger('click');
            $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '1'] .iframing").addClass('active');
            $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '1'] .iframing")[0].src += "&autoplay=1";
            $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '1'] .customBackground, .wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '1'] .play-button").hide();
            ev.preventDefault();
          });
        });
        $(document).ready(function() {
            $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '2'] .play-button").on('click', function(ev) {
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '2'] .iframing").trigger('click');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '2'] .iframing").addClass('active');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '2'] .iframing")[0].src += "&autoplay=1";
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '2'] .customBackground, .wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '2'] .play-button").hide();
              ev.preventDefault();
            });
          });
          $(document).ready(function() {
            $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '3'] .play-button").on('click', function(ev) {
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '3'] .iframing").trigger('click');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '3'] .iframing").addClass('active');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '3'] .iframing")[0].src += "&autoplay=1";
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '3'] .customBackground, .wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '3'] .play-button").hide();
              ev.preventDefault();
            });
          });
          $(document).ready(function() {
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '4'] .play-button").on('click', function(ev) {
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '4'] .iframing").trigger('click');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '4'] .iframing").addClass('active');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '4'] .iframing")[0].src += "&autoplay=1";
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '4'] .customBackground, .wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '4'] .play-button").hide();
              ev.preventDefault();
            });
          });
          $(document).ready(function() {
            $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '5'] .play-button").on('click', function(ev) {
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '5'] .iframing").trigger('click');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '5'] .iframing").addClass('active');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '5'] .iframing")[0].src += "&autoplay=1";
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '5'] .customBackground, .wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '5'] .play-button").hide();
              ev.preventDefault();
            });
          });
          $(document).ready(function() {
            $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '6'] .play-button").on('click', function(ev) {
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '6'] .iframing").trigger('click');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '6'] .iframing").addClass('active');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '6'] .iframing")[0].src += "&autoplay=1";
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '6'] .customBackground, .wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '6'] .play-button").hide();
              ev.preventDefault();
            });
          });
          $(document).ready(function() {
            $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '7'] .play-button").on('click', function(ev) {
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '7'] .iframing").trigger('click');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '7'] .iframing").addClass('active');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '7'] .iframing")[0].src += "&autoplay=1";
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '7'] .customBackground, .wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '7'] .play-button").hide();
              ev.preventDefault();
            });
          });
          $(document).ready(function() {
            $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '8'] .play-button").on('click', function(ev) {
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '8'] .iframing").trigger('click');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '8'] .iframing").addClass('active');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '8'] .iframing")[0].src += "&autoplay=1";
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '8'] .customBackground, .wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '8'] .play-button").hide();
              ev.preventDefault();
            });
          });
          $(document).ready(function() {
            $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '9'] .play-button").on('click', function(ev) {
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '9'] .iframing").trigger('click');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '9'] .iframing").addClass('active');
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '9'] .iframing")[0].src += "&autoplay=1";
              $(".wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '9'] .customBackground, .wp-block-custom-ge-content-left-right-image-variant-2[instance-id = '9'] .play-button").hide();
              ev.preventDefault();
            });
          });

		})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-content-left-right-image-variant-2.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-hero-slideshow.js. */
//import $ from "jquery";
// Import Slick
//import 'slick-carousel/slick/slick.min';
(function ($, Drupal) {
  // for video iframe
  document.documentElement.setAttribute("data-browser", navigator.userAgent);
  $(document).ready(function () {
    $('.wp-block-custom-ge-hero-slideshow .ge-hero-slider-wrapper').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 500,
      fade: true,
      cssEase: 'ease',
      pauseOnHover: false
    });
  });
})(jQuery, Drupal);

// #############################################################################

// ############# NOte : For video popup and Youtube api please check  ##########

// ##########################  youtube-api.js ##################################

// ########### common js file for all youtube video popup ######################

// #############################################################################
/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-hero-slideshow.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-statistics-feature.js. */
// script for wp-block-custom-ge-statistics-feature
// button script

var statElement =  document.querySelectorAll(".wp-block-custom-ge-statistics-feature .button_link");
if(statElement.length){
  for (var statElementItem = 0; statElementItem < statElement.length; statElementItem++) {
    if( statElement[statElementItem].children[0].querySelector('a')){
      statElement[statElementItem].classList.add('button-with-link');
    }
    
  }
}

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-statistics-feature.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-hero-with-dynamic-impact-card.js. */
// Place your frontend scripts here
// Import Slick
//import 'slick-carousel/slick/slick.min';
//import $ from "jquery";

(function ($, Drupal) { 
  
	document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelectorAll(".wp-block-custom-ge-hero-with-dynamic-impact-card").forEach(function(el) {
      var idx = el.getAttribute('data-ge-dynamic-card-instance-id');
      var section = document.querySelector(".wp-block-custom-ge-hero-with-dynamic-impact-card[data-ge-dynamic-card-instance-id='" + idx + "']");
      var rssEndpoint = section.getAttribute('data-feed-source');
      var rssFeedItems;
       // Using fetch to retrieve RSS Feeds
      fetch(rssEndpoint, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          "Content-Type": "application/rss+xml; charset=utf-8",
          "Accept": "application/rss+xml",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
        },   
      
      }).then( ( response ) => {
        if(!response.ok) {
          return;
        } 
        else {
          return response.text();  
        }
      }).then( ( text ) => {
        return text;  
      }).then( (data) => {
  
        var results = new DOMParser().parseFromString(data, "text/xml");
        var items = results.querySelectorAll("item");

        var rss_items = [];
		
        if (items.length) {
		 var i =0; 
		//items.forEach(function(el){
        //for ( items; items< 3; items++) { 	// added for loop
          items.forEach(function(el){
			  if (i<3) {
            var pubDate = el.querySelector("pubDate").innerHTML;
            var date = new Date(pubDate);
            var months = Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            var string = months[date.getMonth()]  + " " + date.getDate() + ", " + date.getFullYear();

            if(el.querySelector("enclosure")) {
              rss_items.push({
                "enclosure": el.querySelector("enclosure").getAttribute("url"),
                "title": el.querySelector("title").innerHTML,
                "link": el.querySelector("link").innerHTML,
			    "pubDate": string,               
              });
            } else {
              rss_items.push({
                "title": el.querySelector("title").innerHTML,
                "link": el.querySelector("link").innerHTML,
                "pubDate": string,                
              });
            }  
			i++;
		  }			
          });
        //} //  end for loop
        }
        
        return rss_items;        
      }).then( (feed_items) => {
        
        var feeds_markup = '';
        
        if (feed_items.length) {
          feed_items.forEach( function(item) {
              feeds_markup +=         
             `<div class="press-releases-feed">               
              <div class="pub-date">
              <p>${ item.pubDate }</p>
              </div>
              <div class="press-releases-title">
              <p class="title body-3"><a href="${ item.link }" rel="noopener noreferrer">${ item.title }</a></p>
              </div>
              </div>`; 
          });      
        }

       document.querySelector(".wp-block-custom-ge-hero-with-dynamic-impact-card[data-ge-dynamic-card-instance-id = '" + idx + "'] .feed-list").innerHTML = feeds_markup;           
      }).catch(err => console.log('error', err));
    })
  });  
  
  })(jQuery, Drupal);
  

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-hero-with-dynamic-impact-card.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-bio-leader-profile-detail.js. */
// // Place your frontend scripts here

  let printBio = document.getElementsByClassName("bio-leader-print-profile-section");

  function printBioSection() {
    window.print();
  };
  let printBioIndex;
  for (printBioIndex = 0; printBioIndex < printBio.length; printBioIndex++) {
    printBio[printBioIndex].addEventListener("click", printBioSection);
  }

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-bio-leader-profile-detail.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-buttons.js. */
// // Place your frontend scripts here

// button script
let buttonElementCustom =  document.querySelectorAll(".wp-block-custom-ge-buttons .custom-button-ge");
if(buttonElementCustom.length){
  for (let buttonElementCustomItem = 0; buttonElementCustomItem < buttonElementCustom.length; buttonElementCustomItem++) {
    if( buttonElementCustom[buttonElementCustomItem].children[0].querySelector('a')){
      buttonElementCustom[buttonElementCustomItem].classList.add('custom-button-ge-with-link');
    }
    
  }
}


/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-buttons.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-download-with-left-right-image.js. */
// Video play Script
var downloadLRID = document.querySelectorAll(".wp-block-custom-ge-download-with-left-right-image .play-icon-container")
for (var downloadLRItem = 0; downloadLRItem < downloadLRID.length; downloadLRItem++) {
    downloadLRID[downloadLRItem].addEventListener("click", function () {
        var dwVideoContainer = this.closest('.wp-block-custom-ge-download-with-left-right-image');
        var dwVideoIframe = dwVideoContainer.querySelector("iframe");
        dwVideoContainer.classList.add('active');
        dwVideoIframe.click()
        var dwVideoSrc = dwVideoIframe.getAttribute('src') + "&autoplay=true";
        dwVideoIframe.setAttribute("src", dwVideoSrc);

    });
}
/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-download-with-left-right-image.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-aviation-instagram-feed.js. */
/* instafeed.js | v2.0.0 | https://github.com/stevenschobert/instafeed.js | License: MIT */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, 
  global.Instafeed = factory());
})(this, function () {
  'use strict';
  function assert (val, msg) {
    if (!val) {
      throw new Error(msg);
    }
  }
  function Instafeed (options) {
    assert(!options || typeof options === 'object', 'options must be an object, got ' + options + ' (' + typeof options + ')');
    const opts = {
      accessToken: null,
      accessTokenTimeout: 1e4,
      after: null,
      apiTimeout: 1e4,
      apiLimit: null,
      before: null,
      debug: false,
      error: null,
      filter: null,
      limit: 5,
      mock: false,
      render: null,
      sort: null,
      success: null,
      target: 'instafeed',
      template: '<a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /></a>',
      templateBoundaries: [ '{{', '}}' ],
      transform: null,
    };
    const state = {
      running: false,
      node: null,
      token: null,
      paging: null,
      pool: [],
    };
    if (options) {
      for (const optKey in opts) {
        if (typeof options[optKey] !== 'undefined') {
          opts[optKey] = options[optKey];
        }
      }
    }
    assert(typeof opts.target === 'string' || typeof opts.target === 'object', 'target must be a string or DOM node, got ' + opts.target + ' (' + typeof opts.target + ')');
    assert(typeof opts.accessToken === 'string' || typeof opts.accessToken === 'function', 'accessToken must be a string or function, got ' + opts.accessToken + ' (' + typeof opts.accessToken + ')');
    assert(typeof opts.accessTokenTimeout === 'number', 'accessTokenTimeout must be a number, got ' + opts.accessTokenTimeout + ' (' + typeof opts.accessTokenTimeout + ')');
    assert(typeof opts.apiTimeout === 'number', 'apiTimeout must be a number, got ' + opts.apiTimeout + ' (' + typeof opts.apiTimeout + ')');
    assert(typeof opts.debug === 'boolean', 'debug must be true or false, got ' + opts.debug + ' (' + typeof opts.debug + ')');
    assert(typeof opts.mock === 'boolean', 'mock must be true or false, got ' + opts.mock + ' (' + typeof opts.mock + ')');
    assert(typeof opts.templateBoundaries === 'object' && opts.templateBoundaries.length === 2 && typeof opts.templateBoundaries[0] === 'string' && typeof opts.templateBoundaries[1] === 'string', 'templateBoundaries must be an array of 2 strings, got ' + opts.templateBoundaries + ' (' + typeof opts.templateBoundaries + ')');
    assert(!opts.template || typeof opts.template === 'string', 'template must null or string, got ' + opts.template + ' (' + typeof opts.template + ')');
    assert(!opts.error || typeof opts.error === 'function', 'error must be null or function, got ' + opts.error + ' (' + typeof opts.error + ')');
    assert(!opts.before || typeof opts.before === 'function', 'before must be null or function, got ' + opts.before + ' (' + typeof opts.before + ')');
    assert(!opts.after || typeof opts.after === 'function', 'after must be null or function, got ' + opts.after + ' (' + typeof opts.after + ')');
    assert(!opts.success || typeof opts.success === 'function', 'success must be null or function, got ' + opts.success + ' (' + typeof opts.success + ')');
    assert(!opts.filter || typeof opts.filter === 'function', 'filter must be null or function, got ' + opts.filter + ' (' + typeof opts.filter + ')');
    assert(!opts.transform || typeof opts.transform === 'function', 'transform must be null or function, got ' + opts.transform + ' (' + typeof opts.transform + ')');
    assert(!opts.sort || typeof opts.sort === 'function', 'sort must be null or function, got ' + opts.sort + ' (' + typeof opts.sort + ')');
    assert(!opts.render || typeof opts.render === 'function', 'render must be null or function, got ' + opts.render + ' (' + typeof opts.render + ')');
    assert(!opts.limit || typeof opts.limit === 'number', 'limit must be null or number, got ' + opts.limit + ' (' + typeof opts.limit + ')');
    assert(!opts.apiLimit || typeof opts.apiLimit === 'number', 'apiLimit must null or number, got ' + opts.apiLimit + ' (' + typeof opts.apiLimit + ')');
    this._state = state;
    this._options = opts;
  }
  
  Instafeed.prototype.run = function run () {
    const scope = this;
    this._debug('run', 'options', this._options);
    this._debug('run', 'state', this._state);
    if (this._state.running) {
      this._debug('run', 'already running, skipping');
      return false;
    }
    this._start();
    this._debug('run', 'getting dom node');
    if (typeof this._options.target === 'string') {
      this._state.node = document.getElementById(this._options.target);
    }
    else {
      this._state.node = this._options.target;
    }
    if (!this._state.node) {
      this._fail(new Error('no element found with ID ' + this._options.target));
      return false;
    }
    this._debug('run', 'got dom node', this._state.node);
    this._debug('run', 'getting access token');
    this._getAccessToken(function onTokenReceived (err, token) {
      if (err) {
        scope._debug('onTokenReceived', 'error', err);
        scope._fail(new Error('error getting access token: ' + err.message));
        return;
      }
      scope._debug('onTokenReceived', 'got token', token);
      scope._state.token = token;
      scope._showNext(function onNextShown (err) {
        if (err) {
          scope._debug('onNextShown', 'error', err);
          scope._fail(err);
          return;
        }
        scope._finish();
      });
    });
    return true;
  };
  
  Instafeed.prototype.hasNext = function hasNext () {
    const paging = this._state.paging;
    const pool = this._state.pool;
    this._debug('hasNext', 'paging', paging);
    this._debug('hasNext', 'pool', pool.length, pool);
    return pool.length > 0 || paging && typeof paging.next === 'string';
  };
  Instafeed.prototype.next = function next () {
    const scope = this;
    if (!scope.hasNext()) {
      scope._debug('next', 'hasNext is false, skipping');
      return false;
    }
    if (scope._state.running) {
      scope._debug('next', 'already running, skipping');
      return false;
    }
    scope._start();
    scope._showNext(function onNextShown (err) {
      if (err) {
        scope._debug('onNextShown', 'error', err);
        scope._fail(err);
        return;
      }
      scope._finish();
    });
  };
  Instafeed.prototype._showNext = function showNext (callback) {
    const scope = this;
    let url = null;
    let poolItems = null;
    const hasLimit = typeof this._options.limit === 'number';
    scope._debug('showNext', 'pool', scope._state.pool.length, scope._state.pool);
    if (scope._state.pool.length > 0) {
      if (hasLimit) {
        poolItems = scope._state.pool.splice(0, scope._options.limit);
      }
      else {
        poolItems = scope._state.pool.splice(0);
      }
      scope._debug('showNext', 'items from pool', poolItems.length, poolItems);
      scope._debug('showNext', 'updated pool', scope._state.pool.length, scope._state.pool);
      if (scope._options.mock) {
        scope._debug('showNext', 'mock enabled, skipping render');
      }
      else {
        try {
          scope._renderData(poolItems);
        }
        catch (renderErr) {
          callback(renderErr);
          return;
        }
      }
      callback(null);
    }
    else {
      if (scope._state.paging && typeof scope._state.paging.next === 'string') {
        url = scope._state.paging.next;
      }
      else {
        url = 'https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=' + scope._state.token;
        if (!scope._options.apiLimit && typeof scope._options.limit === 'number') {
          scope._debug('showNext', 'no apiLimit set, falling back to limit', scope._options.apiLimit, scope._options.limit);
          url = url + '&limit=' + scope._options.limit;
        }
        else if (typeof scope._options.apiLimit === 'number') {
          scope._debug('showNext', 'apiLimit set, overriding limit', scope._options.apiLimit, scope._options.limit);
          url = url + '&limit=' + scope._options.apiLimit;
        }
      }
      scope._debug('showNext', 'making request', url);
      scope._makeApiRequest(url, function onResponseReceived (err, data) {
        let processed = null;
        if (err) {
          scope._debug('onResponseReceived', 'error', err);
          callback(new Error('api request error: ' + err.message));
          return;
        }
        scope._debug('onResponseReceived', 'data', data);
        scope._success(data);
        scope._debug('onResponseReceived', 'setting paging', data.paging);
        scope._state.paging = data.paging;
        try {
          processed = scope._processData(data);
          scope._debug('onResponseReceived', 'processed data', processed);
          if (processed.unused && processed.unused.length > 0) {
            scope._debug('onResponseReceived', 'saving unused to pool', processed.unused.length, processed.unused);
            for (let i = 0; i < processed.unused.length; i++) {
              scope._state.pool.push(processed.unused[i]);
            }
          }
        }
        catch (processErr) {
          callback(processErr);
          return;
        }
        if (scope._options.mock) {
          scope._debug('onResponseReceived', 'mock enabled, skipping append');
        }
        else {
          try {
            scope._renderData(processed.items);
          }
          catch (renderErr) {
            callback(renderErr);
            return;
          }
        }
        callback(null);
      });
    }
  };
  Instafeed.prototype._processData = function processData (data) {
    const hasTransform = typeof this._options.transform === 'function';
    const hasFilter = typeof this._options.filter === 'function';
    const hasSort = typeof this._options.sort === 'function';
    const hasLimit = typeof this._options.limit === 'number';
    const transformedFiltered = [];
    let limitDelta = null;
    let dataItem = null;
    let transformedItem = null;
    let filterResult = null;
    let unusedItems = null;
    this._debug('processData', 'hasFilter', hasFilter, 'hasTransform', hasTransform, 'hasSort', hasSort, 'hasLimit', hasLimit);
    if (typeof data !== 'object' || typeof data.data !== 'object' || data.data.length <= 0) {
      return null;
    }
    for (let i = 0; i < data.data.length; i++) {
      dataItem = this._getItemData(data.data[i]);
      if (hasTransform) {
        try {
          transformedItem = this._options.transform(dataItem);
          this._debug('processData', 'transformed item', dataItem, transformedItem);
        }
        catch (err) {
          this._debug('processData', 'error calling transform', err);
          throw new Error('error in transform: ' + err.message);
        }
      }
      else {
        transformedItem = dataItem;
      }
      if (hasFilter) {
        try {
          filterResult = this._options.filter(transformedItem);
          this._debug('processData', 'filter item result', transformedItem, filterResult);
        }
        catch (err) {
          this._debug('processData', 'error calling filter', err);
          throw new Error('error in filter: ' + err.message);
        }
        if (filterResult) {
          transformedFiltered.push(transformedItem);
        }
      }
      else {
        transformedFiltered.push(transformedItem);
      }
    }
    if (hasSort) {
      try {
        transformedFiltered.sort(this._options.sort);
      }
      catch (err) {
        this._debug('processData', 'error calling sort', err);
        throw new Error('error in sort: ' + err.message);
      }
    }
    if (hasLimit) {
      limitDelta = transformedFiltered.length - this._options.limit;
      this._debug('processData', 'checking limit', transformedFiltered.length, this._options.limit, limitDelta);
      if (limitDelta > 0) {
        unusedItems = transformedFiltered.slice(transformedFiltered.length - limitDelta);
        this._debug('processData', 'unusedItems', unusedItems.length, unusedItems);
        transformedFiltered.splice(transformedFiltered.length - limitDelta, limitDelta);
      }
    }
    return {
      items: transformedFiltered,
      unused: unusedItems,
    };
  };
  Instafeed.prototype._extractTags = function extractTags (str) {
    const exp = /#([^\s]+)/gi;
    const badChars = /[~`!@#$%^&*\(\)\-\+={}\[\]:;"'<>\?,\./|\\\s]+/i;
    const tags = [];
    let match = null;
    if (typeof str === 'string') {
      while ((match = exp.exec(str)) !== null) {
        if (badChars.test(match[1]) === false) {
          tags.push(match[1]);
        }
      }
    }
    return tags;
  };
  Instafeed.prototype._getItemData = function getItemData (data) {
    let type = null;
    let image = null;
    switch (data.media_type) {
      case 'IMAGE':
        type = 'image';
        image = data.media_url;
        break;

      case 'VIDEO':
        type = 'video';
        image = data.thumbnail_url;
        break;

      case 'CAROUSEL_ALBUM':
        type = 'album';
        image = data.media_url;
        break;
    }
    return {
      caption: data.caption,
      tags: this._extractTags(data.caption),
      id: data.id,
      image: image,
      link: data.permalink,
      model: data,
      timestamp: data.timestamp,
      type: type,
      username: data.username,
    };
  };
  Instafeed.prototype._renderData = function renderData (items) {
    const hasTemplate = typeof this._options.template === 'string';
    const hasRender = typeof this._options.render === 'function';
    let item = null;
    let itemHtml = null;
    let container = null;
    let html = '';
    this._debug('renderData', 'hasTemplate', hasTemplate, 'hasRender', hasRender);
    if (typeof items !== 'object' || items.length <= 0) {
      return;
    }
    for (let i = 0; i < items.length; i++) {
      item = items[i];
      if (hasRender) {
        try {
          itemHtml = this._options.render(item, this._options);
          this._debug('renderData', 'custom render result', item, itemHtml);
        }
        catch (err) {
          this._debug('renderData', 'error calling render', err);
          throw new Error('error in render: ' + err.message);
        }
      }
      else if (hasTemplate) {
        itemHtml = this._basicRender(item);
      }
      if (itemHtml) {
        html = html + itemHtml;
      }
      else {
        this._debug('renderData', 'render item did not return any content', item);
      }
    }
    this._debug('renderData', 'html content', html);
    container = document.createElement('div');
    container.innerHTML = html;
    this._debug('renderData', 'container', container, container.childNodes.length, container.childNodes);
    while (container.childNodes.length > 0) {
      this._debug('renderData', 'appending child', container.childNodes[0]);
      this._state.node.appendChild(container.childNodes[0]);
    }
  };
  Instafeed.prototype._basicRender = function basicRender (data) {
    const exp = new RegExp(this._options.templateBoundaries[0] + '([\\s\\w.]+)' + this._options.templateBoundaries[1], 'gm');
    const template = this._options.template;
    let match = null;
    let output = '';
    let substr = null;
    let lastIndex = 0;
    let keyPath = null;
    let keyPathValue = null;
    while ((match = exp.exec(template)) !== null) {
      keyPath = match[1];
      substr = template.slice(lastIndex, match.index);
      output = output + substr;
      keyPathValue = this._valueForKeyPath(keyPath, data);
      if (keyPathValue) {
        output = output + keyPathValue.toString();
      }
      lastIndex = exp.lastIndex;
    }
    if (lastIndex < template.length) {
      substr = template.slice(lastIndex, template.length);
      output = output + substr;
    }
    return output;
  };
  Instafeed.prototype._valueForKeyPath = function valueForKeyPath (keyPath, data) {
    const exp = /([\w]+)/gm;
    let match = null;
    let key = null;
    let lastValue = data;
    while ((match = exp.exec(keyPath)) !== null) {
      if (typeof lastValue !== 'object') {
        return null;
      }
      key = match[1];
      lastValue = lastValue[key];
    }
    return lastValue;
  };
  Instafeed.prototype._fail = function fail (err) {
    const didHook = this._runHook('error', err);
    if (!didHook && console && typeof console.error === 'function') {
      console.error(err);
    }
    this._state.running = false;
  };
  Instafeed.prototype._start = function start () {
    this._state.running = true;
    this._runHook('before');
  };
  Instafeed.prototype._finish = function finish () {
    this._runHook('after');
    this._state.running = false;
  };
  Instafeed.prototype._success = function success (data) {
    this._runHook('success', data);
    this._state.running = false;
  };
  Instafeed.prototype._makeApiRequest = function makeApiRequest (url, callback) {
    let called = false;
    const scope = this;
    let apiRequest = null;
    const callbackOnce = function callbackOnce (err, value) {
      if (!called) {
        called = true;
        callback(err, value);
      }
    };
    apiRequest = new XMLHttpRequest();
    apiRequest.ontimeout = function apiRequestTimedOut () {
      callbackOnce(new Error('api request timed out'));
    };
    apiRequest.onerror = function apiRequestOnError () {
      callbackOnce(new Error('api connection error'));
    };
    apiRequest.onload = function apiRequestOnLoad (event) {
      const contentType = apiRequest.getResponseHeader('Content-Type');
      let responseJson = null;
      scope._debug('apiRequestOnLoad', 'loaded', event);
      scope._debug('apiRequestOnLoad', 'response status', apiRequest.status);
      scope._debug('apiRequestOnLoad', 'response content type', contentType);
      if (contentType.indexOf('application/json') >= 0) {
        try {
          responseJson = JSON.parse(apiRequest.responseText);
        }
        catch (err) {
          scope._debug('apiRequestOnLoad', 'json parsing error', err, apiRequest.responseText);
          callbackOnce(new Error('error parsing response json'));
          return;
        }
      }
      if (apiRequest.status !== 200) {
        if (responseJson && responseJson.error) {
          callbackOnce(new Error(responseJson.error.code + ' ' + responseJson.error.message));
        }
        else {
          callbackOnce(new Error('status code ' + apiRequest.status));
        }
        return;
      }
      callbackOnce(null, responseJson);
    };
    apiRequest.open('GET', url, true);
    apiRequest.timeout = this._options.apiTimeout;
    apiRequest.send();
  };
  Instafeed.prototype._getAccessToken = function getAccessToken (callback) {
    let called = false;
    const scope = this;
    let timeoutCheck = null;
    const callbackOnce = function callbackOnce (err, value) {
      if (!called) {
        called = true;
        clearTimeout(timeoutCheck);
        callback(err, value);
      }
    };
    if (typeof this._options.accessToken === 'function') {
      this._debug('getAccessToken', 'calling accessToken as function');
      timeoutCheck = setTimeout(function accessTokenTimeoutCheck () {
        scope._debug('getAccessToken', 'timeout check', called);
        callbackOnce(new Error('accessToken timed out'), null);
      }, this._options.accessTokenTimeout);
      try {
        this._options.accessToken(function accessTokenReceiver (err, value) {
          scope._debug('getAccessToken', 'received accessToken callback', called, err, value);
          callbackOnce(err, value);
        });
      }
      catch (err) {
        this._debug('getAccessToken', 'error invoking the accessToken as function', err);
        callbackOnce(err, null);
      }
    }
    else {
      this._debug('getAccessToken', 'treating accessToken as static', typeof this._options.accessToken);
      callbackOnce(null, this._options.accessToken);
    }
  };
  Instafeed.prototype._debug = function debug () {
    let args = null;
    if (this._options.debug && console && typeof console.log === 'function') {
      args = [].slice.call(arguments);
      args[0] = '[Instafeed] [' + args[0] + ']';
      console.log.apply(null, args);
    }
  };
  Instafeed.prototype._runHook = function runHook (hookName, data) {
    let success = false;
    if (typeof this._options[hookName] === 'function') {
      try {
        this._options[hookName](data);
        success = true;
      }
      catch (err) {
        this._debug('runHook', 'error calling hook', hookName, err);
      }
    }
    return success;
  };

  
 


    
  
  
  const newAPIcall = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const apiToken = JSON.parse(this.responseText).access_token;
        // Put the object into storage
        localStorage.setItem('fbapiToken', JSON.stringify(apiToken));
      }
    };
    xhttp.open('GET', 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=IGQVJYSzA0N2xrZAnBsamEwV0RQeF9fWVdmaHF2Q3hnVzhxLVlOdERpM0V3cnRrWjJMNWM0QkpxZATRPOW9JSUJ0d2RvOW1LOEV3Q25zd3JXbjNoSHRjSEc5X1d0Qlk2Yy1INHBBd3VVMVV2X29vYWl4bgZDZD', true);
    xhttp.send();
  };

  const changedToken = () => {
    
    if(localStorage.getItem('fbapiToken')) {
      // Retrieve the object from storage
      const refreshedToken = localStorage.getItem('fbapiToken');
      const feed = new Instafeed({
        accessToken: JSON.parse(refreshedToken),
      });
      if(document.querySelector('#instafeed')) {
        feed.run();
        // const listItems = document.getElementById('instafeed').children;
        const instafeedDIV = document.getElementById('instafeed');
        while (instafeedDIV.hasChildNodes()) {
          instafeedDIV.removeChild(instafeedDIV.lastChild);
        }
      }
      
      return Instafeed;
    }

  };
  if(!(localStorage.getItem('fbapiToken'))) {
    newAPIcall();
  }
  setTimeout(() => {
    changedToken();
  }, 1000);

  setInterval(() => {
    newAPIcall();
    changedToken();
  }, 86500000);

});

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-aviation-instagram-feed.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-timeline.js. */
// Timeline Script
(function ($, Drupal) {
    // Timeline Script
    if ($('.wp-block-custom-ge-timeline').length) {
        $(window).on("resize", function (e) {
            $('.wp-block-custom-ge-timeline').each(function () {
                timeLineSlider($(this));
                getMarginLeft($(this));
                hideArrow($(this))
            });

        });

        $('.wp-block-custom-ge-timeline').each(function () {
            timeLineSlider($(this));
            getMarginLeft($(this));
            hideArrow($(this))
        });

        var dateDivdefaultPosition, sliderDivWidth, dateDivWidth, sliderContainerWidth;
        var onclickValue = false

        function timeLineSlider(element) {
            var $this = element;
            // slide date
            var dateDiv = $this.find('.wp-block-custom-ge-timeline-date');
            var dateDivLength = dateDiv.length;
            dateDivWidth = dateDiv.outerWidth();
            var dateDivContainerWidth = $this.find('.wp-block-custom-ge-timeline-date-container').outerWidth();
            var dateContainerWidth = dateDivLength * dateDivWidth;
            dateDivdefaultPosition = dateDivContainerWidth / 2 - dateDivWidth / 2;
            var currentIndex1 = $this.find('.wp-block-custom-ge-timeline-date.active').prevAll().length;
            if (!onclickValue) {
                $this.find('.timeline-date-content-block').css({ 'width': dateContainerWidth, 'margin-left': dateDivContainerWidth / 2 - dateDivWidth / 2 });
                $this.find('.timeline-date-content-block').animate({ 'marginLeft': dateDivdefaultPosition - (dateDivWidth * currentIndex1) }, { queue: false });
            }

            // default active slide 
            var defaultACtiveDate = $this.find('.wp-block-custom-ge-timeline-date.active').attr('date-id');
            $this.find('.wp-block-custom-ge-timeline-content[data-slide=' + defaultACtiveDate + ']').addClass('active');

            // slider div
            var sliderDiv = $this.find('.wp-block-custom-ge-timeline-content');
            var sliderDivLength = sliderDiv.length;
            sliderDivWidth = sliderDiv.outerWidth();
            sliderContainerWidth = sliderDivLength * sliderDivWidth;


            return (dateDivdefaultPosition, sliderDivWidth, dateDivWidth, sliderContainerWidth)
            // hideArrow();
        }
        // get index no of div
        function getMarginLeft(el) {
            var $thisLeft = el;
            // var divIndexNo = 0;
            var activeItem = $thisLeft.find('.wp-block-custom-ge-timeline-date.active');
            divIndexNo = $thisLeft.find('.wp-block-custom-ge-timeline-date').index(activeItem);
            var contentMarginLeft = '-' + divIndexNo * sliderDivWidth + 'px';
            $thisLeft.find('.wp-block-custom-ge-timeline-content-container').css({ 'width': sliderContainerWidth })
            $thisLeft.find('.wp-block-custom-ge-timeline-content-container').animate({ 'marginLeft': contentMarginLeft }, { queue: false, duration: 'fast' });
            // $thisLeft.find('.wp-block-custom-ge-timeline-content-container').animate({ 'marginLeft': dateDivdefaultPosition - (dateDivWidth * divIndexNo) }, { queue: false, duration: 'fast' });
        }
        // Hide & show Arrow 
        function hideArrow(elem) {
            var $thisArrow = elem;
            if ($thisArrow.find('.wp-block-custom-ge-timeline-content').length <= 1) {
                $thisArrow.find('.timeline-arrow').fadeOut('fast');
                return
            }
            if ($thisArrow.find('.wp-block-custom-ge-timeline-content').last().hasClass('active')) {
                $thisArrow.find('.timeline-arrow.next-arrow').fadeOut('fast');
            } else {
                $thisArrow.find('.timeline-arrow.next-arrow').fadeIn();
            }
            if ($thisArrow.find('.wp-block-custom-ge-timeline-content').first().hasClass('active')) {
                $thisArrow.find('.timeline-arrow.prev-arrow').fadeOut('fast');
            }
            else {
                $thisArrow.find('.timeline-arrow.prev-arrow').fadeIn();
            }
        }




        //Timeline date click script
        $('.wp-block-custom-ge-timeline-date').on('click', function () {
            onclickValue = true;
            var thisParentID = '#' + $(this).parents('.wp-block-custom-ge-timeline').attr('id');
            timeLineSlider($(thisParentID));
            var $dateParentContainer = $(this).parents('.timeline-container');
            var dateID = $(this).attr('date-id');
            var slideID = $dateParentContainer.find('.wp-block-custom-ge-timeline-content[data-slide=' + dateID + ']');
            var currentIndex = $(this).prevAll().length;

            $(this).parents('.timeline-date-content-block').animate({ 'marginLeft': dateDivdefaultPosition - (dateDivWidth * currentIndex) }, { queue: false });

            if ($(this).hasClass('active')) {
                return;
            } else {
                $dateParentContainer.find('.wp-block-custom-ge-timeline-content').removeClass('active');
                $dateParentContainer.find('.wp-block-custom-ge-timeline-date').removeClass('active');
            }

            $(this).addClass('active');
            slideID.addClass('active');

            getMarginLeft($(thisParentID));
            hideArrow($(thisParentID))

            // getMarginLeft();
            // hideArrow();

            $dateParentContainer.find('.wp-block-custom-ge-timeline-content').animate({ 'opacity': 0.2 }, { queue: false, duration: 'fast' });
            $dateParentContainer.find('.wp-block-custom-ge-timeline-content.active').fadeTo('fast', 1);


        })

        // Timeline arrow click script
        $('.timeline-arrow').on('click', function () {
            onclickValue = true;
            var thisArrowParentID = '#' + $(this).parents('.wp-block-custom-ge-timeline').attr('id');
            timeLineSlider($(thisArrowParentID));
            var $arrowParentContainer = $(this).parents('.timeline-container');
            var activeItem1 = $arrowParentContainer.find('.wp-block-custom-ge-timeline-date.active');
            var divIndexNo1 = $arrowParentContainer.find('.wp-block-custom-ge-timeline-date').index(activeItem1);
            var contentMarginLeft1;
            var updatedIndexNo;


            if ($(this).hasClass('next-arrow')) {
                updatedIndexNo = divIndexNo1 + 1;
                contentMarginLeft1 = '-' + updatedIndexNo * sliderDivWidth + 'px';
            }
            else {
                updatedIndexNo = divIndexNo1 - 1;
                contentMarginLeft1 = '-' + updatedIndexNo * sliderDivWidth + 'px';
            }



            $arrowParentContainer.find('.wp-block-custom-ge-timeline-content').removeClass('active');
            $arrowParentContainer.find('.wp-block-custom-ge-timeline-date').removeClass('active');



            $arrowParentContainer.find('.wp-block-custom-ge-timeline-content').eq(updatedIndexNo).addClass('active');
            $arrowParentContainer.find('.wp-block-custom-ge-timeline-date').eq(updatedIndexNo).addClass('active');
            $arrowParentContainer.find('.wp-block-custom-ge-timeline-content-container').css({ 'width': sliderContainerWidth })

            hideArrow($(thisArrowParentID));
            $arrowParentContainer.find('.wp-block-custom-ge-timeline-content-container').animate({ 'marginLeft': contentMarginLeft1 }, { queue: false, duration: 'slow' });
            $arrowParentContainer.find('.wp-block-custom-ge-timeline-date').parents('.timeline-date-content-block').animate({ 'marginLeft': dateDivdefaultPosition - (dateDivWidth * updatedIndexNo) }, { queue: false });

            $arrowParentContainer.find('.wp-block-custom-ge-timeline-content').animate({ 'opacity': 0.2 }, { queue: false, duration: 'slow' });
            $arrowParentContainer.find('.wp-block-custom-ge-timeline-content.active').fadeTo('slow', 1);

        })
    }
})(jQuery, Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-timeline.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-content-image-gallery.js. */

(function ($, Drupal) {
  for(let i = 1; i <= 9; i++) { 
    if(document.querySelectorAll('.wp-block-custom-ge-add-photo-block').length > 0) {
      window.addEventListener('load', function () {
        const imgPath = document.querySelectorAll(`.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] .image-wrapper picture img`)[0];
        const sourcePath = document.querySelectorAll(`.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] .image-wrapper picture source`)[0];
        const thumbImage = document.querySelectorAll(`.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] .wp-block-custom-ge-add-photo-block`);
        const firstImage = document.querySelector(`.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] .wp-block-custom-ge-add-photo-block[data-slick-index="0"] picture img`).src;
        imgPath.src = firstImage;
        sourcePath.srcset =  firstImage;
        thumbImage.forEach(function (value) {
          value.addEventListener('click', function () {
            imgPath.src =  this.querySelector('picture img').src;
            sourcePath.srcset =  this.querySelector('picture img').src;
          });
        });
      });
    }
    if (document.querySelectorAll(`.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] .multiple-items`).length) {
      $(`.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] .multiple-items`).on('init reinit', function (event, slick) {
        if (slick.slideCount <= 4) {
          $(`.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] div.carousel-control`).hide();
          $(`.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] .multiple-items`).addClass('no-slick');
        }
        else {
          $(`.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] div.carousel-control`).show();
        }
      });
      $(`.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] .multiple-items`).slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: `.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] .ctrl-prev`,  
        nextArrow: `.wp-block-custom-ge-content-image-gallery[instance-id='${i}'] .ctrl-next`,            
      });
    }    
  }
})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-content-image-gallery.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-full-width-section-dropdown-content.js. */

// Place your frontend scripts here

var fullWidthAccordionElement = document.querySelectorAll(".wp-block-custom-ge-full-width-section-dropdown-content");
if (fullWidthAccordionElement.length) {
  let fullWidthAccordionTitle = document.querySelectorAll(".accordion-container-accordion-item");
  let fullWidthAccordionItem;
  let activeAccordionSet = false
  for (fullWidthAccordionItem = 0; fullWidthAccordionItem < fullWidthAccordionTitle.length; fullWidthAccordionItem++) {
    fullWidthAccordionTitle[fullWidthAccordionItem].addEventListener("click", function (e) {

      let sectionParentContainerAccordion = this.closest(".wp-block-custom-ge-full-width-section-dropdown-content");
      if (this.classList.contains('active')) {
        activeAccordionSet = true;
      }
      if (sectionParentContainerAccordion.querySelectorAll(".wp-block-custom-ge-accordion-container .accordion-container-accordion-item.active").length) {
        sectionParentContainerAccordion.querySelector(".wp-block-custom-ge-accordion-container .accordion-container-accordion-item.active").classList.remove('active');
        let parentContainerChildElement = sectionParentContainerAccordion.querySelectorAll(".wp-block-custom-ge-accordion-container .accordion-container-accordion-item");
        for (let childElementAccordion = 0; childElementAccordion < parentContainerChildElement.length; childElementAccordion++) {
          parentContainerChildElement[childElementAccordion].nextElementSibling.style.height = null;
        }
      }
      let accordionContainerAccordionBody = this.nextElementSibling;
      if (activeAccordionSet) {
        this.classList.remove('active');
        accordionContainerAccordionBody.style.height = null;
      } else {
        this.classList.add('active');
        accordionContainerAccordionBody.style.height = accordionContainerAccordionBody.scrollHeight + "px";
      }
      activeAccordionSet = false;
    });
  }


}

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-full-width-section-dropdown-content.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-video-carousel.js. */

//import $ from "jquery";
// Import Slick
//import 'slick-carousel/slick/slick.min';

// script for the ge-video-carousel
// var Player;
let carouselVideoElm = document.querySelectorAll('.wp-block-custom-ge-video-carousel');
if (carouselVideoElm.length) {
    for (let i = 0; i < carouselVideoElm.length; i++) {
        let carouselElementID = carouselVideoElm[i].getAttribute('id');

        let carouselCardElm = carouselVideoElm[i].querySelectorAll('.video-popup-card');
        let carouselModalHTML = '';
        for (let j = 0; j < carouselCardElm.length; j++) {
            let carouselCardInstanceID = carouselCardElm[j].getAttribute('carousel-video-instance-id');
            let carouselCardVidID = carouselCardElm[j].querySelector('.video-card-container').getAttribute('data-video');
            let carouselCardVidClass;
            let idcountID = 'carouselVideo' + carouselCardInstanceID + '-';
            if (carouselCardElm[j].querySelector('.video-card-container').classList.contains('yt_iframe')) {
                carouselCardVidClass = 'modal video-carousel-modal youtube-iframe';

                carouselModalHTML += '<div class = "' + carouselCardVidClass + '" modal-instance-id ="' + carouselCardInstanceID + '"><div class="modal-dialog">' +
                    ' <div class="modal-content"> <div class="modal-header">' +
                    ' <button class="close video-modal-close ficon-close" data-dismiss="modal"></button></div>' +
                    ' <div class="modal-body"><div class="video-carousel-player video-player-container" data-video="' + carouselCardVidID + '">' +
                    ' <div id="' + idcountID + carouselCardVidID + '" class="video-card-carousel-player video-carousel-iframe" ></div>' +
                    ' </div></div> </div></div> </div >';
            } else if (carouselCardElm[j].querySelector('.video-card-container').classList.contains('ms_iframe')) {
                carouselCardVidClass = 'modal video-carousel-modal msstream-iframe'

                carouselModalHTML += '<div class = "' + carouselCardVidClass + '" modal-instance-id ="' + carouselCardInstanceID + '"><div class="modal-dialog">' +
                    ' <div class="modal-content"> <div class="modal-header">' +
                    ' <button class="close video-modal-close ficon-close" data-dismiss="modal"></button></div>' +
                    ' <div class="modal-body"><div class="video-carousel-player video-player-container" data-video="' + carouselCardVidID + '">' +

                    '<iframe class="video-iframe video-carousel-iframe" src="https://web.microsoftstream.com/embed/video/' + carouselCardVidID + '?showinfo=true&domain_hint=ge.com&autoplay=0"' +
                    'frameborder="0" showinfo="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe> </div>' +
                    ' </div></div> </div></div> ';
            }
            else {
                carouselCardVidClass = 'modal video-carousel-modal video-elm'

                carouselModalHTML += '<div class = "' + carouselCardVidClass + '" modal-instance-id ="' + carouselCardInstanceID + '"><div class="modal-dialog">' +
                    ' <div class="modal-content"> <div class="modal-header">' +
                    ' <button class="close video-modal-close ficon-close" data-dismiss="modal"></button></div>' +
                    ' <div class="modal-body"><div class="video-player-container">' +
                    '<video   class="carousel-video-player" controls><source src=' + carouselCardVidID + '></source></video></div>' +
                    ' </div></div> </div></div> ';
            }


        }
        document.getElementById(carouselElementID).insertAdjacentHTML("beforeend", carouselModalHTML);
    }
}
// slick slider
(function ($, Drupal) {
    var carouselElement = $(".wp-block-custom-ge-video-carousel");
    if (carouselElement.length) {
        $.each(carouselElement, function () {

            var carouselElementID = '#' + $(this).attr('id');

            $(carouselElementID).find('.slider-items').on('init reinit', function (event, slick) {
                if (slick.slideCount < 4) {
                    $(carouselElementID).find('div.carousel-control').addClass("control-hidden");
                }
                else {
                    $(carouselElementID).find('div.carousel-control').removeClass("control-hidden");
                }
            });
            $(carouselElementID).find('.slider-items').slick({
                speed: 300,
                slidesToShow: 3.25,
                slidesToScroll: 1,
                infinite: false,
                mobileFirst: true,
                rows: 1,
                variableWidth: true,
                draggable: false,
                prevArrow: carouselElementID + " .prev-arrow",
                nextArrow: carouselElementID + " .next-arrow",

                responsive: [
                    {
                        breakpoint: 1200, //mf min(1200)
                        settings: {
                            slidesToShow: 2.25,
                            slidesToScroll: 1,
                        },
                    }, {
                        breakpoint: 992,  //mf min(992)
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            draggable: true,
                        },
                    }, {
                        breakpoint: 768, //mf min(768)
                        settings: {
                            slidesToShow: 1.6,
                            slidesToScroll: 1,
                            draggable: true,
                        },
                    }, {
                        breakpoint: 576,  //mf min(576)
                        settings: {
                            slidesToShow: 1.5,
                            slidesToScroll: 1,
                            draggable: true,
                        },
                    }, {
                        breakpoint: 300,  //mf min(320)
                        settings: {
                            slidesToShow: 1, //1.2
                            slidesToScroll: 1,
                        },
                    },
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ],
            });



        });
    }
})(jQuery, Drupal);


// #############################################################################

// ############# NOte : For video popup and Youtube api please check  ##########

// ##########################  youtube-api.js ##################################

// ########### common js file for all youtube video popup ######################

// #############################################################################
/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-video-carousel.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/youtube-api.js. */
// ######################################################################################################################

// ##########################  youtube-api.js ###########################################################################

// ########### common js file for all youtube video popup gBlox #########################################################

// ######## ge-video-carousel, ge-hero-video-block-variant-1, ############################################################

//############### ge-content-left-right-image-variant-3,   ge-hero-slideshow #############################################

// #######################################################################################################################


//This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// script for the ge-video-carousel

let carouselVideoPlayer1, carouselVideoPlayer2, carouselVideoPlayer3, carouselVideoPlayer4, carouselVideoPlayer5, carouselVideoPlayer6, carouselVideoPlayer7, carouselVideoPlayer8, carouselVideoPlayer9, carouselVideoPlayer10,
    carouselVideoPlayer11, carouselVideoPlayer12, carouselVideoPlayer13, carouselVideoPlayer14, carouselVideoPlayer15, carouselVideoPlayer16, carouselVideoPlayer17, carouselVideoPlayer18, carouselVideoPlayer19, carouselVideoPlayer20;

let carouselVideoElm1 = document.querySelector('[modal-instance-id="1"].youtube-iframe.video-carousel-modal');
let carouselVideoElm2 = document.querySelector('[modal-instance-id="2"].youtube-iframe.video-carousel-modal');
let carouselVideoElm3 = document.querySelector('[modal-instance-id="3"].youtube-iframe.video-carousel-modal');
let carouselVideoElm4 = document.querySelector('[modal-instance-id="4"].youtube-iframe.video-carousel-modal');
let carouselVideoElm5 = document.querySelector('[modal-instance-id="5"].youtube-iframe.video-carousel-modal');
let carouselVideoElm6 = document.querySelector('[modal-instance-id="6"].youtube-iframe.video-carousel-modal');
let carouselVideoElm7 = document.querySelector('[modal-instance-id="7"].youtube-iframe.video-carousel-modal');
let carouselVideoElm8 = document.querySelector('[modal-instance-id="8"].youtube-iframe.video-carousel-modal');
let carouselVideoElm9 = document.querySelector('[modal-instance-id="9"].youtube-iframe.video-carousel-modal');
let carouselVideoElm10 = document.querySelector('[modal-instance-id="10"].youtube-iframe.video-carousel-modal');
let carouselVideoElm11 = document.querySelector('[modal-instance-id="11"].youtube-iframe.video-carousel-modal');
let carouselVideoElm12 = document.querySelector('[modal-instance-id="12"].youtube-iframe.video-carousel-modal');
let carouselVideoElm13 = document.querySelector('[modal-instance-id="13"].youtube-iframe.video-carousel-modal');
let carouselVideoElm14 = document.querySelector('[modal-instance-id="14"].youtube-iframe.video-carousel-modal');
let carouselVideoElm15 = document.querySelector('[modal-instance-id="15"].youtube-iframe.video-carousel-modal');
let carouselVideoElm16 = document.querySelector('[modal-instance-id="16"].youtube-iframe.video-carousel-modal');
let carouselVideoElm17 = document.querySelector('[modal-instance-id="17"].youtube-iframe.video-carousel-modal');
let carouselVideoElm18 = document.querySelector('[modal-instance-id="18"].youtube-iframe.video-carousel-modal');
let carouselVideoElm19 = document.querySelector('[modal-instance-id="19"].youtube-iframe.video-carousel-modal');
let carouselVideoElm20 = document.querySelector('[modal-instance-id="20"].youtube-iframe.video-carousel-modal');





let carouselVideoYTVidID1, carouselVideoYTVidID2, carouselVideoYTVidID3, carouselVideoYTVidID4, carouselVideoYTVidID5, carouselVideoYTVidID6, carouselVideoYTVidID7, carouselVideoYTVidID8, carouselVideoYTVidID9, carouselVideoYTVidID10,
    carouselVideoYTVidID11, carouselVideoYTVidID12, carouselVideoYTVidID13, carouselVideoYTVidID14, carouselVideoYTVidID15, carouselVideoYTVidID16, carouselVideoYTVidID17, carouselVideoYTVidID18, carouselVideoYTVidID19, carouselVideoYTVidID20;
let carouselVideoID1, carouselVideoID2, carouselVideoID3, carouselVideoID4, carouselVideoID5, carouselVideoID6, carouselVideoID7, carouselVideoID8, carouselVideoID9, carouselVideoID10,
    carouselVideoID11, carouselVideoID12, carouselVideoID13, carouselVideoID14, carouselVideoID15, carouselVideoID16, carouselVideoID17, carouselVideoID18, carouselVideoID19, carouselVideoID20;

if (carouselVideoElm1) {
    carouselVideoYTVidID1 = carouselVideoElm1.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID1 = 'carouselVideo1-' + carouselVideoYTVidID1;
}
if (carouselVideoElm2) {
    carouselVideoYTVidID2 = carouselVideoElm2.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID2 = 'carouselVideo2-' + carouselVideoYTVidID2;
}
if (carouselVideoElm3) {
    carouselVideoYTVidID3 = carouselVideoElm3.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID3 = 'carouselVideo3-' + carouselVideoYTVidID3;
}
if (carouselVideoElm4) {
    carouselVideoYTVidID4 = carouselVideoElm4.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID4 = 'carouselVideo4-' + carouselVideoYTVidID4;
}
if (carouselVideoElm5) {
    carouselVideoYTVidID5 = carouselVideoElm5.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID5 = 'carouselVideo5-' + carouselVideoYTVidID5;
}
if (carouselVideoElm6) {
    carouselVideoYTVidID6 = carouselVideoElm6.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID6 = 'carouselVideo6-' + carouselVideoYTVidID6;
}
if (carouselVideoElm7) {
    carouselVideoYTVidID7 = carouselVideoElm7.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID7 = 'carouselVideo7-' + carouselVideoYTVidID7;
}
if (carouselVideoElm8) {
    carouselVideoYTVidID8 = carouselVideoElm8.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID8 = 'carouselVideo8-' + carouselVideoYTVidID8;
}
if (carouselVideoElm9) {
    carouselVideoYTVidID9 = carouselVideoElm9.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID9 = 'carouselVideo9-' + carouselVideoYTVidID9;
}
if (carouselVideoElm10) {
    carouselVideoYTVidID10 = carouselVideoElm10.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID10 = 'carouselVideo10-' + carouselVideoYTVidID10;
}
if (carouselVideoElm11) {
    carouselVideoYTVidID11 = carouselVideoElm11.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID11 = 'carouselVideo11-' + carouselVideoYTVidID11;
}
if (carouselVideoElm12) {
    carouselVideoYTVidID12 = carouselVideoElm12.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID12 = 'carouselVideo12-' + carouselVideoYTVidID12;
}
if (carouselVideoElm13) {
    carouselVideoYTVidID13 = carouselVideoElm13.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID13 = 'carouselVideo13-' + carouselVideoYTVidID13;
}
if (carouselVideoElm14) {
    carouselVideoYTVidID14 = carouselVideoElm14.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID14 = 'carouselVideo14-' + carouselVideoYTVidID14;
}
if (carouselVideoElm15) {
    carouselVideoYTVidID15 = carouselVideoElm15.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID15 = 'carouselVideo15-' + carouselVideoYTVidID15;
}
if (carouselVideoElm16) {
    carouselVideoYTVidID16 = carouselVideoElm16.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID16 = 'carouselVideo16-' + carouselVideoYTVidID16;
}
if (carouselVideoElm17) {
    carouselVideoYTVidID17 = carouselVideoElm17.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID17 = 'carouselVideo17-' + carouselVideoYTVidID17;
}
if (carouselVideoElm18) {
    carouselVideoYTVidID18 = carouselVideoElm18.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID18 = 'carouselVideo18-' + carouselVideoYTVidID18;
}
if (carouselVideoElm19) {
    carouselVideoYTVidID19 = carouselVideoElm19.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID19 = 'carouselVideo19-' + carouselVideoYTVidID19;
}
if (carouselVideoElm20) {
    carouselVideoYTVidID20 = carouselVideoElm20.querySelector('.video-carousel-player').getAttribute('data-video');
    carouselVideoID20 = 'carouselVideo20-' + carouselVideoYTVidID20;
}

// script for the ge-hero-video-block-variant-1

let hvbv1Player1, hvbv1Player2, hvbv1Player3, hvbv1Player4, hvbv1Player5, hvbv1Player6, hvbv1Player7, hvbv1Player8, hvbv1Player9;

let heroVideoElm1 = document.querySelector('[hvb1-instance-id="1"] .youtube-iframe');
let heroVideoElm2 = document.querySelector('[hvb1-instance-id="2"] .youtube-iframe');
let heroVideoElm3 = document.querySelector('[hvb1-instance-id="3"] .youtube-iframe');
let heroVideoElm4 = document.querySelector('[hvb1-instance-id="4"] .youtube-iframe');
let heroVideoElm5 = document.querySelector('[hvb1-instance-id="5"] .youtube-iframe');
let heroVideoElm6 = document.querySelector('[hvb1-instance-id="6"] .youtube-iframe');
let heroVideoElm7 = document.querySelector('[hvb1-instance-id="7"] .youtube-iframe');
let heroVideoElm8 = document.querySelector('[hvb1-instance-id="8"] .youtube-iframe');
let heroVideoElm9 = document.querySelector('[hvb1-instance-id="9"] .youtube-iframe');

let ytVidID1, ytVidID2, ytVidID3, ytVidID4, ytVidID5, ytVidID6, ytVidID7, ytVidID8, ytVidID9;
let heroVideoID1, heroVideoID2, heroVideoID3, heroVideoID4, heroVideoID5, heroVideoID6, heroVideoID7, heroVideoID8, heroVideoID9;

if (heroVideoElm1) {
    ytVidID1 = heroVideoElm1.closest('.wp-block-custom-ge-hero-video-block-variant-1').querySelector('.play-icon-container').getAttribute('data-video');
    heroVideoID1 = 'hvbv11-' + ytVidID1;
}
if (heroVideoElm2) {
    ytVidID2 = heroVideoElm2.closest('.wp-block-custom-ge-hero-video-block-variant-1').querySelector('.play-icon-container').getAttribute('data-video');
    heroVideoID2 = 'hvbv12-' + ytVidID2;
}
if (heroVideoElm3) {
    ytVidID3 = heroVideoElm3.closest('.wp-block-custom-ge-hero-video-block-variant-1').querySelector('.play-icon-container').getAttribute('data-video');
    heroVideoID3 = 'hvbv13-' + ytVidID3;
}
if (heroVideoElm4) {
    ytVidID4 = heroVideoElm4.closest('.wp-block-custom-ge-hero-video-block-variant-1').querySelector('.play-icon-container').getAttribute('data-video');
    heroVideoID4 = 'hvbv14-' + ytVidID4;
}
if (heroVideoElm5) {
    ytVidID5 = heroVideoElm5.closest('.wp-block-custom-ge-hero-video-block-variant-1').querySelector('.play-icon-container').getAttribute('data-video');
    heroVideoID5 = 'hvbv15-' + ytVidID5;
}
if (heroVideoElm6) {
    ytVidID6 = heroVideoElm6.closest('.wp-block-custom-ge-hero-video-block-variant-1').querySelector('.play-icon-container').getAttribute('data-video');
    heroVideoID6 = 'hvbv16-' + ytVidID6;
}
if (heroVideoElm7) {
    ytVidID7 = heroVideoElm7.closest('.wp-block-custom-ge-hero-video-block-variant-1').querySelector('.play-icon-container').getAttribute('data-video');
    heroVideoID7 = 'hvbv17-' + ytVidID7;
}
if (heroVideoElm8) {
    ytVidID8 = heroVideoElm8.closest('.wp-block-custom-ge-hero-video-block-variant-1').querySelector('.play-icon-container').getAttribute('data-video');
    heroVideoID8 = 'hvbv18-' + ytVidID8;
}
if (heroVideoElm9) {
    ytVidID9 = heroVideoElm9.closest('.wp-block-custom-ge-hero-video-block-variant-1').querySelector('.play-icon-container').getAttribute('data-video');
    heroVideoID9 = 'hvbv19-' + ytVidID9;
}

// ge-hero-slideshow Script
let heroSliderPlayer1, heroSliderPlayer2, heroSliderPlayer3, heroSliderPlayer4, heroSliderPlayer5, heroSliderPlayer6, heroSliderPlayer7, heroSliderPlayer8, heroSliderPlayer9;

let hersliderShowElmn1 = document.querySelector('[slide-instance-id="1"] .youtube-iframe');
let hersliderShowElmn2 = document.querySelector('[slide-instance-id="2"] .youtube-iframe');
let hersliderShowElmn3 = document.querySelector('[slide-instance-id="3"] .youtube-iframe');
let hersliderShowElmn4 = document.querySelector('[slide-instance-id="4"] .youtube-iframe');
let hersliderShowElmn5 = document.querySelector('[slide-instance-id="5"] .youtube-iframe');
let hersliderShowElmn6 = document.querySelector('[slide-instance-id="6"] .youtube-iframe');
let hersliderShowElmn7 = document.querySelector('[slide-instance-id="7"] .youtube-iframe');
let hersliderShowElmn8 = document.querySelector('[slide-instance-id="8"] .youtube-iframe');
let hersliderShowElmn9 = document.querySelector('[slide-instance-id="9"] .youtube-iframe');
let hersliderShowElmn10 = document.querySelector('[slide-instance-id="10"] .youtube-iframe');
let hersliderShowElmn11 = document.querySelector('[slide-instance-id="11"] .youtube-iframe');
let hersliderShowElmn12 = document.querySelector('[slide-instance-id="12"] .youtube-iframe');
let hersliderShowElmn13 = document.querySelector('[slide-instance-id="13"] .youtube-iframe');
let hersliderShowElmn14 = document.querySelector('[slide-instance-id="14"] .youtube-iframe');
let hersliderShowElmn15 = document.querySelector('[slide-instance-id="15"] .youtube-iframe');
let hersliderShowElmn16 = document.querySelector('[slide-instance-id="16"] .youtube-iframe');
let hersliderShowElmn17 = document.querySelector('[slide-instance-id="17"] .youtube-iframe');
let hersliderShowElmn18 = document.querySelector('[slide-instance-id="18"] .youtube-iframe');
let hersliderShowElmn19 = document.querySelector('[slide-instance-id="19"] .youtube-iframe');
let hersliderShowElmn20 = document.querySelector('[slide-instance-id="20"] .youtube-iframe');
let hersliderShowElmn21 = document.querySelector('[slide-instance-id="21"] .youtube-iframe');
let hersliderShowElmn22 = document.querySelector('[slide-instance-id="22"] .youtube-iframe');
let hersliderShowElmn23 = document.querySelector('[slide-instance-id="23"] .youtube-iframe');
let hersliderShowElmn24 = document.querySelector('[slide-instance-id="24"] .youtube-iframe');
let hersliderShowElmn25 = document.querySelector('[slide-instance-id="25"] .youtube-iframe');
let hersliderShowElmn26 = document.querySelector('[slide-instance-id="26"] .youtube-iframe');
let hersliderShowElmn27 = document.querySelector('[slide-instance-id="27"] .youtube-iframe');
let hersliderShowElmn28 = document.querySelector('[slide-instance-id="28"] .youtube-iframe');
let hersliderShowElmn29 = document.querySelector('[slide-instance-id="29"] .youtube-iframe');
let hersliderShowElmn30 = document.querySelector('[slide-instance-id="30"] .youtube-iframe');


let heroSlideytVidID1, heroSlideytVidID2, heroSlideytVidID3, heroSlideytVidID4, heroSlideytVidID5, heroSlideytVidID6, heroSlideytVidID7, heroSlideytVidID8, heroSlideytVidID9, heroSlideytVidID10, heroSlideytVidID11, heroSlideytVidID12, heroSlideytVidID13, heroSlideytVidID14, heroSlideytVidID15, heroSlideytVidID16, heroSlideytVidID17, heroSlideytVidID18, heroSlideytVidID19, heroSlideytVidID20, heroSlideytVidID21, heroSlideytVidID22, heroSlideytVidID23, heroSlideytVidID24, heroSlideytVidID25, heroSlideytVidID26, heroSlideytVidID27, heroSlideytVidID28, heroSlideytVidID29, heroSlideytVidID30;
let heroSliderVideoID1, heroSliderVideoID2, heroSliderVideoID3, heroSliderVideoID4, heroSliderVideoID5, heroSliderVideoID6, heroSliderVideoID7, heroSliderVideoID8, heroSliderVideoID9, heroSliderVideoID10, heroSliderVideoID11, heroSliderVideoID12, heroSliderVideoID13, heroSliderVideoID14, heroSliderVideoID15, heroSliderVideoID16, heroSliderVideoID17, heroSliderVideoID18, heroSliderVideoID19, heroSliderVideoID20, heroSliderVideoID21, heroSliderVideoID22, heroSliderVideoID23, heroSliderVideoID24, heroSliderVideoID25, heroSliderVideoID26, heroSliderVideoID27, heroSliderVideoID28, heroSliderVideoID29, heroSliderVideoID30;

if (hersliderShowElmn1) {
    heroSlideytVidID1 = hersliderShowElmn1.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID1 = 'slide1-' + heroSlideytVidID1;
}
if (hersliderShowElmn2) {
    heroSlideytVidID2 = hersliderShowElmn2.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID2 = 'slide2-' + heroSlideytVidID2;
}
if (hersliderShowElmn3) {
    heroSlideytVidID3 = hersliderShowElmn3.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID3 = 'slide3-' + heroSlideytVidID3;
}
if (hersliderShowElmn4) {
    heroSlideytVidID4 = hersliderShowElmn4.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID4 = 'slide4-' + heroSlideytVidID4;
}
if (hersliderShowElmn5) {
    heroSlideytVidID5 = hersliderShowElmn5.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID5 = 'slide5-' + heroSlideytVidID5;
}
if (hersliderShowElmn6) {
    heroSlideytVidID6 = hersliderShowElmn6.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID6 = 'slide6-' + heroSlideytVidID6;
}
if (hersliderShowElmn7) {
    heroSlideytVidID7 = hersliderShowElmn7.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID7 = 'slide7-' + heroSlideytVidID7;
}
if (hersliderShowElmn8) {
    heroSlideytVidID8 = hersliderShowElmn8.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID8 = 'slide8-' + heroSlideytVidID8;
}
if (hersliderShowElmn9) {
    heroSlideytVidID9 = hersliderShowElmn9.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID9 = 'slide9-' + heroSlideytVidID9;
}
if (hersliderShowElmn10) {
    heroSlideytVidID10 = hersliderShowElmn10.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID10 = 'slide10-' + heroSlideytVidID10;
}
if (hersliderShowElmn11) {
    heroSlideytVidID11 = hersliderShowElmn11.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID11 = 'slide11-' + heroSlideytVidID11;
}
if (hersliderShowElmn12) {
    heroSlideytVidID12 = hersliderShowElmn12.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID12 = 'slide12-' + heroSlideytVidID12;
}
if (hersliderShowElmn13) {
    heroSlideytVidID13 = hersliderShowElmn13.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID13 = 'slide13-' + heroSlideytVidID13;
}
if (hersliderShowElmn14) {
    heroSlideytVidID14 = hersliderShowElmn14.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID14 = 'slide14-' + heroSlideytVidID14;
}
if (hersliderShowElmn15) {
    heroSlideytVidID15 = hersliderShowElmn15.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID15 = 'slide15-' + heroSlideytVidID15;
}
if (hersliderShowElmn16) {
    heroSlideytVidID16 = hersliderShowElmn16.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID16 = 'slide16-' + heroSlideytVidID16;
}
if (hersliderShowElmn17) {
    heroSlideytVidID17 = hersliderShowElmn17.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID17 = 'slide17-' + heroSlideytVidID17;
}
if (hersliderShowElmn18) {
    heroSlideytVidID18 = hersliderShowElmn18.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID18 = 'slide18-' + heroSlideytVidID18;
}
if (hersliderShowElmn19) {
    heroSlideytVidID19 = hersliderShowElmn19.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID19 = 'slide19-' + heroSlideytVidID19;
}
if (hersliderShowElmn20) {
    heroSlideytVidID20 = hersliderShowElmn20.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID20 = 'slide20-' + heroSlideytVidID20;
}
if (hersliderShowElmn21) {
    heroSlideytVidID21 = hersliderShowElmn21.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID21 = 'slide21-' + heroSlideytVidID21;
}
if (hersliderShowElmn22) {
    heroSlideytVidID22 = hersliderShowElmn22.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID22 = 'slide22-' + heroSlideytVidID22;
}
if (hersliderShowElmn23) {
    heroSlideytVidID23 = hersliderShowElmn23.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID23 = 'slide23-' + heroSlideytVidID23;
}
if (hersliderShowElmn24) {
    heroSlideytVidID24 = hersliderShowElmn24.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID24 = 'slide24-' + heroSlideytVidID24;
}
if (hersliderShowElmn25) {
    heroSlideytVidID25 = hersliderShowElmn25.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID25 = 'slide25-' + heroSlideytVidID25;
}
if (hersliderShowElmn26) {
    heroSlideytVidID26 = hersliderShowElmn26.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID26 = 'slide26-' + heroSlideytVidID26;
}
if (hersliderShowElmn27) {
    heroSlideytVidID27 = hersliderShowElmn27.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID27 = 'slide27-' + heroSlideytVidID27;
}
if (hersliderShowElmn28) {
    heroSlideytVidID28 = hersliderShowElmn28.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID28 = 'slide28-' + heroSlideytVidID28;
}
if (hersliderShowElmn29) {
    heroSlideytVidID29 = hersliderShowElmn29.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID29 = 'slide29-' + heroSlideytVidID29;
}
if (hersliderShowElmn30) {
    heroSlideytVidID30 = hersliderShowElmn30.closest('.wp-block-custom-ge-hero-slide').querySelector('.video-player').getAttribute('data-video');
    heroSliderVideoID30 = 'slide30-' + heroSlideytVidID30;
}


// ge-content-left-right-image-variant-3 Script

let geCLRIV3Player1, geCLRIV3Player2, geCLRIV3Player3, geCLRIV3Player4, geCLRIV3Player5, geCLRIV3Player6, geCLRIV3Player7, geCLRIV3Player8, geCLRIV3Player9, geCLRIV3Player10;

let geCLRIV3Elm1 = document.querySelector('[instance-id="1"] .youtube-iframe');
let geCLRIV3Elm2 = document.querySelector('[instance-id="2"] .youtube-iframe');
let geCLRIV3Elm3 = document.querySelector('[instance-id="3"] .youtube-iframe');
let geCLRIV3Elm4 = document.querySelector('[instance-id="4"] .youtube-iframe');
let geCLRIV3Elm5 = document.querySelector('[instance-id="5"] .youtube-iframe');
let geCLRIV3Elm6 = document.querySelector('[instance-id="6"] .youtube-iframe');
let geCLRIV3Elm7 = document.querySelector('[instance-id="7"] .youtube-iframe');
let geCLRIV3Elm8 = document.querySelector('[instance-id="8"] .youtube-iframe');
let geCLRIV3Elm9 = document.querySelector('[instance-id="9"] .youtube-iframe');
let geCLRIV3Elm10 = document.querySelector('[instance-id="10"] .youtube-iframe');



let clriv3YTVidID1, clriv3YTVidID2, clriv3YTVidID3, clriv3YTVidID4, clriv3YTVidID5, clriv3YTVidID6, clriv3YTVidID7, clriv3YTVidID8, clriv3YTVidID9, clriv3YTVidID10;
let geCLRIV3ID1, geCLRIV3ID2, geCLRIV3ID3, geCLRIV3ID4, geCLRIV3ID5, geCLRIV3ID6, geCLRIV3ID7, geCLRIV3ID8, geCLRIV3ID9, geCLRIV3ID10;

if (geCLRIV3Elm1) {
    clriv3YTVidID1 = geCLRIV3Elm1.closest('.wp-block-custom-ge-content-left-right-image-variant-3').querySelector('.play-icon-container1').getAttribute('data-video');
    geCLRIV3ID1 = 'geCLRIV31-' + clriv3YTVidID1;
}
if (geCLRIV3Elm2) {
    clriv3YTVidID2 = geCLRIV3Elm2.closest('.wp-block-custom-ge-content-left-right-image-variant-3').querySelector('.play-icon-container1').getAttribute('data-video');
    geCLRIV3ID2 = 'geCLRIV32-' + clriv3YTVidID2;
}
if (geCLRIV3Elm3) {
    clriv3YTVidID3 = geCLRIV3Elm3.closest('.wp-block-custom-ge-content-left-right-image-variant-3').querySelector('.play-icon-container1').getAttribute('data-video');
    geCLRIV3ID3 = 'geCLRIV33-' + clriv3YTVidID3;
}
if (geCLRIV3Elm4) {
    clriv3YTVidID4 = geCLRIV3Elm4.closest('.wp-block-custom-ge-content-left-right-image-variant-3').querySelector('.play-icon-container1').getAttribute('data-video');
    geCLRIV3ID4 = 'geCLRIV34-' + clriv3YTVidID4;
}
if (geCLRIV3Elm5) {
    clriv3YTVidID5 = geCLRIV3Elm5.closest('.wp-block-custom-ge-content-left-right-image-variant-3').querySelector('.play-icon-container1').getAttribute('data-video');
    geCLRIV3ID5 = 'geCLRIV35-' + clriv3YTVidID5;
}
if (geCLRIV3Elm6) {
    clriv3YTVidID6 = geCLRIV3Elm6.closest('.wp-block-custom-ge-content-left-right-image-variant-3').querySelector('.play-icon-container1').getAttribute('data-video');
    geCLRIV3ID6 = 'geCLRIV36-' + clriv3YTVidID6;
}
if (geCLRIV3Elm7) {
    clriv3YTVidID7 = geCLRIV3Elm7.closest('.wp-block-custom-ge-content-left-right-image-variant-3').querySelector('.play-icon-container1').getAttribute('data-video');
    geCLRIV3ID7 = 'geCLRIV37-' + clriv3YTVidID7;
}
if (geCLRIV3Elm8) {
    clriv3YTVidID8 = geCLRIV3Elm8.closest('.wp-block-custom-ge-content-left-right-image-variant-3').querySelector('.play-icon-container1').getAttribute('data-video');
    geCLRIV3ID8 = 'geCLRIV38-' + clriv3YTVidID8;
}
if (geCLRIV3Elm9) {
    clriv3YTVidID9 = geCLRIV3Elm9.closest('.wp-block-custom-ge-content-left-right-image-variant-3').querySelector('.play-icon-container1').getAttribute('data-video');
    geCLRIV3ID9 = 'geCLRIV39-' + clriv3YTVidID9;
}
if (geCLRIV3Elm10) {
    clriv3YTVidID10 = geCLRIV3Elm10.closest('.wp-block-custom-ge-content-left-right-image-variant-3').querySelector('.play-icon-container1').getAttribute('data-video');
    geCLRIV3ID10 = 'geCLRIV310-' + clriv3YTVidID10;
}


// Common script for Youtube API 

function onYouTubeIframeAPIReady() {

    if (carouselVideoElm1) { carouselVideoPlayer1 = new YT.Player(carouselVideoID1, { videoId: carouselVideoYTVidID1, }); }
    if (carouselVideoElm2) { carouselVideoPlayer2 = new YT.Player(carouselVideoID2, { videoId: carouselVideoYTVidID2, }); }
    if (carouselVideoElm3) { carouselVideoPlayer3 = new YT.Player(carouselVideoID3, { videoId: carouselVideoYTVidID3, }); }
    if (carouselVideoElm4) { carouselVideoPlayer4 = new YT.Player(carouselVideoID4, { videoId: carouselVideoYTVidID4, }); }
    if (carouselVideoElm5) { carouselVideoPlayer5 = new YT.Player(carouselVideoID5, { videoId: carouselVideoYTVidID5, }); }
    if (carouselVideoElm6) { carouselVideoPlayer6 = new YT.Player(carouselVideoID6, { videoId: carouselVideoYTVidID6, }); }
    if (carouselVideoElm7) { carouselVideoPlayer7 = new YT.Player(carouselVideoID7, { videoId: carouselVideoYTVidID7, }); }
    if (carouselVideoElm8) { carouselVideoPlayer8 = new YT.Player(carouselVideoID8, { videoId: carouselVideoYTVidID8, }); }
    if (carouselVideoElm9) { carouselVideoPlayer9 = new YT.Player(carouselVideoID9, { videoId: carouselVideoYTVidID9, }); }
    if (carouselVideoElm10) { carouselVideoPlayer10 = new YT.Player(carouselVideoID10, { videoId: carouselVideoYTVidID10, }); }
    if (carouselVideoElm11) { carouselVideoPlayer11 = new YT.Player(carouselVideoID11, { videoId: carouselVideoYTVidID11, }); }
    if (carouselVideoElm12) { carouselVideoPlayer12 = new YT.Player(carouselVideoID12, { videoId: carouselVideoYTVidID12, }); }
    if (carouselVideoElm13) { carouselVideoPlayer13 = new YT.Player(carouselVideoID13, { videoId: carouselVideoYTVidID13, }); }
    if (carouselVideoElm14) { carouselVideoPlayer14 = new YT.Player(carouselVideoID14, { videoId: carouselVideoYTVidID14, }); }
    if (carouselVideoElm15) { carouselVideoPlayer15 = new YT.Player(carouselVideoID15, { videoId: carouselVideoYTVidID15, }); }
    if (carouselVideoElm16) { carouselVideoPlayer16 = new YT.Player(carouselVideoID16, { videoId: carouselVideoYTVidID16, }); }
    if (carouselVideoElm17) { carouselVideoPlayer17 = new YT.Player(carouselVideoID17, { videoId: carouselVideoYTVidID17, }); }
    if (carouselVideoElm18) { carouselVideoPlayer18 = new YT.Player(carouselVideoID18, { videoId: carouselVideoYTVidID18, }); }
    if (carouselVideoElm19) { carouselVideoPlayer19 = new YT.Player(carouselVideoID19, { videoId: carouselVideoYTVidID19, }); }
    if (carouselVideoElm20) { carouselVideoPlayer20 = new YT.Player(carouselVideoID20, { videoId: carouselVideoYTVidID20, }); }

    if (heroVideoElm1) { hvbv1Player1 = new YT.Player(heroVideoID1, { videoId: ytVidID1, }); }
    if (heroVideoElm2) { hvbv1Player2 = new YT.Player(heroVideoID2, { videoId: ytVidID2, }); }
    if (heroVideoElm3) { hvbv1Player3 = new YT.Player(heroVideoID3, { videoId: ytVidID3, }); }
    if (heroVideoElm4) { hvbv1Player4 = new YT.Player(heroVideoID4, { videoId: ytVidID4, }); }
    if (heroVideoElm5) { hvbv1Player5 = new YT.Player(heroVideoID5, { videoId: ytVidID5, }); }
    if (heroVideoElm6) { hvbv1Player6 = new YT.Player(heroVideoID6, { videoId: ytVidID6, }); }
    if (heroVideoElm7) { hvbv1Player7 = new YT.Player(heroVideoID7, { videoId: ytVidID7, }); }
    if (heroVideoElm8) { hvbv1Player8 = new YT.Player(heroVideoID8, { videoId: ytVidID8, }); }
    if (heroVideoElm9) { hvbv1Player9 = new YT.Player(heroVideoID9, { videoId: ytVidID9, }); }


    if (hersliderShowElmn1) { heroSliderPlayer1 = new YT.Player(heroSliderVideoID1, { videoId: heroSlideytVidID1, }); }
    if (hersliderShowElmn2) { heroSliderPlayer2 = new YT.Player(heroSliderVideoID2, { videoId: heroSlideytVidID2, }); }
    if (hersliderShowElmn3) { heroSliderPlayer3 = new YT.Player(heroSliderVideoID3, { videoId: heroSlideytVidID3, }); }
    if (hersliderShowElmn4) { heroSliderPlayer4 = new YT.Player(heroSliderVideoID4, { videoId: heroSlideytVidID4, }); }
    if (hersliderShowElmn5) { heroSliderPlayer5 = new YT.Player(heroSliderVideoID5, { videoId: heroSlideytVidID5, }); }
    if (hersliderShowElmn6) { heroSliderPlayer6 = new YT.Player(heroSliderVideoID6, { videoId: heroSlideytVidID6, }); }
    if (hersliderShowElmn7) { heroSliderPlayer7 = new YT.Player(heroSliderVideoID7, { videoId: heroSlideytVidID7, }); }
    if (hersliderShowElmn8) { heroSliderPlayer8 = new YT.Player(heroSliderVideoID8, { videoId: heroSlideytVidID8, }); }
    if (hersliderShowElmn9) { heroSliderPlayer9 = new YT.Player(heroSliderVideoID9, { videoId: heroSlideytVidID9, }); }
    if (hersliderShowElmn10) { heroSliderPlayer10 = new YT.Player(heroSliderVideoID10, { videoId: heroSlideytVidID10, }); }
    if (hersliderShowElmn11) { heroSliderPlayer11 = new YT.Player(heroSliderVideoID11, { videoId: heroSlideytVidID11, }); }
    if (hersliderShowElmn12) { heroSliderPlayer12 = new YT.Player(heroSliderVideoID12, { videoId: heroSlideytVidID12, }); }
    if (hersliderShowElmn13) { heroSliderPlayer13 = new YT.Player(heroSliderVideoID13, { videoId: heroSlideytVidID13, }); }
    if (hersliderShowElmn14) { heroSliderPlayer14 = new YT.Player(heroSliderVideoID14, { videoId: heroSlideytVidID14, }); }
    if (hersliderShowElmn15) { heroSliderPlayer15 = new YT.Player(heroSliderVideoID15, { videoId: heroSlideytVidID15, }); }
    if (hersliderShowElmn16) { heroSliderPlayer16 = new YT.Player(heroSliderVideoID16, { videoId: heroSlideytVidID16, }); }
    if (hersliderShowElmn17) { heroSliderPlayer17 = new YT.Player(heroSliderVideoID17, { videoId: heroSlideytVidID17, }); }
    if (hersliderShowElmn18) { heroSliderPlayer18 = new YT.Player(heroSliderVideoID18, { videoId: heroSlideytVidID18, }); }
    if (hersliderShowElmn19) { heroSliderPlayer19 = new YT.Player(heroSliderVideoID19, { videoId: heroSlideytVidID19, }); }
    if (hersliderShowElmn20) { heroSliderPlayer20 = new YT.Player(heroSliderVideoID20, { videoId: heroSlideytVidID20, }); }
    if (hersliderShowElmn21) { heroSliderPlayer21 = new YT.Player(heroSliderVideoID21, { videoId: heroSlideytVidID21, }); }
    if (hersliderShowElmn22) { heroSliderPlayer22 = new YT.Player(heroSliderVideoID22, { videoId: heroSlideytVidID22, }); }
    if (hersliderShowElmn23) { heroSliderPlayer23 = new YT.Player(heroSliderVideoID23, { videoId: heroSlideytVidID23, }); }
    if (hersliderShowElmn24) { heroSliderPlayer24 = new YT.Player(heroSliderVideoID24, { videoId: heroSlideytVidID24, }); }
    if (hersliderShowElmn25) { heroSliderPlayer25 = new YT.Player(heroSliderVideoID25, { videoId: heroSlideytVidID25, }); }
    if (hersliderShowElmn26) { heroSliderPlayer26 = new YT.Player(heroSliderVideoID26, { videoId: heroSlideytVidID26, }); }
    if (hersliderShowElmn27) { heroSliderPlayer27 = new YT.Player(heroSliderVideoID27, { videoId: heroSlideytVidID27, }); }
    if (hersliderShowElmn28) { heroSliderPlayer28 = new YT.Player(heroSliderVideoID28, { videoId: heroSlideytVidID28, }); }
    if (hersliderShowElmn29) { heroSliderPlayer29 = new YT.Player(heroSliderVideoID29, { videoId: heroSlideytVidID29, }); }
    if (hersliderShowElmn30) { heroSliderPlayer30 = new YT.Player(heroSliderVideoID30, { videoId: heroSlideytVidID30, }); }


    if (geCLRIV3Elm1) { geCLRIV3Player1 = new YT.Player(geCLRIV3ID1, { videoId: clriv3YTVidID1, }); }
    if (geCLRIV3Elm2) { geCLRIV3Player2 = new YT.Player(geCLRIV3ID2, { videoId: clriv3YTVidID2, }); }
    if (geCLRIV3Elm3) { geCLRIV3Player3 = new YT.Player(geCLRIV3ID3, { videoId: clriv3YTVidID3, }); }
    if (geCLRIV3Elm4) { geCLRIV3Player4 = new YT.Player(geCLRIV3ID4, { videoId: clriv3YTVidID4, }); }
    if (geCLRIV3Elm5) { geCLRIV3Player5 = new YT.Player(geCLRIV3ID5, { videoId: clriv3YTVidID5, }); }
    if (geCLRIV3Elm6) { geCLRIV3Player6 = new YT.Player(geCLRIV3ID6, { videoId: clriv3YTVidID6, }); }
    if (geCLRIV3Elm7) { geCLRIV3Player7 = new YT.Player(geCLRIV3ID7, { videoId: clriv3YTVidID7, }); }
    if (geCLRIV3Elm8) { geCLRIV3Player8 = new YT.Player(geCLRIV3ID8, { videoId: clriv3YTVidID8, }); }
    if (geCLRIV3Elm9) { geCLRIV3Player9 = new YT.Player(geCLRIV3ID9, { videoId: clriv3YTVidID9, }); }
    if (geCLRIV3Elm10) { geCLRIV3Player10 = new YT.Player(geCLRIV3ID10, { videoId: clriv3YTVidID10, }); }

}

// backdrop script
let bodyScrollWidth = window.innerWidth - document.documentElement.clientWidth + 'px';
let backdropElement = document.createElement("div");
backdropElement.classList.add("modal-backdrop", "video-backdrop", "fade", "show");





// open Modal

let youtubeModalVideoID = document.querySelectorAll(".video-popup-card, .hvbv1-play-icon-container,.videoicon, .play-icon-container1");



for (let modalVideoItem = 0; modalVideoItem < youtubeModalVideoID.length; modalVideoItem++) {

    youtubeModalVideoID[modalVideoItem].addEventListener("click", function () {
        let $this = this;
        let ytIframeVideoModal, modalIntstanceID, hvb1InstanceId, slideIntstanceID, clriv3IntstanceID;

        if (this.classList.contains('video-popup-card')) {
            modalIntstanceID = this.closest('.wp-block-custom-ge-video-carousel .video-popup-card').getAttribute('carousel-video-instance-id');
            ytIframeVideoModal = this.closest('.wp-block-custom-ge-video-carousel').querySelector('[modal-instance-id="' + modalIntstanceID + '"]');
        }
        else if (this.classList.contains('hvbv1-play-icon-container')) {
            hvb1InstanceId = this.closest('.wp-block-custom-ge-hero-video-block-variant-1').getAttribute('hvb1-instance-id');
            ytIframeVideoModal = this.closest('.wp-block-custom-ge-hero-video-block-variant-1').querySelector(".modal");
        }
        else if (this.classList.contains('videoicon')) {
            slideIntstanceID = this.closest('.wp-block-custom-ge-hero-slide').getAttribute('slide-instance-id');
            ytIframeVideoModal = this.closest('.wp-block-custom-ge-hero-slide').querySelector(".modal");
            document.body.classList.add('ge-hero-slides-popup-show');  
        }
        else if (this.classList.contains('play-icon-container1')) {
            clriv3IntstanceID = this.closest('.wp-block-custom-ge-content-left-right-image-variant-3').getAttribute('instance-id');
            ytIframeVideoModal = this.closest('.wp-block-custom-ge-content-left-right-image-variant-3').querySelector(".modal");
        }

        document.body.appendChild(backdropElement);
        document.querySelector("body").classList.add("modal-open");
        document.querySelector("body").style.paddingRight = bodyScrollWidth;
        ytIframeVideoModal.classList.add('show');



        setTimeout(function () {
            ytIframeVideoModal.style.display = "block";
           if (!$this.classList.contains('videoicon')) {
            backdropElement.style = "block";              
            }
		
        }, 200)

        if (ytIframeVideoModal.classList.contains('msstream-iframe')) {
            let modalMSstreamVideoSrc = ytIframeVideoModal.querySelector("iframe").getAttribute('src');
            let modalMSstreamVideoUpdatedSrc = modalMSstreamVideoSrc.replace('&autoplay=0', '&autoplay=true');
            ytIframeVideoModal.querySelector("iframe").setAttribute("src", modalMSstreamVideoUpdatedSrc);
        } else if (ytIframeVideoModal.classList.contains('video-elm')) {
            ytIframeVideoModal.querySelector("video").autoplay;
        } else {
            if (carouselVideoElm1 && modalIntstanceID === "1") { carouselVideoPlayer1.playVideo(); return }
            else if (carouselVideoElm2 && modalIntstanceID === "2") { carouselVideoPlayer2.playVideo(); return }
            else if (carouselVideoElm3 && modalIntstanceID === "3") { carouselVideoPlayer3.playVideo(); return }
            else if (carouselVideoElm4 && modalIntstanceID === "4") { carouselVideoPlayer4.playVideo(); return }
            else if (carouselVideoElm5 && modalIntstanceID === "5") { carouselVideoPlayer5.playVideo(); return }
            else if (carouselVideoElm6 && modalIntstanceID === "6") { carouselVideoPlayer6.playVideo(); return }
            else if (carouselVideoElm7 && modalIntstanceID === "7") { carouselVideoPlayer7.playVideo(); return }
            else if (carouselVideoElm8 && modalIntstanceID === "8") { carouselVideoPlayer8.playVideo(); return }
            else if (carouselVideoElm9 && modalIntstanceID === "9") { carouselVideoPlayer9.playVideo(); return }
            else if (carouselVideoElm10 && modalIntstanceID === "10") { carouselVideoPlayer10.playVideo(); return }
            else if (carouselVideoElm11 && modalIntstanceID === "11") { carouselVideoPlayer11.playVideo(); return }
            else if (carouselVideoElm12 && modalIntstanceID === "12") { carouselVideoPlayer12.playVideo(); return }
            else if (carouselVideoElm13 && modalIntstanceID === "13") { carouselVideoPlayer13.playVideo(); return }
            else if (carouselVideoElm14 && modalIntstanceID === "14") { carouselVideoPlayer14.playVideo(); return }
            else if (carouselVideoElm15 && modalIntstanceID === "15") { carouselVideoPlayer15.playVideo(); return }
            else if (carouselVideoElm16 && modalIntstanceID === "16") { carouselVideoPlayer16.playVideo(); return }
            else if (carouselVideoElm17 && modalIntstanceID === "17") { carouselVideoPlayer17.playVideo(); return }
            else if (carouselVideoElm18 && modalIntstanceID === "18") { carouselVideoPlayer18.playVideo(); return }
            else if (carouselVideoElm19 && modalIntstanceID === "19") { carouselVideoPlayer19.playVideo(); return }
            else if (carouselVideoElm20 && modalIntstanceID === "20") { carouselVideoPlayer20.playVideo(); return }


            if (heroVideoElm1 && hvb1InstanceId === "1") { hvbv1Player1.playVideo(); return }
            if (heroVideoElm2 && hvb1InstanceId === "2") { hvbv1Player2.playVideo(); return }
            if (heroVideoElm3 && hvb1InstanceId === "3") { hvbv1Player3.playVideo(); return }
            if (heroVideoElm4 && hvb1InstanceId === "4") { hvbv1Player4.playVideo(); return }
            if (heroVideoElm5 && hvb1InstanceId === "5") { hvbv1Player5.playVideo(); return }
            if (heroVideoElm6 && hvb1InstanceId === "6") { hvbv1Player6.playVideo(); return }
            if (heroVideoElm7 && hvb1InstanceId === "7") { hvbv1Player7.playVideo(); return }
            if (heroVideoElm8 && hvb1InstanceId === "8") { hvbv1Player8.playVideo(); return }
            if (heroVideoElm9 && hvb1InstanceId === "9") { hvbv1Player9.playVideo(); return }


            if (hersliderShowElmn1 && slideIntstanceID === "1") { heroSliderPlayer1.playVideo(); return }
            if (hersliderShowElmn2 && slideIntstanceID === "2") { heroSliderPlayer2.playVideo(); return }
            if (hersliderShowElmn3 && slideIntstanceID === "3") { heroSliderPlayer3.playVideo(); return }
            if (hersliderShowElmn4 && slideIntstanceID === "4") { heroSliderPlayer4.playVideo(); return }
            if (hersliderShowElmn5 && slideIntstanceID === "5") { heroSliderPlayer5.playVideo(); return }
            if (hersliderShowElmn6 && slideIntstanceID === "6") { heroSliderPlayer6.playVideo(); return }
            if (hersliderShowElmn7 && slideIntstanceID === "7") { heroSliderPlayer7.playVideo(); return }
            if (hersliderShowElmn8 && slideIntstanceID === "8") { heroSliderPlayer8.playVideo(); return }
            if (hersliderShowElmn9 && slideIntstanceID === "9") { heroSliderPlayer9.playVideo(); return }
            if (hersliderShowElmn10 && slideIntstanceID === "10") { heroSliderPlayer10.playVideo(); return }
            if (hersliderShowElmn11 && slideIntstanceID === "11") { heroSliderPlayer11.playVideo(); return }
            if (hersliderShowElmn12 && slideIntstanceID === "12") { heroSliderPlayer12.playVideo(); return }
            if (hersliderShowElmn13 && slideIntstanceID === "13") { heroSliderPlayer13.playVideo(); return }
            if (hersliderShowElmn14 && slideIntstanceID === "14") { heroSliderPlayer14.playVideo(); return }
            if (hersliderShowElmn15 && slideIntstanceID === "15") { heroSliderPlayer15.playVideo(); return }
            if (hersliderShowElmn16 && slideIntstanceID === "16") { heroSliderPlayer16.playVideo(); return }
            if (hersliderShowElmn17 && slideIntstanceID === "17") { heroSliderPlayer17.playVideo(); return }
            if (hersliderShowElmn18 && slideIntstanceID === "18") { heroSliderPlayer18.playVideo(); return }
            if (hersliderShowElmn19 && slideIntstanceID === "19") { heroSliderPlayer19.playVideo(); return }
            if (hersliderShowElmn20 && slideIntstanceID === "20") { heroSliderPlayer20.playVideo(); return }
            if (hersliderShowElmn21 && slideIntstanceID === "21") { heroSliderPlayer21.playVideo(); return }
            if (hersliderShowElmn22 && slideIntstanceID === "22") { heroSliderPlayer22.playVideo(); return }
            if (hersliderShowElmn23 && slideIntstanceID === "23") { heroSliderPlayer23.playVideo(); return }
            if (hersliderShowElmn24 && slideIntstanceID === "24") { heroSliderPlayer24.playVideo(); return }
            if (hersliderShowElmn25 && slideIntstanceID === "25") { heroSliderPlayer25.playVideo(); return }
            if (hersliderShowElmn26 && slideIntstanceID === "26") { heroSliderPlayer26.playVideo(); return }
            if (hersliderShowElmn27 && slideIntstanceID === "27") { heroSliderPlayer27.playVideo(); return }
            if (hersliderShowElmn28 && slideIntstanceID === "28") { heroSliderPlayer28.playVideo(); return }
            if (hersliderShowElmn29 && slideIntstanceID === "29") { heroSliderPlayer29.playVideo(); return }
            if (hersliderShowElmn30 && slideIntstanceID === "30") { heroSliderPlayer30.playVideo(); return }


            if (geCLRIV3Elm1 && clriv3IntstanceID === "1") { geCLRIV3Player1.playVideo(); return }
            if (geCLRIV3Elm2 && clriv3IntstanceID === "2") { geCLRIV3Player2.playVideo(); return }
            if (geCLRIV3Elm3 && clriv3IntstanceID === "3") { geCLRIV3Player3.playVideo(); return }
            if (geCLRIV3Elm4 && clriv3IntstanceID === "4") { geCLRIV3Player4.playVideo(); return }
            if (geCLRIV3Elm5 && clriv3IntstanceID === "5") { geCLRIV3Player5.playVideo(); return }
            if (geCLRIV3Elm6 && clriv3IntstanceID === "6") { geCLRIV3Player6.playVideo(); return }
            if (geCLRIV3Elm7 && clriv3IntstanceID === "7") { geCLRIV3Player7.playVideo(); return }
            if (geCLRIV3Elm8 && clriv3IntstanceID === "8") { geCLRIV3Player8.playVideo(); return }
            if (geCLRIV3Elm9 && clriv3IntstanceID === "9") { geCLRIV3Player9.playVideo(); return }
            if (geCLRIV3Elm10 && clriv3IntstanceID === "10") { geCLRIV3Player10.playVideo(); return }

        }

    });

}



// Close Modal Script
function heroVideoCloseModal(elm) {
    let $this = elm

    document.querySelector("body").classList.remove("modal-open");
    document.querySelector("body").style.paddingRight = "";
    document.querySelector(".modal-backdrop").remove();
  if(document.querySelector("body").classList.contains("ge-hero-slides-popup-show")) {
    document.querySelector("body").classList.remove("ge-hero-slides-popup-show");
  }




    let closeModalID, modalIntstanceID, hvb1InstanceId, slideIntstanceID, clriv3IntstanceID;

    if ($this.classList.contains('video-modal-close')) {
        closeModalID = $this.closest('.modal');

        if ($this.closest('.modal').classList.contains('video-carousel-modal')) {
            modalIntstanceID = $this.closest('.modal').getAttribute('modal-instance-id');
        }
        else if ($this.closest('.modal').classList.contains('hero-video-block1-modal')) {
            hvb1InstanceId = $this.closest('.modal').getAttribute('hvbv1-modal-instance-id');
        }
        else if ($this.closest('.modal').classList.contains('slide-hero-video-modal')) {
            slideIntstanceID = $this.closest('.modal').getAttribute('modal-slide-instance-id');
        }
        else if ($this.closest('.modal').classList.contains('clriv3-video-modal')) {
            clriv3IntstanceID = $this.closest('.modal').getAttribute('clriv3-modal-instance-id');
        }

    } else if ($this.classList.contains('modal')) {
        closeModalID = $this;

        if ($this.classList.contains('video-carousel-modal')) {
            modalIntstanceID = $this.getAttribute('modal-instance-id');
        }
        else if ($this.classList.contains('hero-video-block1-modal')) {
            hvb1InstanceId = $this.getAttribute('hvbv1-modal-instance-id');
        }
        else if ($this.closest('.modal').classList.contains('slide-hero-video-modal')) {
            slideIntstanceID = $this.closest('.modal').getAttribute('modal-slide-instance-id');
        }
        else if ($this.closest('.modal').classList.contains('clriv3-video-modal')) {
            clriv3IntstanceID = $this.closest('.modal').getAttribute('clriv3-modal-instance-id');
        }

    }


    if ($this.closest('.modal').classList.contains('msstream-iframe')) {
        let modalMSstreamVideoSrc = $this.closest('.modal').querySelector("iframe").getAttribute('src');
        let modalMSstreamVideoUpdatedSrc = modalMSstreamVideoSrc.replace('&autoplay=true', '&autoplay=0');
        $this.closest('.modal').querySelector("iframe").setAttribute("src", modalMSstreamVideoUpdatedSrc);
    }

    closeModalID.style.display = "none";
    closeModalID.classList.remove("show");


    if (carouselVideoElm1 && modalIntstanceID === "1") { carouselVideoPlayer1.stopVideo(); return }
    else if (carouselVideoElm2 && modalIntstanceID === "2") { carouselVideoPlayer2.stopVideo(); return }
    else if (carouselVideoElm3 && modalIntstanceID === "3") { carouselVideoPlayer3.stopVideo(); return }
    else if (carouselVideoElm4 && modalIntstanceID === "4") { carouselVideoPlayer4.stopVideo(); return }
    else if (carouselVideoElm5 && modalIntstanceID === "5") { carouselVideoPlayer5.stopVideo(); return }
    else if (carouselVideoElm6 && modalIntstanceID === "6") { carouselVideoPlayer6.stopVideo(); return }
    else if (carouselVideoElm7 && modalIntstanceID === "7") { carouselVideoPlayer7.stopVideo(); return }
    else if (carouselVideoElm8 && modalIntstanceID === "8") { carouselVideoPlayer8.stopVideo(); return }
    else if (carouselVideoElm9 && modalIntstanceID === "9") { carouselVideoPlayer9.stopVideo(); return }
    else if (carouselVideoElm10 && modalIntstanceID === "10") { carouselVideoPlayer10.stopVideo(); return }
    else if (carouselVideoElm11 && modalIntstanceID === "11") { carouselVideoPlayer11.stopVideo(); return }
    else if (carouselVideoElm12 && modalIntstanceID === "12") { carouselVideoPlayer12.stopVideo(); return }
    else if (carouselVideoElm13 && modalIntstanceID === "13") { carouselVideoPlayer13.stopVideo(); return }
    else if (carouselVideoElm14 && modalIntstanceID === "14") { carouselVideoPlayer14.stopVideo(); return }
    else if (carouselVideoElm15 && modalIntstanceID === "15") { carouselVideoPlayer15.stopVideo(); return }
    else if (carouselVideoElm16 && modalIntstanceID === "16") { carouselVideoPlayer16.stopVideo(); return }
    else if (carouselVideoElm17 && modalIntstanceID === "17") { carouselVideoPlayer17.stopVideo(); return }
    else if (carouselVideoElm18 && modalIntstanceID === "18") { carouselVideoPlayer18.stopVideo(); return }
    else if (carouselVideoElm19 && modalIntstanceID === "19") { carouselVideoPlayer19.stopVideo(); return }
    else if (carouselVideoElm20 && modalIntstanceID === "20") { carouselVideoPlayer20.stopVideo(); return }


    if (heroVideoElm1 && hvb1InstanceId === "1") { hvbv1Player1.stopVideo(); return }
    if (heroVideoElm2 && hvb1InstanceId === "2") { hvbv1Player2.stopVideo(); return }
    if (heroVideoElm3 && hvb1InstanceId === "3") { hvbv1Player3.stopVideo(); return }
    if (heroVideoElm4 && hvb1InstanceId === "4") { hvbv1Player4.stopVideo(); return }
    if (heroVideoElm5 && hvb1InstanceId === "5") { hvbv1Player5.stopVideo(); return }
    if (heroVideoElm6 && hvb1InstanceId === "6") { hvbv1Player6.stopVideo(); return }
    if (heroVideoElm7 && hvb1InstanceId === "7") { hvbv1Player7.stopVideo(); return }
    if (heroVideoElm8 && hvb1InstanceId === "8") { hvbv1Player8.stopVideo(); return }
    if (heroVideoElm9 && hvb1InstanceId === "9") { hvbv1Player9.stopVideo(); return }


    if (hersliderShowElmn1 && slideIntstanceID === "1") { heroSliderPlayer1.stopVideo(); return }
    if (hersliderShowElmn2 && slideIntstanceID === "2") { heroSliderPlayer2.stopVideo(); return }
    if (hersliderShowElmn3 && slideIntstanceID === "3") { heroSliderPlayer3.stopVideo(); return }
    if (hersliderShowElmn4 && slideIntstanceID === "4") { heroSliderPlayer4.stopVideo(); return }
    if (hersliderShowElmn5 && slideIntstanceID === "5") { heroSliderPlayer5.stopVideo(); return }
    if (hersliderShowElmn6 && slideIntstanceID === "6") { heroSliderPlayer6.stopVideo(); return }
    if (hersliderShowElmn7 && slideIntstanceID === "7") { heroSliderPlayer7.stopVideo(); return }
    if (hersliderShowElmn8 && slideIntstanceID === "8") { heroSliderPlayer8.stopVideo(); return }
    if (hersliderShowElmn9 && slideIntstanceID === "9") { heroSliderPlayer9.stopVideo(); return }
    if (hersliderShowElmn10 && slideIntstanceID === "10") { heroSliderPlayer10.stopVideo(); return }
    if (hersliderShowElmn11 && slideIntstanceID === "11") { heroSliderPlayer11.stopVideo(); return }
    if (hersliderShowElmn12 && slideIntstanceID === "12") { heroSliderPlayer12.stopVideo(); return }
    if (hersliderShowElmn13 && slideIntstanceID === "13") { heroSliderPlayer13.stopVideo(); return }
    if (hersliderShowElmn14 && slideIntstanceID === "14") { heroSliderPlayer14.stopVideo(); return }
    if (hersliderShowElmn15 && slideIntstanceID === "15") { heroSliderPlayer15.stopVideo(); return }
    if (hersliderShowElmn16 && slideIntstanceID === "16") { heroSliderPlayer16.stopVideo(); return }
    if (hersliderShowElmn17 && slideIntstanceID === "17") { heroSliderPlayer17.stopVideo(); return }
    if (hersliderShowElmn18 && slideIntstanceID === "18") { heroSliderPlayer18.stopVideo(); return }
    if (hersliderShowElmn19 && slideIntstanceID === "19") { heroSliderPlayer19.stopVideo(); return }
    if (hersliderShowElmn20 && slideIntstanceID === "20") { heroSliderPlayer20.stopVideo(); return }
    if (hersliderShowElmn21 && slideIntstanceID === "21") { heroSliderPlayer21.stopVideo(); return }
    if (hersliderShowElmn22 && slideIntstanceID === "22") { heroSliderPlayer22.stopVideo(); return }
    if (hersliderShowElmn23 && slideIntstanceID === "23") { heroSliderPlayer23.stopVideo(); return }
    if (hersliderShowElmn24 && slideIntstanceID === "24") { heroSliderPlayer24.stopVideo(); return }
    if (hersliderShowElmn25 && slideIntstanceID === "25") { heroSliderPlayer25.stopVideo(); return }
    if (hersliderShowElmn26 && slideIntstanceID === "26") { heroSliderPlayer26.stopVideo(); return }
    if (hersliderShowElmn27 && slideIntstanceID === "27") { heroSliderPlayer27.stopVideo(); return }
    if (hersliderShowElmn28 && slideIntstanceID === "28") { heroSliderPlayer28.stopVideo(); return }
    if (hersliderShowElmn29 && slideIntstanceID === "29") { heroSliderPlayer29.stopVideo(); return }
    if (hersliderShowElmn30 && slideIntstanceID === "30") { heroSliderPlayer30.stopVideo(); return }


    if (geCLRIV3Elm1 && clriv3IntstanceID === "1") { geCLRIV3Player1.stopVideo(); return }
    if (geCLRIV3Elm2 && clriv3IntstanceID === "2") { geCLRIV3Player2.stopVideo(); return }
    if (geCLRIV3Elm3 && clriv3IntstanceID === "3") { geCLRIV3Player3.stopVideo(); return }
    if (geCLRIV3Elm4 && clriv3IntstanceID === "4") { geCLRIV3Player4.stopVideo(); return }
    if (geCLRIV3Elm5 && clriv3IntstanceID === "5") { geCLRIV3Player5.stopVideo(); return }
    if (geCLRIV3Elm6 && clriv3IntstanceID === "6") { geCLRIV3Player6.stopVideo(); return }
    if (geCLRIV3Elm7 && clriv3IntstanceID === "7") { geCLRIV3Player7.stopVideo(); return }
    if (geCLRIV3Elm8 && clriv3IntstanceID === "8") { geCLRIV3Player8.stopVideo(); return }
    if (geCLRIV3Elm9 && clriv3IntstanceID === "9") { geCLRIV3Player9.stopVideo(); return }
    if (geCLRIV3Elm10 && clriv3IntstanceID === "10") { geCLRIV3Player10.stopVideo(); return }

}

// close modal when click on close icon
let videoModalCloseClass = document.getElementsByClassName("video-modal-close");
for (let modalcloseItem = 0; modalcloseItem < videoModalCloseClass.length; modalcloseItem++) {
    videoModalCloseClass[modalcloseItem].addEventListener("click", function (event) {
        heroVideoCloseModal(this);
    });
}

// close modal when click outside of modal
document.addEventListener("click", function (event) {
    let videoModalClose = document.querySelector('.modal.show');
    if (event.target == videoModalClose) {
        heroVideoCloseModal(videoModalClose);
    }
});
/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/youtube-api.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-slim-text.js. */
// script for button

let slimBtnElement = document.querySelectorAll(".wp-block-custom-ge-button-container .wp-block-custom-ge-button-content");
if (slimBtnElement.length) {
  for (let slimBtnElementItem = 0; slimBtnElementItem < slimBtnElement.length; slimBtnElementItem++) {
    if (slimBtnElement[slimBtnElementItem].children[0].querySelector('a')) {
      slimBtnElement[slimBtnElementItem].classList.add('button-with-link');
    }

  }
}

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-slim-text.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-hero-secondary-variant-3.js. */
// script for apply gradient on mobile

function gradientHeroFunc() {
  let heroMobileGradientBg = document.querySelectorAll(".wp-block-custom-ge-hero-secondary-variant-3 .linear-gradient");
  if (heroMobileGradientBg.length) {
    for (let heroMobileGradientBgItem = 0; heroMobileGradientBgItem < heroMobileGradientBg.length; heroMobileGradientBgItem++) {
      let gradientColorCode = heroMobileGradientBg[heroMobileGradientBgItem].getAttribute('data-color');
      if (window.innerWidth <= 767) {
        // heroMobileGradientBg[heroMobileGradientBgItem].style.background = `-moz-linear-gradient(top, rgba(${gradientColorCode}, 1) 37%,rgba(${gradientColorCode}, 0.49) 69%, rgba(${gradientColorCode}, 0) 100%)`;
        // heroMobileGradientBg[heroMobileGradientBgItem].style.background = `-webkit-linear-gradient(top, rgba(${gradientColorCode}, 1) 37%,rgba(${gradientColorCode}, 0.49) 69%, rgba(${gradientColorCode}, 0) 100%)`;
        heroMobileGradientBg[heroMobileGradientBgItem].style.background = `linear-gradient(to bottom, rgba(${gradientColorCode}, 1) 37%,rgba(${gradientColorCode}, 0.49) 69%, rgba(${gradientColorCode}, 0) 100%)`;
      }
      else {
        heroMobileGradientBg[heroMobileGradientBgItem].style.background = `linear-gradient(to right,rgba(${gradientColorCode}, 1) 0%,rgba(${gradientColorCode}, 0.99) 1%,rgba(${gradientColorCode}, 0.5) 55%,rgba(${gradientColorCode}, 0.49) 56%,rgba(${gradientColorCode}, 0) 100% )`;
      }
    }
  }
};

gradientHeroFunc();
window.addEventListener('resize', function (event) {
  gradientHeroFunc();
}, true);

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-hero-secondary-variant-3.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-hero-secondary-variant-with-text.js. */

// script for apply gradient on mobile

function gradientHeroTextFunc() {
  let heroTextMobileGradientBg = document.querySelectorAll(".wp-block-custom-ge-hero-secondary-variant-with-text .linear-gradient");

  if (heroTextMobileGradientBg.length) {
    for (let heroTextMobileGradientBgItem = 0; heroTextMobileGradientBgItem < heroTextMobileGradientBg.length; heroTextMobileGradientBgItem++) {
      let gradientColorCode = heroTextMobileGradientBg[heroTextMobileGradientBgItem].getAttribute('data-color');
      if (window.innerWidth <= 767) {
        // heroTextMobileGradientBg[heroTextMobileGradientBgItem].style.background = `-moz-linear-gradient(top, rgba(${gradientColorCode}, 1) 37%,rgba(${gradientColorCode}, 0.49) 69%, rgba(${gradientColorCode}, 0) 100%)`;
        // heroTextMobileGradientBg[heroTextMobileGradientBgItem].style.background = `-webkit-linear-gradient(top, rgba(${gradientColorCode}, 1) 37%,rgba(${gradientColorCode}, 0.49) 69%, rgba(${gradientColorCode}, 0) 100%)`;
        heroTextMobileGradientBg[heroTextMobileGradientBgItem].style.background = `linear-gradient(to bottom, rgba(${gradientColorCode}, 1) 37%,rgba(${gradientColorCode}, 0.49) 69%, rgba(${gradientColorCode}, 0) 100%)`;
      }
      else {
        heroTextMobileGradientBg[heroTextMobileGradientBgItem].style.background = `linear-gradient(to right,rgba(${gradientColorCode}, 1) 0%,rgba(${gradientColorCode}, 0.99) 1%,rgba(${gradientColorCode}, 0.5) 55%,rgba(${gradientColorCode}, 0.49) 56%,rgba(${gradientColorCode}, 0) 100% )`;
      }
    }
  }
};

gradientHeroTextFunc();
window.addEventListener('resize', function (event) {
  gradientHeroTextFunc();
}, true);

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-hero-secondary-variant-with-text.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-sub-navigation-variant-2.js. */
// import $ from "jquery";

(function ($, Drupal) {
  $(document).ready(function () {

    if ($(window).width() < 768) {
      $('nav.sub-nav-main-container .sub-nav-body-container ul li a').on('click', function () {
        const targetElem = $(this).attr('href');
        if ($(targetElem).length) {
          $('html, body').animate({
            scrollTop: $(targetElem).offset().top - 135
          });
        }
      });

    } else if ($(window).width() > 767 && $(window).width() < 991) {
      $('nav.sub-nav-main-container .sub-nav-body-container ul li a').on('click', function () {
        const targetElem = $(this).attr('href');
        if ($(targetElem).length) {
          $('html, body').animate({
            scrollTop: $(targetElem).offset().top - 160
          });
        }
      })

    } else {
      $('nav.sub-nav-main-container .sub-nav-body-container ul li a').on('click', function () {
        const targetElem = $(this).attr('href');
        if ($(targetElem).length) {
          $('html, body').animate({
            scrollTop: $(targetElem).offset().top - 80
          });
        }
      });
    }

    if ($(window).width() > 767 && $(window).width() < 991) {
      $("nav.sub-nav-main-container .sub-nav-header-container").on('click', function () {
        $(this).toggleClass("activeSetting");
        let $subNavMainBody = $(this).next();
        if (!$(this).hasClass('activeSetting')) {
          $subNavMainBody.removeClass('sub-nav-body-setting');
        } else {
          $subNavMainBody.addClass('sub-nav-body-setting');
        }
      });
    }

    if ($(window).width() > 992) {

      $("nav.sub-nav-main-container .sub-nav-body-container ul li h6").has("a").addClass("full-width-link-items");

      $("nav.sub-nav-main-container .sub-nav-header-container").on('click', function () {
        let $subNavBody = $(this).next();
        $subNavBody.addClass('sub-nav-body-setting');
      });
      $("nav.sub-nav-main-container .sub-nav-body-container ul .sub-nav-body-close-icon").on('click', function () {
        $("nav.sub-nav-main-container .sub-nav-body-container").removeClass('sub-nav-body-setting');
      });
    }

    $(window).on('scroll', function () {
      if ($('nav.sub-nav-main-container .sub-nav-body-container ul li a').length) {
        let scrollPos = $(window).scrollTop();
        $('nav.sub-nav-main-container .sub-nav-body-container ul li a').each(function (linkEle) {
          let currLink = $(this);
          let refElement = $(currLink.attr("href"));

          if ($(window).width() < 768) {
            if (linkEle === 0) {
              if ((refElement.position().top - 160) <= scrollPos && (refElement.position().top + 360) + refElement.height() > scrollPos) {
                $('nav.sub-nav-main-container .sub-nav-body-container ul li a').removeClass("sub-nav-highlight-item");
                currLink.addClass("sub-nav-highlight-item");
              } else {
                currLink.removeClass("sub-nav-highlight-item");
              }
            } else {
              if ((refElement.position().top - 60) <= scrollPos && (refElement.position().top + 60) + refElement.height() > scrollPos) {
                $('nav.sub-nav-main-container .sub-nav-body-container ul li a').removeClass("sub-nav-highlight-item");
                currLink.addClass("sub-nav-highlight-item");
              }
              else {
                currLink.removeClass("sub-nav-highlight-item");
              }
            }
          } else if ($(window).width() > 767 && $(window).width() < 991) {
            if (linkEle === 0) {
              if ((refElement.position().top - 160) <= scrollPos && (refElement.position().top + 360) + refElement.height() > scrollPos) {
                $('nav.sub-nav-main-container .sub-nav-body-container ul li a').removeClass("sub-nav-highlight-item");
                currLink.addClass("sub-nav-highlight-item");
              } else {
                currLink.removeClass("sub-nav-highlight-item");
              }
            } else {
              if ((refElement.position().top - 80) <= scrollPos && (refElement.position().top + 80) + refElement.height() > scrollPos) {
                $('nav.sub-nav-main-container .sub-nav-body-container ul li a').removeClass("sub-nav-highlight-item");
                currLink.addClass("sub-nav-highlight-item");
              }
              else {
                currLink.removeClass("sub-nav-highlight-item");
              }
            }
          } else if ($(window).width() > 1200) {
            if ((refElement.position().top - 85) <= scrollPos && (refElement.position().top + 160) + refElement.height() > scrollPos) {
              $('nav.sub-nav-main-container .sub-nav-body-container ul li a').removeClass("sub-nav-highlight-item");
              currLink.addClass("sub-nav-highlight-item");
            }
            else {
              currLink.removeClass("sub-nav-highlight-item");
            }
          } else {
            if ((refElement.position().top - 85) <= scrollPos && (refElement.position().top + 160) + refElement.height() > scrollPos) {
              $('nav.sub-nav-main-container .sub-nav-body-container ul li a').removeClass("sub-nav-highlight-item");
              currLink.addClass("sub-nav-highlight-item");
            }
            else {
              currLink.removeClass("sub-nav-highlight-item");
            }
          }
        });
      }
    });
  });
})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-sub-navigation-variant-2.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-feature-content-carousel.js. */
// Place your frontend scripts here

// import $ from "jquery";
// Import Slick
// import 'slick-carousel/slick/slick.min';

(function ($, Drupal) {

$(document).ready(function(){
  let featureContentCarousel = $(".wp-block-custom-ge-feature-content-carousel");
  if (featureContentCarousel.length) {
      $(".wp-block-custom-ge-feature-content-carousel .wp-block-custom-ge-feature-content-carousel-card-image .wp-block-custom-ge-feature-content-carousel-button .content-carousel-button_link").has("a").addClass("content-carousel-button-with_link");

  for(let contentCarousel = 0; contentCarousel <= 9; contentCarousel++) {
    if ($(".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-slider-items").length) {
      // Get count of slides
      $(".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-slider-items").on('init reinit', function(event, slick){
        if (slick.slideCount > 0 && !isNaN(slick.slideCount)) {
          let contentCarouselSlideMargin = parseInt($(slick.$slides[0]).css('margin-right'));
          let contentCarouselSlideTotalWidth = slick.$slides[0].clientWidth + contentCarouselSlideMargin;
          let contentCarouselSlidesWidth = (contentCarouselSlideTotalWidth * slick.slideCount) - contentCarouselSlideMargin;

          //check if total width of slides is less than the slider window
          if (contentCarouselSlidesWidth < slick.$slider[0].clientWidth ) {
            $(".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] div.content-control-carousel").addClass("content-control-arrow-hidden");
            }
          else {
          $(".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] div.content-control-carousel").removeClass("content-control-arrow-hidden");
          }
        }
      });

      $(".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-slider-items").slick({
        speed: 300,
        slidesToShow: 3.25,
        slidesToScroll: 1,

        prevArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-prev-ctrl",
        nextArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-next-ctrl",

        infinite: false,
        mobileFirst: true,
        rows: 1,
        variableWidth: true,

        responsive: [{
            breakpoint: 1200, //mf min(1200)
            settings: {
              slidesToShow: 1.25,
              slidesToScroll: 1,
              rows: 1,
              prevArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-prev-ctrl",
              nextArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-next-ctrl",
              variableWidth: true,
            },
          }, {
            breakpoint: 992,  //mf min(992)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 1,
              prevArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-prev-ctrl",
              nextArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-next-ctrl",
              variableWidth: true,
            },
          }, {
            breakpoint: 767, //mf min(768)
            settings: {
              slidesToShow: 1.6,
              slidesToScroll: 1,
              rows: 1,
              prevArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-prev-ctrl",
              nextArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-next-ctrl",
              variableWidth: true,
            },
          }, {
            breakpoint: 576,  //mf min(576)
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              rows: 1,
              prevArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-prev-ctrl",
              nextArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-next-ctrl",
              variableWidth: true,
            },
          }, {
            breakpoint: 300,  //mf min(320)
            settings: {
              slidesToShow: 1, //1.2
              slidesToScroll: 1,
              rows: 1,
              prevArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-prev-ctrl",
              nextArrow: ".wp-block-custom-ge-feature-content-carousel[data-ge-feature-content-carousel-instance-id = '" + contentCarousel + "'] .content-carousel-next-ctrl",
              variableWidth: true,
            },
          },


          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }
  }
}
});

})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-feature-content-carousel.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-additive-instagram-feed.js. */
/* instafeed.js | v2.0.0 | https://github.com/stevenschobert/instafeed.js | License: MIT */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, 
  global.Instafeed = factory());
})(this, function () {
  'use strict';
  function assert (val, msg) {
    if (!val) {
      throw new Error(msg);
    }
  }
  function Instafeed (options) {
    assert(!options || typeof options === 'object', 'options must be an object, got ' + options + ' (' + typeof options + ')');
    const opts = {
      accessToken: null,
      accessTokenTimeout: 1e4,
      after: null,
      apiTimeout: 1e4,
      apiLimit: null,
      before: null,
      debug: false,
      error: null,
      filter: null,
      limit: 5,
      mock: false,
      render: null,
      sort: null,
      success: null,
      target: 'instafeed-additive',
      template: '<a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /></a>',
      templateBoundaries: [ '{{', '}}' ],
      transform: null,
    };
    const state = {
      running: false,
      node: null,
      token: null,
      paging: null,
      pool: [],
    };
    if (options) {
      for (const optKey in opts) {
        if (typeof options[optKey] !== 'undefined') {
          opts[optKey] = options[optKey];
        }
      }
    }
    assert(typeof opts.target === 'string' || typeof opts.target === 'object', 'target must be a string or DOM node, got ' + opts.target + ' (' + typeof opts.target + ')');
    assert(typeof opts.accessToken === 'string' || typeof opts.accessToken === 'function', 'accessToken must be a string or function, got ' + opts.accessToken + ' (' + typeof opts.accessToken + ')');
    assert(typeof opts.accessTokenTimeout === 'number', 'accessTokenTimeout must be a number, got ' + opts.accessTokenTimeout + ' (' + typeof opts.accessTokenTimeout + ')');
    assert(typeof opts.apiTimeout === 'number', 'apiTimeout must be a number, got ' + opts.apiTimeout + ' (' + typeof opts.apiTimeout + ')');
    assert(typeof opts.debug === 'boolean', 'debug must be true or false, got ' + opts.debug + ' (' + typeof opts.debug + ')');
    assert(typeof opts.mock === 'boolean', 'mock must be true or false, got ' + opts.mock + ' (' + typeof opts.mock + ')');
    assert(typeof opts.templateBoundaries === 'object' && opts.templateBoundaries.length === 2 && typeof opts.templateBoundaries[0] === 'string' && typeof opts.templateBoundaries[1] === 'string', 'templateBoundaries must be an array of 2 strings, got ' + opts.templateBoundaries + ' (' + typeof opts.templateBoundaries + ')');
    assert(!opts.template || typeof opts.template === 'string', 'template must null or string, got ' + opts.template + ' (' + typeof opts.template + ')');
    assert(!opts.error || typeof opts.error === 'function', 'error must be null or function, got ' + opts.error + ' (' + typeof opts.error + ')');
    assert(!opts.before || typeof opts.before === 'function', 'before must be null or function, got ' + opts.before + ' (' + typeof opts.before + ')');
    assert(!opts.after || typeof opts.after === 'function', 'after must be null or function, got ' + opts.after + ' (' + typeof opts.after + ')');
    assert(!opts.success || typeof opts.success === 'function', 'success must be null or function, got ' + opts.success + ' (' + typeof opts.success + ')');
    assert(!opts.filter || typeof opts.filter === 'function', 'filter must be null or function, got ' + opts.filter + ' (' + typeof opts.filter + ')');
    assert(!opts.transform || typeof opts.transform === 'function', 'transform must be null or function, got ' + opts.transform + ' (' + typeof opts.transform + ')');
    assert(!opts.sort || typeof opts.sort === 'function', 'sort must be null or function, got ' + opts.sort + ' (' + typeof opts.sort + ')');
    assert(!opts.render || typeof opts.render === 'function', 'render must be null or function, got ' + opts.render + ' (' + typeof opts.render + ')');
    assert(!opts.limit || typeof opts.limit === 'number', 'limit must be null or number, got ' + opts.limit + ' (' + typeof opts.limit + ')');
    assert(!opts.apiLimit || typeof opts.apiLimit === 'number', 'apiLimit must null or number, got ' + opts.apiLimit + ' (' + typeof opts.apiLimit + ')');
    this._state = state;
    this._options = opts;
  }
  
  Instafeed.prototype.run = function run () {
    const scope = this;
    this._debug('run', 'options', this._options);
    this._debug('run', 'state', this._state);
    if (this._state.running) {
      this._debug('run', 'already running, skipping');
      return false;
    }
    this._start();
    this._debug('run', 'getting dom node');
    if (typeof this._options.target === 'string') {
      this._state.node = document.getElementById(this._options.target);
    }
    else {
      this._state.node = this._options.target;
    }
    if (!this._state.node) {
      this._fail(new Error('no element found with ID ' + this._options.target));
      return false;
    }
    this._debug('run', 'got dom node', this._state.node);
    this._debug('run', 'getting access token');
    this._getAccessToken(function onTokenReceived (err, token) {
      if (err) {
        scope._debug('onTokenReceived', 'error', err);
        scope._fail(new Error('error getting access token: ' + err.message));
        return;
      }
      scope._debug('onTokenReceived', 'got token', token);
      scope._state.token = token;
      scope._showNext(function onNextShown (err) {
        if (err) {
          scope._debug('onNextShown', 'error', err);
          scope._fail(err);
          return;
        }
        scope._finish();
      });
    });
    return true;
  };
  
  Instafeed.prototype.hasNext = function hasNext () {
    const paging = this._state.paging;
    const pool = this._state.pool;
    this._debug('hasNext', 'paging', paging);
    this._debug('hasNext', 'pool', pool.length, pool);
    return pool.length > 0 || paging && typeof paging.next === 'string';
  };
  Instafeed.prototype.next = function next () {
    const scope = this;
    if (!scope.hasNext()) {
      scope._debug('next', 'hasNext is false, skipping');
      return false;
    }
    if (scope._state.running) {
      scope._debug('next', 'already running, skipping');
      return false;
    }
    scope._start();
    scope._showNext(function onNextShown (err) {
      if (err) {
        scope._debug('onNextShown', 'error', err);
        scope._fail(err);
        return;
      }
      scope._finish();
    });
  };
  Instafeed.prototype._showNext = function showNext (callback) {
    const scope = this;
    let url = null;
    let poolItems = null;
    const hasLimit = typeof this._options.limit === 'number';
    scope._debug('showNext', 'pool', scope._state.pool.length, scope._state.pool);
    if (scope._state.pool.length > 0) {
      if (hasLimit) {
        poolItems = scope._state.pool.splice(0, scope._options.limit);
      }
      else {
        poolItems = scope._state.pool.splice(0);
      }
      scope._debug('showNext', 'items from pool', poolItems.length, poolItems);
      scope._debug('showNext', 'updated pool', scope._state.pool.length, scope._state.pool);
      if (scope._options.mock) {
        scope._debug('showNext', 'mock enabled, skipping render');
      }
      else {
        try {
          scope._renderData(poolItems);
        }
        catch (renderErr) {
          callback(renderErr);
          return;
        }
      }
      callback(null);
    }
    else {
      if (scope._state.paging && typeof scope._state.paging.next === 'string') {
        url = scope._state.paging.next;
      }
      else {
        url = 'https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=' + scope._state.token;
        if (!scope._options.apiLimit && typeof scope._options.limit === 'number') {
          scope._debug('showNext', 'no apiLimit set, falling back to limit', scope._options.apiLimit, scope._options.limit);
          url = url + '&limit=' + scope._options.limit;
        }
        else if (typeof scope._options.apiLimit === 'number') {
          scope._debug('showNext', 'apiLimit set, overriding limit', scope._options.apiLimit, scope._options.limit);
          url = url + '&limit=' + scope._options.apiLimit;
        }
      }
      scope._debug('showNext', 'making request', url);
      scope._makeApiRequest(url, function onResponseReceived (err, data) {
        let processed = null;
        if (err) {
          scope._debug('onResponseReceived', 'error', err);
          callback(new Error('api request error: ' + err.message));
          return;
        }
        scope._debug('onResponseReceived', 'data', data);
        scope._success(data);
        scope._debug('onResponseReceived', 'setting paging', data.paging);
        scope._state.paging = data.paging;
        try {
          processed = scope._processData(data);
          scope._debug('onResponseReceived', 'processed data', processed);
          if (processed.unused && processed.unused.length > 0) {
            scope._debug('onResponseReceived', 'saving unused to pool', processed.unused.length, processed.unused);
            for (let i = 0; i < processed.unused.length; i++) {
              scope._state.pool.push(processed.unused[i]);
            }
          }
        }
        catch (processErr) {
          callback(processErr);
          return;
        }
        if (scope._options.mock) {
          scope._debug('onResponseReceived', 'mock enabled, skipping append');
        }
        else {
          try {
            scope._renderData(processed.items);
          }
          catch (renderErr) {
            callback(renderErr);
            return;
          }
        }
        callback(null);
      });
    }
  };
  Instafeed.prototype._processData = function processData (data) {
    const hasTransform = typeof this._options.transform === 'function';
    const hasFilter = typeof this._options.filter === 'function';
    const hasSort = typeof this._options.sort === 'function';
    const hasLimit = typeof this._options.limit === 'number';
    const transformedFiltered = [];
    let limitDelta = null;
    let dataItem = null;
    let transformedItem = null;
    let filterResult = null;
    let unusedItems = null;
    this._debug('processData', 'hasFilter', hasFilter, 'hasTransform', hasTransform, 'hasSort', hasSort, 'hasLimit', hasLimit);
    if (typeof data !== 'object' || typeof data.data !== 'object' || data.data.length <= 0) {
      return null;
    }
    for (let i = 0; i < data.data.length; i++) {
      dataItem = this._getItemData(data.data[i]);
      if (hasTransform) {
        try {
          transformedItem = this._options.transform(dataItem);
          this._debug('processData', 'transformed item', dataItem, transformedItem);
        }
        catch (err) {
          this._debug('processData', 'error calling transform', err);
          throw new Error('error in transform: ' + err.message);
        }
      }
      else {
        transformedItem = dataItem;
      }
      if (hasFilter) {
        try {
          filterResult = this._options.filter(transformedItem);
          this._debug('processData', 'filter item result', transformedItem, filterResult);
        }
        catch (err) {
          this._debug('processData', 'error calling filter', err);
          throw new Error('error in filter: ' + err.message);
        }
        if (filterResult) {
          transformedFiltered.push(transformedItem);
        }
      }
      else {
        transformedFiltered.push(transformedItem);
      }
    }
    if (hasSort) {
      try {
        transformedFiltered.sort(this._options.sort);
      }
      catch (err) {
        this._debug('processData', 'error calling sort', err);
        throw new Error('error in sort: ' + err.message);
      }
    }
    if (hasLimit) {
      limitDelta = transformedFiltered.length - this._options.limit;
      this._debug('processData', 'checking limit', transformedFiltered.length, this._options.limit, limitDelta);
      if (limitDelta > 0) {
        unusedItems = transformedFiltered.slice(transformedFiltered.length - limitDelta);
        this._debug('processData', 'unusedItems', unusedItems.length, unusedItems);
        transformedFiltered.splice(transformedFiltered.length - limitDelta, limitDelta);
      }
    }
    return {
      items: transformedFiltered,
      unused: unusedItems,
    };
  };
  Instafeed.prototype._extractTags = function extractTags (str) {
    const exp = /#([^\s]+)/gi;
    const badChars = /[~`!@#$%^&*\(\)\-\+={}\[\]:;"'<>\?,\./|\\\s]+/i;
    const tags = [];
    let match = null;
    if (typeof str === 'string') {
      while ((match = exp.exec(str)) !== null) {
        if (badChars.test(match[1]) === false) {
          tags.push(match[1]);
        }
      }
    }
    return tags;
  };
  Instafeed.prototype._getItemData = function getItemData (data) {
    let type = null;
    let image = null;
    switch (data.media_type) {
      case 'IMAGE':
        type = 'image';
        image = data.media_url;
        break;

      case 'VIDEO':
        type = 'video';
        image = data.thumbnail_url;
        break;

      case 'CAROUSEL_ALBUM':
        type = 'album';
        image = data.media_url;
        break;
    }
    return {
      caption: data.caption,
      tags: this._extractTags(data.caption),
      id: data.id,
      image: image,
      link: data.permalink,
      model: data,
      timestamp: data.timestamp,
      type: type,
      username: data.username,
    };
  };
  Instafeed.prototype._renderData = function renderData (items) {
    const hasTemplate = typeof this._options.template === 'string';
    const hasRender = typeof this._options.render === 'function';
    let item = null;
    let itemHtml = null;
    let container = null;
    let html = '';
    this._debug('renderData', 'hasTemplate', hasTemplate, 'hasRender', hasRender);
    if (typeof items !== 'object' || items.length <= 0) {
      return;
    }
    for (let i = 0; i < items.length; i++) {
      item = items[i];
      if (hasRender) {
        try {
          itemHtml = this._options.render(item, this._options);
          this._debug('renderData', 'custom render result', item, itemHtml);
        }
        catch (err) {
          this._debug('renderData', 'error calling render', err);
          throw new Error('error in render: ' + err.message);
        }
      }
      else if (hasTemplate) {
        itemHtml = this._basicRender(item);
      }
      if (itemHtml) {
        html = html + itemHtml;
      }
      else {
        this._debug('renderData', 'render item did not return any content', item);
      }
    }
    this._debug('renderData', 'html content', html);
    container = document.createElement('div');
    container.innerHTML = html;
    this._debug('renderData', 'container', container, container.childNodes.length, container.childNodes);
    while (container.childNodes.length > 0) {
      this._debug('renderData', 'appending child', container.childNodes[0]);
      this._state.node.appendChild(container.childNodes[0]);
    }
  };
  Instafeed.prototype._basicRender = function basicRender (data) {
    const exp = new RegExp(this._options.templateBoundaries[0] + '([\\s\\w.]+)' + this._options.templateBoundaries[1], 'gm');
    const template = this._options.template;
    let match = null;
    let output = '';
    let substr = null;
    let lastIndex = 0;
    let keyPath = null;
    let keyPathValue = null;
    while ((match = exp.exec(template)) !== null) {
      keyPath = match[1];
      substr = template.slice(lastIndex, match.index);
      output = output + substr;
      keyPathValue = this._valueForKeyPath(keyPath, data);
      if (keyPathValue) {
        output = output + keyPathValue.toString();
      }
      lastIndex = exp.lastIndex;
    }
    if (lastIndex < template.length) {
      substr = template.slice(lastIndex, template.length);
      output = output + substr;
    }
    return output;
  };
  Instafeed.prototype._valueForKeyPath = function valueForKeyPath (keyPath, data) {
    const exp = /([\w]+)/gm;
    let match = null;
    let key = null;
    let lastValue = data;
    while ((match = exp.exec(keyPath)) !== null) {
      if (typeof lastValue !== 'object') {
        return null;
      }
      key = match[1];
      lastValue = lastValue[key];
    }
    return lastValue;
  };
  Instafeed.prototype._fail = function fail (err) {
    const didHook = this._runHook('error', err);
    if (!didHook && console && typeof console.error === 'function') {
      console.error(err);
    }
    this._state.running = false;
  };
  Instafeed.prototype._start = function start () {
    this._state.running = true;
    this._runHook('before');
  };
  Instafeed.prototype._finish = function finish () {
    this._runHook('after');
    this._state.running = false;
  };
  Instafeed.prototype._success = function success (data) {
    this._runHook('success', data);
    this._state.running = false;
  };
  Instafeed.prototype._makeApiRequest = function makeApiRequest (url, callback) {
    let called = false;
    const scope = this;
    let apiRequest = null;
    const callbackOnce = function callbackOnce (err, value) {
      if (!called) {
        called = true;
        callback(err, value);
      }
    };
    apiRequest = new XMLHttpRequest();
    apiRequest.ontimeout = function apiRequestTimedOut () {
      callbackOnce(new Error('api request timed out'));
    };
    apiRequest.onerror = function apiRequestOnError () {
      callbackOnce(new Error('api connection error'));
    };
    apiRequest.onload = function apiRequestOnLoad (event) {
      const contentType = apiRequest.getResponseHeader('Content-Type');
      let responseJson = null;
      scope._debug('apiRequestOnLoad', 'loaded', event);
      scope._debug('apiRequestOnLoad', 'response status', apiRequest.status);
      scope._debug('apiRequestOnLoad', 'response content type', contentType);
      if (contentType.indexOf('application/json') >= 0) {
        try {
          responseJson = JSON.parse(apiRequest.responseText);
        }
        catch (err) {
          scope._debug('apiRequestOnLoad', 'json parsing error', err, apiRequest.responseText);
          callbackOnce(new Error('error parsing response json'));
          return;
        }
      }
      if (apiRequest.status !== 200) {
        if (responseJson && responseJson.error) {
          callbackOnce(new Error(responseJson.error.code + ' ' + responseJson.error.message));
        }
        else {
          callbackOnce(new Error('status code ' + apiRequest.status));
        }
        return;
      }
      callbackOnce(null, responseJson);
    };
    apiRequest.open('GET', url, true);
    apiRequest.timeout = this._options.apiTimeout;
    apiRequest.send();
  };
  Instafeed.prototype._getAccessToken = function getAccessToken (callback) {
    let called = false;
    const scope = this;
    let timeoutCheck = null;
    const callbackOnce = function callbackOnce (err, value) {
      if (!called) {
        called = true;
        clearTimeout(timeoutCheck);
        callback(err, value);
      }
    };
    if (typeof this._options.accessToken === 'function') {
      this._debug('getAccessToken', 'calling accessToken as function');
      timeoutCheck = setTimeout(function accessTokenTimeoutCheck () {
        scope._debug('getAccessToken', 'timeout check', called);
        callbackOnce(new Error('accessToken timed out'), null);
      }, this._options.accessTokenTimeout);
      try {
        this._options.accessToken(function accessTokenReceiver (err, value) {
          scope._debug('getAccessToken', 'received accessToken callback', called, err, value);
          callbackOnce(err, value);
        });
      }
      catch (err) {
        this._debug('getAccessToken', 'error invoking the accessToken as function', err);
        callbackOnce(err, null);
      }
    }
    else {
      this._debug('getAccessToken', 'treating accessToken as static', typeof this._options.accessToken);
      callbackOnce(null, this._options.accessToken);
    }
  };
  Instafeed.prototype._debug = function debug () {
    let args = null;
    if (this._options.debug && console && typeof console.log === 'function') {
      args = [].slice.call(arguments);
      args[0] = '[Instafeed] [' + args[0] + ']';
      console.log.apply(null, args);
    }
  };
  Instafeed.prototype._runHook = function runHook (hookName, data) {
    let success = false;
    if (typeof this._options[hookName] === 'function') {
      try {
        this._options[hookName](data);
        success = true;
      }
      catch (err) {
        this._debug('runHook', 'error calling hook', hookName, err);
      }
    }
    return success;
  };

  
 


    
  
  
  const newAPIcall = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const apiToken = JSON.parse(this.responseText).access_token;
        // Put the object into storage
        localStorage.setItem('fbapiToken-additive', JSON.stringify(apiToken));
      }
    };
    xhttp.open('GET', 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=IGQVJVLVFDVE5RUVczTnl6Y1d3cHlCb2ZAxQVppcUNVMUkwUEdSNDUzaElfSC0ybS1yT05Ja2xCN3dFY29FTk14azN1azlRbU11bFU2SE5oSU1kVXQ2RGU3TUZANLXRVd0w1TWlqNlBYQ1NndllXUjJaVAZDZD', true);
    xhttp.send();
  };

  const changedToken = () => {
    
    if(localStorage.getItem('fbapiToken-additive')) {
      // Retrieve the object from storage
      const refreshedToken = localStorage.getItem('fbapiToken-additive');
      const feed = new Instafeed({
        accessToken: JSON.parse(refreshedToken),
      });
      if(document.querySelector('#instafeed-additive')) {
        feed.run();
        // const listItems = document.getElementById('instafeed').children;
        const instafeedDIV = document.getElementById('instafeed-additive');
        while (instafeedDIV.hasChildNodes()) {
          instafeedDIV.removeChild(instafeedDIV.lastChild);
        }
      }
      
      return Instafeed;
    }

  };
  if(!(localStorage.getItem('fbapiToken-additive'))) {
    newAPIcall();
  }
  setTimeout(() => {
    changedToken();
  }, 1000);

  setInterval(() => {
    newAPIcall();
    changedToken();
  }, 86500000);

});

/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-additive-instagram-feed.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-content-left-right-variant-1-with-carousel.js. */
// GE Content Left Right Variant 1 With Carousel Script
let carouselElm = document.querySelectorAll('.wp-block-custom-ge-content-left-right-variant-1-with-carousel');
if (carouselElm.length) {
    carouselLR(carouselElm, false);

    window.addEventListener('resize', function (event) {
        carouselLR(carouselElm, true);
    });

    function carouselLR(element, resizeboolean) {
        let carouselElement = element;
        let resizeBooleanValue = resizeboolean;

        // script for checking how many time gblox use in page
        for (let carouselItem = 0; carouselItem < carouselElement.length; carouselItem++) {

            let contentElm = carouselElement[carouselItem].querySelectorAll('.wp-block-custom-ge-carousel-cantent');
            let dotActiveBgClr, dotBgClr;

            dotActiveBgClr = carouselElement[carouselItem].querySelector('.carousel-nav-dots .dot--icon.active').style.backgroundColor;
            dotBgClr = carouselElement[carouselItem].querySelector('.carousel-nav-dots .dot--icon.inactive').style.backgroundColor;
            if (!resizeBooleanValue) {
                carouselElement[carouselItem].querySelector('.carousel-nav-dots').innerHTML = '';
                carouselElement[carouselItem].querySelector('.image-carousel-container').innerHTML = '';
            }

            // script for update slides and dots
            let activeClass;
            for (let slideItem = 0; slideItem < contentElm.length; slideItem++) {

                let $parentContainer = contentElm[slideItem].closest('.wp-block-custom-ge-content-left-right-variant-1-with-carousel');
                (slideItem === 0) ? activeClass = "active" : activeClass = 'inactive';

                let slideImge = contentElm[slideItem].querySelector('.lr-img-section').innerHTML;
                contentElm[slideItem].setAttribute('data-slide-no', 'slide-' + slideItem);
                contentElm[slideItem].classList.add(activeClass)

                $parentContainer.querySelector('.carousel-nav-dots').setAttribute('data-bg', dotBgClr)
                $parentContainer.querySelector('.carousel-nav-dots').setAttribute('data-active-bg', dotActiveBgClr)

                if (!resizeBooleanValue) {
                    // dot element
                    let dotElement = document.createElement("i");
                    dotElement.className = "dot--icon " + activeClass;
                    dotElement.setAttribute("data-dot-no", "slide-" + slideItem);
                    dotElement.style.backgroundColor = dotBgClr;
                    $parentContainer.querySelector('.carousel-nav-dots').appendChild(dotElement);

                    // img element
                    let imgElement = document.createElement("div");
                    imgElement.className = "lr-image-carousel-item  " + activeClass;
                    imgElement.setAttribute("data-img-no", "slide-" + slideItem);
                    imgElement.style.backgroundColor = dotBgClr;
                    imgElement.innerHTML = slideImge;

                    $parentContainer.querySelector('.image-carousel-container').appendChild(imgElement);
                }
                
                if (resizeBooleanValue) {
                    $parentContainer.querySelectorAll('.wp-block-custom-ge-carousel-cantent').forEach(elm => {
                        elm.getAttribute('data-slide-no') === 'slide-0' ? elm.classList.add('active') : elm.classList.remove('active');

                    });
                    $parentContainer.querySelectorAll('.lr-image-carousel-item').forEach(elm => {
                        elm.getAttribute('data-img-no') === 'slide-0' ? elm.classList.add('active') : elm.classList.remove('active');

                    });
                    $parentContainer.querySelectorAll('.carousel-nav-dots .dot--icon').forEach(elm => {
                        elm.getAttribute('data-dot-no') === 'slide-0' ? elm.classList.add('active') : elm.classList.remove('active');
                        elm.getAttribute('data-dot-no') === 'slide-0' ? elm.style.backgroundColor = dotActiveBgClr : elm.style.backgroundColor = dotBgClr;;

                    });
                }

                contentElm[slideItem].querySelector('.lr-img-section').innerHTML;

            }

            carouselElement[carouselItem].querySelector('.carousel-nav-dots .dot--icon.active').style.backgroundColor = dotActiveBgClr;

            // content script
            let ContentWidth = contentElm[0].offsetWidth;
            let totalSlide = contentElm.length;
            let contDivWidth = ContentWidth * totalSlide;
            carouselElement[carouselItem].querySelector('.carousel-items').setAttribute('style', 'opacity: 1; width:' + contDivWidth + 'px; transform: translate3d(0px, 0px, 0px);transition: transform 300ms ease 0s;');

            // image script
            let imgElm = carouselElement[carouselItem].querySelector('.lr-image-carousel-item');

            let imageStyle = getComputedStyle(imgElm);
            let imageWidth = parseFloat(imageStyle.maxWidth)
            let imgContWidth = imageWidth * totalSlide;
            carouselElement[carouselItem].querySelector('.image-carousel-container').setAttribute('style', 'opacity: 1; width:' + imgContWidth + 'px; transform: translate3d(0px, 0px, 0px);transition: transform 300ms ease 0s;');

            // dot script
            let dotElm = carouselElement[carouselItem].querySelector('.dot--icon');
            let dotElmLength = carouselElement[carouselItem].querySelectorAll('.dot--icon').length;
            let dotStyle = getComputedStyle(dotElm);
            let dotTotalElmWidth = dotElm.offsetWidth + parseFloat(dotStyle.marginLeft) + parseFloat(dotStyle.marginRight);
            let dotContElmWidth = dotTotalElmWidth * dotElmLength;
            carouselElement[carouselItem].querySelector('.carousel-nav-dots').setAttribute('style', 'width:' + dotContElmWidth + 'px; transform: translate3d(0px, 0px, 0px);transition: transform 300ms ease 0s;');


            hideArrowLR(carouselElement[carouselItem].querySelector('.wp-block-custom-ge-carousel-cantent'));
        }


    }

    // dot click
    let dotClick = document.querySelectorAll(".carousel-nav-dots .dot--icon");
    for (let dotClickItem = 0; dotClickItem < dotClick.length; dotClickItem++) {
        dotClick[dotClickItem].addEventListener("click", function (event) {

            const getNodeindex = elm => [...elm.parentNode.children].indexOf(elm)

            let ActiveSlide = this.getAttribute('data-dot-no')
            let $parentContainer = this.closest('.wp-block-custom-ge-content-left-right-variant-1-with-carousel');
            let slideActive = $parentContainer.querySelector('.wp-block-custom-ge-carousel-cantent.active');
            let ActiveSlideIndex = getNodeindex(slideActive);

            let dotActiveBgClr = $parentContainer.querySelector('.carousel-nav-dots').getAttribute('data-active-bg');
            let dotBgClr = $parentContainer.querySelector('.carousel-nav-dots').getAttribute('data-bg');

            if (this.classList.contains('active')) {
                return false
            } else {
                let dotElements = $parentContainer.querySelectorAll('.dot--icon');
                dotElements.forEach(elm => {
                    elm.classList.remove('active');
                });
                let contentElements = $parentContainer.querySelectorAll('.wp-block-custom-ge-carousel-cantent');
                contentElements.forEach(elm => { elm.classList.remove('active'); });
                let imgElements = $parentContainer.querySelectorAll('.lr-image-carousel-item');
                imgElements.forEach(elm => { elm.classList.remove('active'); });

                this.classList.add('active');

                let dotBGClr = $parentContainer.querySelectorAll('.carousel-nav-dots .dot--icon')
                dotBGClr.forEach(elm => { elm.style.backgroundColor = dotBgClr;; });

                $parentContainer.querySelector('.carousel-nav-dots .dot--icon.active').style.backgroundColor = dotActiveBgClr;

                $parentContainer.querySelector('[data-img-no="' + ActiveSlide + '"]').classList.add('active');
                $parentContainer.querySelector('[data-slide-no="' + ActiveSlide + '"]').classList.add('active');

                // content slide script
                let slideWidth = $parentContainer.querySelector('.wp-block-custom-ge-carousel-cantent').offsetWidth;
                let contentActive = $parentContainer.querySelector('.wp-block-custom-ge-carousel-cantent.active');
                let newActiveSlideIndexNo = getNodeindex(contentActive);
                let selectedSlidePos = -(newActiveSlideIndexNo * slideWidth);

                $parentContainer.querySelector('.carousel-items').style.transform = 'translate3d(' + selectedSlidePos + 'px, 0px, 0px)';

                // image slide script
                let imgSlideelm = $parentContainer.querySelector('.lr-image-carousel-item');
                let imageStyle = getComputedStyle(imgSlideelm);
                let imgSlideWidth = parseFloat(imageStyle.maxWidth)
                let selectedImgSlidePos = -(newActiveSlideIndexNo * imgSlideWidth);
                $parentContainer.querySelector('.image-carousel-container').style.transform = 'translate3d(' + selectedImgSlidePos + 'px, 0px, 0px)';

                // dots slide script
                let dotElm = $parentContainer.querySelector('.dot--icon');
                let dotStyle = getComputedStyle(dotElm);
                let dotTotalElmWidth = dotElm.offsetWidth + parseFloat(dotStyle.marginLeft) + parseFloat(dotStyle.marginRight);

                if (dotElements.length > 7) {
                    let hidedots, dotpos;
                    if (ActiveSlideIndex < newActiveSlideIndexNo && newActiveSlideIndexNo >= 5 && newActiveSlideIndexNo < dotElements.length) {
                        hidedots = newActiveSlideIndexNo - 4;

                        if (newActiveSlideIndexNo > dotElements.length - 3) {
                            if (newActiveSlideIndexNo !== dotElements.length - 1) {
                                dotpos = -(dotTotalElmWidth * (hidedots - 1));
                            }
                            else {
                                dotpos = -(dotTotalElmWidth * (hidedots - 2));
                            }
                        } else {
                            dotpos = -(dotTotalElmWidth * hidedots);
                        }
                        $parentContainer.querySelector('.carousel-nav-dots').style.transform = 'translate3d(' + dotpos + 'px, 0px, 0px)';

                    } else if (ActiveSlideIndex > newActiveSlideIndexNo && newActiveSlideIndexNo < dotElements.length - 6) {

                        if (newActiveSlideIndexNo === dotElements.length - 7 && ActiveSlideIndex == dotElements.length - 1) {
                            if (newActiveSlideIndexNo <= 4 && ActiveSlideIndex <= 4) {
                                hidedots = newActiveSlideIndexNo - (newActiveSlideIndexNo - 1);
                            }
                            else {
                                hidedots = newActiveSlideIndexNo - (newActiveSlideIndexNo - 1);
                            }

                        }
                        else if (ActiveSlideIndex <= 4 || newActiveSlideIndexNo <= 4) {
                            hidedots = 1;
                        }

                        else {
                            hidedots = newActiveSlideIndexNo - 4;
                        }
                        (hidedots === 1) ? dotpos = 0 : dotpos = -(dotTotalElmWidth * hidedots);

                        $parentContainer.querySelector('.carousel-nav-dots').style.transform = 'translate3d(' + dotpos + 'px, 0px, 0px)';

                    }

                }
                // else {
                //     return false
                // }

            }

            hideArrowLR(this);

        });
    }

    // arrow click 
    let arrowClick = document.querySelectorAll('.carousel-nav-container .carousel-nav-arrow');
    for (let arrowClickItem = 0; arrowClickItem < arrowClick.length; arrowClickItem++) {
        arrowClick[arrowClickItem].addEventListener("click", function (event) {
            const getNodeindex = elm => [...elm.parentNode.children].indexOf(elm)

            let $parentContainer = this.closest('.wp-block-custom-ge-content-left-right-variant-1-with-carousel');
            let ActiveSlide = $parentContainer.querySelector('.carousel-nav-dots .dot--icon.active').getAttribute('data-dot-no');
            let slideActive = $parentContainer.querySelector('.wp-block-custom-ge-carousel-cantent.active');
            let ActiveSlideIndex = getNodeindex(slideActive);

            let ActiveSlideArr = ActiveSlide.split('-');
            let slideNo = parseInt(ActiveSlideArr[1]);
            let dotActiveBgClr = $parentContainer.querySelector('.carousel-nav-dots').getAttribute('data-active-bg');
            let dotBgClr = $parentContainer.querySelector('.carousel-nav-dots').getAttribute('data-bg');

            $parentContainer.querySelector('.carousel-nav-dots .dot--icon').style.backgroundColor = dotBgClr;
            (this.classList.contains('carousel-next-arrow')) ? slideNo++ : slideNo--;

            let updatedSlideNo = "slide-" + slideNo;

            let dotElements = $parentContainer.querySelectorAll('.dot--icon');
            dotElements.forEach(elm => {
                elm.classList.remove('active');
            });
            let contentElements = $parentContainer.querySelectorAll('.wp-block-custom-ge-carousel-cantent');
            contentElements.forEach(elm => {
                elm.classList.remove('active');
            });
            let imgElements = $parentContainer.querySelectorAll('.lr-image-carousel-item');
            imgElements.forEach(elm => {
                elm.classList.remove('active');
            });

            let dotBGClr = $parentContainer.querySelectorAll('.carousel-nav-dots .dot--icon')
            dotBGClr.forEach(elm => { elm.style.backgroundColor = dotBgClr;; });

            $parentContainer.querySelector('[data-img-no="' + updatedSlideNo + '"]').classList.add('active');
            $parentContainer.querySelector('[data-slide-no="' + updatedSlideNo + '"]').classList.add('active');
            $parentContainer.querySelector('[data-dot-no="' + updatedSlideNo + '"]').classList.add('active');
            $parentContainer.querySelector('[data-dot-no="' + updatedSlideNo + '"]').style.backgroundColor = dotActiveBgClr;;


            let slideWidth = $parentContainer.querySelector('.wp-block-custom-ge-carousel-cantent').offsetWidth;
            let selectedSlidePos = - (slideNo * slideWidth);

            $parentContainer.querySelector('.carousel-items').style.transform = 'translate3d(' + selectedSlidePos + 'px, 0px, 0px)';

            // image slide script
            let imgSlideelm = $parentContainer.querySelector('.lr-image-carousel-item');
            let imageStyle = getComputedStyle(imgSlideelm);
            let imgSlideWidth = parseFloat(imageStyle.maxWidth);
            let selectedImgSlidePos = - (slideNo * imgSlideWidth);
            $parentContainer.querySelector('.image-carousel-container').style.transform = 'translate3d(' + selectedImgSlidePos + 'px, 0px, 0px)';

            // dots slide script
            let dotElm = $parentContainer.querySelector('.dot--icon');
            let dotStyle = getComputedStyle(dotElm);
            let dotTotalElmWidth = dotElm.offsetWidth + parseFloat(dotStyle.marginLeft) + parseFloat(dotStyle.marginRight);


            if (dotElements.length > 7) {
                let hidedots, dotpos;
                if (slideNo > ActiveSlideIndex && slideNo >= 5 && slideNo < dotElements.length - 2) {
                    hidedots = slideNo - 4;
                    dotpos = - (dotTotalElmWidth * hidedots);
                    $parentContainer.querySelector('.carousel-nav-dots').style.transform = 'translate3d(' + dotpos + 'px, 0px, 0px)';
                }
                else if (slideNo < ActiveSlideIndex && slideNo >= 4 && slideNo < dotElements.length - 4) {
                    hidedots = slideNo - 4;
                    (hidedots === 1) ? dotpos = 0 : dotpos = - (dotTotalElmWidth * hidedots);

                    $parentContainer.querySelector('.carousel-nav-dots').style.transform = 'translate3d(' + dotpos + 'px, 0px, 0px)';
                }

            }
            // else {
            //     return false
            // }

            hideArrowLR(this);

        })
    }

    // Hide & show Arrow 
    function hideArrowLR(elem) {
        let $thisArrow = elem.closest('.wp-block-custom-ge-content-left-right-variant-1-with-carousel');
        let slideCount = $thisArrow.querySelectorAll('.wp-block-custom-ge-carousel-cantent');
        // if (slideCount.length <= 1) {
        //     let arrowHide = $thisArrow.querySelectorAll('.carousel-nav-arrow');
        //     arrowHide.forEach(elm => { elm.style.display = 'none'; });
        //     return
        // }
        if ($thisArrow.querySelector('.wp-block-custom-ge-carousel-cantent:last-child').classList.contains('active')) {
            $thisArrow.querySelector('.carousel-nav-arrow.carousel-next-arrow').classList.add('disabled');
        } else {
            $thisArrow.querySelector('.carousel-nav-arrow.carousel-next-arrow').classList.remove('disabled');
        }
        if ($thisArrow.querySelector('.wp-block-custom-ge-carousel-cantent:first-child').classList.contains('active')) {
            $thisArrow.querySelector('.carousel-nav-arrow.carousel-prev-arrow').classList.add('disabled');
        } else {
            $thisArrow.querySelector('.carousel-nav-arrow.carousel-prev-arrow').classList.remove('disabled');
        }
    }

}
/* Source and licensing information for the above line(s) can be found at https://www.ge.com/modules/custom/ge_gblox/js/ge-content-left-right-variant-1-with-carousel.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.ge.com/themes/custom/ge_unified/assets/js/ge_stock_ticker.js. */
function stockResults(json){jQuery("a.ge-stock-ticker").each(function(){jQuery(this).html('GE <img src="'+drupalSettings.path.baseUrl+"themes/custom/ge_unified/assets/images/arrow-"+json.stockquotes.arrow+'.png" alt="Arrow '+json.stockquotes.arrow+'" width="11" height="8"> <span class="stock-ticker__status">'+json.stockquotes.CurrentPrice+"</span>")})}jQuery(document).ready(function(){jQuery.ajax({url:"https://qfx.tools.investis.com/clients/us/general-electric/xml/xml_full.aspx?format=json",dataType:"jsonp",jsonpCallback:"stockResults"})});
/* Source and licensing information for the above line(s) can be found at https://www.ge.com/themes/custom/ge_unified/assets/js/ge_stock_ticker.js. */;
