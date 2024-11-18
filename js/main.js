

(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });
    
    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if($('.top-bar').length > 0) {
        var posWrapHeader = $('.top-bar').height();
    }
    else {
        var posWrapHeader = 0;
    }
    

    if($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top',0); 
    }  
    else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
    }

    $(window).on('scroll',function(){
        if($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0); 
        }  
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
        } 
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){
            if($('.menu-mobile').css('display') == 'block') {
                $('.menu-mobile').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }

            $('.sub-menu-m').each(function(){
                if($(this).css('display') == 'block') { console.log('hello');
                    $(this).css('display','none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });
                
        }
    });


    /*==================================================================
    [ Show / hide modal search ]*/
    $('.js-show-modal-search').on('click', function(){
        $('.modal-search-header').addClass('show-modal-search');
        $(this).css('opacity','0');
    });

    $('.js-hide-modal-search').on('click', function(){
        $('.modal-search-header').removeClass('show-modal-search');
        $('.js-show-modal-search').css('opacity','1');
    });

    $('.container-search-header').on('click', function(e){
        e.stopPropagation();
    });


    /*==================================================================
    [ Isotope ]*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');
    
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });
        
    });

    $(window).on('load', function () {
        // Initialize Isotope
        var $grid = $('.isotope-grid').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
            percentPosition: true,
            animationEngine: 'best-available',
            masonry: {
                columnWidth: '.isotope-item'
            }
        });
    
        // Get the filter from the URL parameter
        var filter = getUrlParameter('filter');
        if (filter) {
            // Use Isotope to filter based on URL parameter
            $grid.isotope({ filter: '.' + filter });
    
            // Set the active button based on the URL filter
            var activeButton = document.querySelector(`button[data-filter=".${filter}"]`);
            if (activeButton) {
                activeButton.classList.add('how-active1');
            }
            var allButton = document.querySelector('button[data-filter="*"]');
            if (allButton) {
                allButton.classList.remove('how-active1');
            }
        }
        else{
            var allButton = document.querySelector('button[data-filter="*"]');
            if (allButton) {
                allButton.classList.add('how-active1');
            }
        }
    
        // Set up filter button click event
        $('.filter-tope-group button').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
    
            // Highlight the active filter button
            $('.filter-tope-group button').removeClass('how-active1');
            $(this).addClass('how-active1');
        });
    });
    
    var isotopeButton = $('.filter-tope-group button');

    $(isotopeButton).each(function(){
        $(this).on('click', function(){
            for(var i=0; i<isotopeButton.length; i++) {
                $(isotopeButton[i]).removeClass('how-active1');
            }

            $(this).addClass('how-active1');
        });
    });

    /*==================================================================
    [ Filter / Search product ]*/
    $('.js-show-filter').on('click',function(){
        $(this).toggleClass('show-filter');
        $('.panel-filter').slideToggle(400);

        if($('.js-show-search').hasClass('show-search')) {
            $('.js-show-search').removeClass('show-search');
            $('.panel-search').slideUp(400);
        }    
    });

    $('.js-show-search').on('click',function(){
        $(this).toggleClass('show-search');
        $('.panel-search').slideToggle(400);

        if($('.js-show-filter').hasClass('show-filter')) {
            $('.js-show-filter').removeClass('show-filter');
            $('.panel-filter').slideUp(400);
        }    
    });




    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click',function(){
        $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click',function(){
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click',function(){
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click',function(){
        $('.js-sidebar').removeClass('show-sidebar');
    });

    /*==================================================================
    [ +/- num product ]*/
    $('.btn-num-product-down').on('click', function(){
        var numProduct = Number($(this).next().val());
        if(numProduct > 0) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    /*==================================================================
    [ Rating ]*/
    $('.wrap-rating').each(function(){
        var item = $(this).find('.item-rating');
        var rated = -1;
        var input = $(this).find('input');
        $(input).val(0);

        $(item).on('mouseenter', function(){
            var index = item.index(this);
            var i = 0;
            for(i=0; i<=index; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });

        $(item).on('click', function(){
            var index = item.index(this);
            rated = index;
            $(input).val(index+1);
        });

        $(this).on('mouseleave', function(){
            var i = 0;
            for(i=0; i<=rated; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });
    });
    
    /*==================================================================
    [ Show modal1 ]*/
    $('.js-show-modal1').on('click',function(e){

        var Description = [
            'Bonnet gris sidéral, alliant confort et style, parfait pour rester bien au chaud avec élégance. <br> Le logo sera brodé !',
            'Bonnet noir charbon, inspiré par la chaleur d’un feu de bois, pour un look intemporel et cosy. <br> Le logo sera brodé !',
            'Gants noirs carbone, conçus pour allier chaleur et modernité avec une touche de sophistication. <br> Nous avons enlevé les contours blancs pour faire moins effet "sticker" !',
            'Gants gris sidéral, idéaux pour protéger vos mains tout en gardant un style sobre et chic.<br> Nous avons enlevé les contours blancs pour faire moins effet "sticker" !',
            'Cache-cou blanc éclatant #FFF, douceur et chaleur réunies pour affronter les jours froids.',
            'Cache-cou noir intense #000, une protection parfaite pour rester au chaud tout en restant élégant.',
            'Cache-cou violet poulpy, une touche de couleur et de confort pour ajouter du peps à votre tenue.',
            'Lot de 4 portes dégondables, pour transformer votre espace avec praticité et élégance !'
        ];
        



        var Image = [
            'images/product-01',
            'images/product-02',
            'images/product-03',
            'images/product-04',
            'images/product-05',
            'images/product-06',
            'images/product-07',
            'images/product-08',
            'images/product-09',
            'images/product-10',
            'images/product-11',
            'images/product-12',
            'images/product-13',
            'images/product-14',
            'images/product-15',
            'images/product-16',
            'images/product-17',
            'images/product-18',
            'images/product-19',
            'images/product-20',
            'images/product-21',
        ]

        e.preventDefault();
        var id = e.currentTarget.id;
        
        console.log(id);
        $('.js-modal1').addClass('show-modal1');
        var title = document.getElementById('Title1');
        title.innerHTML=Title[id];

        var price = document.getElementById('Price0');
        price.innerHTML=Price[id];

        var description = document.getElementById('Description1');
        description.innerHTML=Description[id];

        var image = document.getElementById('Image1');
        //console.log(image);
        image.src=Image[id]+".jpg";

        var image2 = document.getElementById('Image2');
        //console.log(image2);
        //console.log(Image[parseInt(id)]+"-1.jpg");
        image2.src=Image[parseInt(id)]+"-1.jpg";

        var image3 = document.getElementById('Image3');
        //console.log(image3);
        image3.src=Image[parseInt(id)]+"-2.jpg";

        var image4 = document.getElementById('Image4');
        //console.log(image4);
        image4.src=Image[parseInt(id)]+"-3.jpg";


        var imageth1bis = document.querySelector("body > div.wrap-modal1.js-modal1.p-t-60.p-b-20.show-modal1 > div.container > div > div > div.col-md-6.col-lg-7.p-b-30 > div > div > div.wrap-slick3-dots > ul > li:nth-child(1) > img")
        var imageth1 = document.querySelector("body > div.wrap-modal1.js-modal1.p-t-60.p-b-20.show-modal1 > div.container > div > div > div.col-md-6.col-lg-7.p-b-30 > div > div > div.wrap-slick3-dots > ul > li.slick-active > img")
        imageth1.src=Image[id]+".jpg";
        imageth1bis.src=Image[id]+".jpg";

        var imageth2 = document.querySelector("body > div.wrap-modal1.js-modal1.p-t-60.p-b-20.show-modal1 > div.container > div > div > div.col-md-6.col-lg-7.p-b-30 > div > div > div.wrap-slick3-dots > ul > li:nth-child(2) > img")
        imageth2.src=Image[parseInt(id)]+"-1.jpg";

        var imageth3 = document.querySelector("body > div.wrap-modal1.js-modal1.p-t-60.p-b-20.show-modal1 > div.container > div > div > div.col-md-6.col-lg-7.p-b-30 > div > div > div.wrap-slick3-dots > ul > li:nth-child(3) > img")
        imageth3.src=Image[parseInt(id)]+"-2.jpg";

        var imageth3 = document.querySelector("body > div.wrap-modal1.js-modal1.p-t-60.p-b-20.show-modal1 > div.container > div > div > div.col-md-6.col-lg-7.p-b-30 > div > div > div.wrap-slick3-dots > ul > li:nth-child(4) > img")
        imageth3.src=Image[parseInt(id)]+"-3.jpg";

    });

    $('.js-hide-modal1').on('click',function(){
        $('.js-modal1').removeClass('show-modal1');
        //console.log("hide");
    });



})(jQuery);



var Price = [
    '13€',
    '13€',
    '11€',
    '11€',
    '10€',
    '10€',
    '10€',
    '<s>999.99€</s> 899.991€ -10%'
];

var Title = [
    'Bonnet gris sidéral',
    'Bonnet noir charbon',
    'Gants noir carbonne',
    'Gants gris métallique',
    'Cache-cou blanc #FFF',
    'Cache-cou noir #000',
    'Cache-cou violet poulpy',
    'Lot de 4 portes dégondables'
];

for (var i=1; i<=13; i++){

    //console.log("Text"+i + " ///  ")

    var text = document.getElementById("Text"+i);
    var price = document.getElementById("Price"+i);

    //console.log(text + " ///  " + price)

    text.innerHTML=Title[i-1];
    price.innerHTML=Price[i-1];
};



// Fonction pour obtenir les paramètres de l'URL
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
