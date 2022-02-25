jQuery(document).ready(function($) {
    "use strict";
    // Carrosel das fotos
    $('#id-fotos').owlCarousel({
        loop:true,
        center:true,
        itens:3,
        margin:0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1170:{
                items:3
            }
        }
    });
});

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })