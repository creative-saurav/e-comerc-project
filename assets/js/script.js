$("document").ready(function(){

    $(".mobile-icon").click(function(){
        $(".primary-menu").addClass("open");
        $(this).hide();
        $(".crose-icon").show();
    })
    $(".crose-icon").click(function(){
        $(".primary-menu").removeClass("open");
        $(this).hide();
        $(".mobile-icon").show();
    })

   // Header top 
   $('.slider-top-content').owlCarousel({
    center: true,
    items:4,
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    navText:false,
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        767:{
            items:3,
        },
        992:{
            items:4,
        }
    }   
})
// Arrival Product
$('.arrival-product').owlCarousel({
    items:4,
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
    navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>'],
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        767:{
            items:3,
        },
        992:{
            items:4,
        }
    }   
})

// T-shirt Product
$('.t-short-product').owlCarousel({
    items:3,
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
    navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>'],
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        767:{
            items:3,
        },
        992:{
            items:3,
        }
    }   
})

});



