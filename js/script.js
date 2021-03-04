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


    // Scroll para link interno

    let navBtn = $('.nav-item');

    let bannerSection = $('#home');
    let sobreSection = $('#sobre-area');
    let especialidadesSection = $('#especialidades-area');
    let cardapioSection = $('#cardapio-area');
    let contatoSection = $('#contato-area');

    let scrollTo = '';

    $(navBtn).click(function() {

        let btnId = $(this).attr('id');

        if(btnId == 'sobre-menu') {
            scrollTo = sobreSection;
        } else if(btnId == 'especialidades-menu') {
            scrollTo = especialidadesSection;
        } else if(btnId == 'cardapio-menu') {
            scrollTo = cardapioSection;
        } else if(btnId == 'contato-menu') {
            scrollTo = contatoSection;
        } else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);


    });

});