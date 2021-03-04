$(document).ready(function() {
   
    (function() { 
    
        let offset = $(window).height() * 3/4; 

        function animeScroll() {
            let documentTop = $(document).scrollTop();

            $('.anime-left').each(function() {
                let top = $(this).offset().top;
                if(documentTop > top - offset) {
                    $(this).addClass('anime-start');
                } else {
                    $(this).removeClass('anime-start');
                }
            });

            $('.anime-right').each(function() {
                let top = $(this).offset().top;
                if(documentTop > top - offset) {
                    $(this).addClass('anime-start');
                } else {
                    $(this).removeClass('anime-start');
                }
            })

            console.log(documentTop + ' documento topo');
            console.log(top + ' top ');
        }


        animeScroll();

        $(document).scroll(function() {
            animeScroll();
        })

    }());

})