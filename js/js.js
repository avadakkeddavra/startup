$(document).ready(function(){
    var width = $(window).width();
    if(width >= 1200 ){
        $('#testimonials_slider').slick({
            arrows:true,
            slidesToShow:1,
            slidesToScroll:1,
            dots:true,
            prevArrow:'<button type="button" class="slick-prev fa fa-angle-left"><i class="fa fa-angle-left"></i></button>',
            nextArrow:'<button type="button" class="slick-next fa fa-angle-left"><i class="fa fa-angle-right"></i></button>',
        })
    }else{
        $('#testimonials_slider').slick({
            arrows:false,
            slidesToShow:1,
            slidesToScroll:1,
            dots:true,
            prevArrow:'<button type="button" class="slick-prev fa fa-angle-left"><i class="fa fa-angle-left"></i></button>',
            nextArrow:'<button type="button" class="slick-next fa fa-angle-left"><i class="fa fa-angle-right"></i></button>',
        })
    }
})
$(document).ready(function(){
    $('.question .title').click(function(){
        
         var offset  = $(this).parent().offset().top;
        
        $('.question.active').animate({
             padding:'20px 30px',
        },200,function(){
            $('.active .answer').slideUp(200); 
            $(this).removeClass('active');
        })
        $(this).parent().children('.answer').slideToggle(200,function(){
            if($(this).is(':visible')){
                $(this).parent().animate({
                    padding:'50px 30px',
                    background:'#fff',
                },200,function(){
                    $('body,html').animate({
                        scrollTop: offset,
                    },400)
                });
                $(this).parent().addClass('active');
               
                
            }else{
                    $(this).parent().animate({
                        padding:'20px 30px',
                         
                    },200)
                $(this).parent().removeClass('active');
                }
            
        });
    })
})
$(document).ready(function(){
    var width = $(window).width();
    $('#show_menu').click(function(){
        if($('.menu').is(":hidden")){
           $('.menu').slideDown(200);
            $('.menu').animate({
                    right:0,
                    opacity:1
            },200); 
            
            $('body').stop().animate({
                width: (width-300)+'px',
                
            },500);
        }else{
            $('body').stop().animate({
                width: (width)+'px',
                
            },400);
            $('.menu').stop().animate({
                    right:'-300px',
                    opacity:0,
            },200,function(){
                $(this).slideUp();
            }); 
        }
        
    })
})