(function($) {
    jQuery(document).ready(function(){
        
    $('#spotlight_images').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots:false,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1200:{
                items:4,
                nav:true,
                loop:true
            }
        }
    })
        $('#youtube_carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots:false,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1200:{
                items:4,
                nav:true,
                loop:true
            }
        }
    })
    $('#talk_images').owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        dots:false,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true,
                
            },
            600:{
                items:2,
                nav:true,
                loop:true,
                
            },
            1200:{
                items:3,            
                loop:false
            }
        }
    })
        $('#otherways_images').owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        dots:false,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true,
                
            },
            600:{
                items:2,
                nav:true,
                loop:true,
                
            },
            1200:{
                items:4,  
                nav:false,
                loop:false
            }
        }
    })
        $('#sarmaya_stars_images').owlCarousel({
      loop:false,
      margin:10,
      responsiveClass:true,
      dots:false,
      nav:true,
      autoplay:true,
      responsive:{
          0:{
              items:1,
              nav:true,
              loop:true,
              
          },
          600:{
              items:2,
              nav:true,
              loop:true,
              
          },
          1200:{
              items:4,            
              loop:false
          }
      }
    })
        $('#theme_images').owlCarousel({
      loop:false,
      margin:10,
      responsiveClass:true,
      dots:false,
      nav:true,
      autoplay:true,
      responsive:{
          0:{
              items:1,
              nav:true,
              loop:true,
              
          },
          600:{
              items:2,
              nav:true,
              loop:true,
              
          },
          1200:{
              items:4,            
              loop:false
          }
      }
    })
    $('#exhibition_images').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      dots:false,
      nav:true,
      autoplay:true,
      responsive:{
          0:{
              items:1,
              nav:true,
              loop:true,
              
          },
          600:{
              items:2,
              nav:true,
              loop:true,
              
          },
          1200:{
              items:4,            
              loop:true,
          }
      }
    })
        $('#yt_plalist').owlCarousel({
      loop:false,
      margin:10,
      responsiveClass:true,
      dots:false,
      nav:true,
      autoplay:true,
      responsive:{
          0:{
              items:1,
              nav:true,
              loop:true,
              
          },
          600:{
              items:2,
              nav:true,
              loop:true,
              
          },
          1200:{
              items:4,            
              loop:false
          }
      }
    })
    $('#sticky_slider').owlCarousel({
      loop:false,
      margin:0,
      responsiveClass:true,
      dots:false,
      nav:true,
      loop:true,
      autoplay:true,
      responsive:{
          0:{
              items:1,
              
          },
          600:{
              items:1,
              
          },
          1200:{
              items:1,   
          }
      }
    })
    });
        }) (jQuery);
    AOS.init();
    
    jQuery(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
    
            jQuery("header").addClass("bg_white");
            
        } else {
            jQuery("header").removeClass("bg_white");
        }
    });
    
    // $(document).ready(function(){
    //     var placeHolder = ['Search Sarmaya','Search mughal coin','Search albumen print','Search devdutt pattanaik', 'Search 1851'];
    //     var n=0;
    //     var loopLength=placeHolder.length;
    
    //     setInterval(function(){
    //        if(n<loopLength){
    //           var newPlaceholder = placeHolder[n];
    //           n++;
    //           $('input').attr('placeholder',newPlaceholder);
    //        } else {
    //           $('input').attr('placeholder',placeHolder[0]);
    //           n=0;
    //        }
    //     },3000) ;
    // });
    
    /*search box text change js */
    /*$(document).ready(function(){
        
    const texts = ['Search 1857','history of sari','botanical illustration','madhubani'];
    const input = document.querySelector('#searchbox');
    const animationWorker = function (input, texts) {
      this.input = input;
      this.defaultPlaceholder = this.input.getAttribute('placeholder');
      this.texts = texts;
      this.curTextNum = 0;
      this.curPlaceholder = '';
      this.blinkCounter = 0;
      this.animationFrameId = 0;
      this.animationActive = false;
      this.input.setAttribute('placeholder',this.curPlaceholder);
    
      this.switch = (timeout) => {
        this.input.classList.add('imitatefocus');
        setTimeout(
          () => { 
            this.input.classList.remove('imitatefocus');
            if (this.curTextNum == 0) 
              this.input.setAttribute('placeholder',this.defaultPlaceholder);
            else
              this.input.setAttribute('placeholder',this.curPlaceholder);
    
            setTimeout(
              () => { 
                this.input.setAttribute('placeholder',this.curPlaceholder);
                if(this.animationActive) 
                  this.animationFrameId = window.requestAnimationFrame(this.animate)}, 
              timeout);
          }, 
          timeout);
      }
    
      this.animate = () => {
        if(!this.animationActive) return;
        let curPlaceholderFullText = this.texts[this.curTextNum];
        let timeout = 900;
        if (this.curPlaceholder == curPlaceholderFullText+'|' && this.blinkCounter==2) {
          this.blinkCounter = 0;
          this.curTextNum = (this.curTextNum >= this.texts.length-1)? 0 : this.curTextNum+1;
          this.curPlaceholder = '|';
          this.switch(2000);
          return;
        }
        else if (this.curPlaceholder == curPlaceholderFullText+'|' && this.blinkCounter<2) {
          this.curPlaceholder = curPlaceholderFullText;
          this.blinkCounter++;
        }
        else if (this.curPlaceholder == curPlaceholderFullText && this.blinkCounter<2) {
          this.curPlaceholder = this.curPlaceholder+'|';
        }
        else {
          this.curPlaceholder = curPlaceholderFullText
            .split('')
            .slice(0,this.curPlaceholder.length+1)
            .join('') + '|';
          timeout = 150;
        }
        this.input.setAttribute('placeholder',this.curPlaceholder);
        setTimeout(
          () => { if(this.animationActive) this.animationFrameId = window.requestAnimationFrame(this.animate)}, 
          timeout);
      }
    
      this.stop = () => {
        this.animationActive = false;
        window.cancelAnimationFrame(this.animationFrameId);
      }
    
      this.start = () => {
        this.animationActive = true;
        this.animationFrameId = window.requestAnimationFrame(this.animate);
        return this;
      }
    }
    });
    document.addEventListener("DOMContentLoaded", () => {
      let aw = new animationWorker(input, texts).start();
      input.addEventListener("focus", (e) => aw.stop());
      input.addEventListener("blur", (e) => {
        aw = new animationWorker(input, texts);
        if(e.target.value == '') setTimeout( aw.start, 2000);
      });
    });
    
    */
    //counter js
    
    jQuery.fn.jQuerySimpleCounter = function( options ) {
      var settings = jQuery.extend({
          start:  0,
          end:    100,
          easing: 'swing',
          duration: 400,
          complete: ''
      }, options );
    
      var thisElement = jQuery(this);
    
      jQuery({count: settings.start}).animate({count: settings.end}, {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    });
    };
    
    
    jQuery('#number1').jQuerySimpleCounter({end: 600,duration: 3000});
    jQuery('#number2').jQuerySimpleCounter({end: 9,duration: 3000});
    jQuery('#number3').jQuerySimpleCounter({end: 7,duration: 2000});
    jQuery('#number4').jQuerySimpleCounter({end: 39,duration: 2500});
    jQuery('#number5').jQuerySimpleCounter({end: 300,duration: 2500});
    
    
    /* AUTHOR LINK */
     jQuery('.about-me-img').hover(function(){
            jQuery('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            jQuery('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });
    