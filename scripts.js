
//SCROLL DOWN FUNKTION

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 30) {
                $("nav").addClass("scrolling"),
                    $(".logo").addClass("scrollinglogo");
            } else {
                $("nav").removeClass("scrolling"),
                    $(".logo").removeClass("scrollinglogo");
            }
        });

  //SLIDESHOW 1 BILLEDE 
        $(document).on('ready', function() {

            $(".lazy").slick({
                lazyLoad: 'ondemand',
                infinite: true,
                dots: true,
            });
        });

        $(document).on('ready', function() {

            $(".lazy1").slick({
                lazyLoad: 'ondemand',
                infinite: true,
                dots: true,
            });
        });

// CAROUSEL SLIDESHOW TIL DESKTOP
        $(document).on('ready', function() {

            $(".regular").slick({
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
            });
        });

 //CAROUSEL SLIDESHOW TIL MOBIL 

        $(document).on('ready', function() {

            $(".regular1").slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });



        $(function() {
            $('.menu-ac').click(function() {
                $(this).next('.ac').slideToggle(500);
            });
            $('.fa-search').click(function() {
                $(".search").animate({
                    width: "toggle"
                });
            });
        });

   //SMOOTH SCROLL TIL MENU OG PILEN 

        $(document).ready(function() {
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').animate({
                    'scrollTop': $target.offset().top
                }, 1000, 'swing');
            });
        });
