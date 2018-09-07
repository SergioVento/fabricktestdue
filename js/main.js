      $( document ).ready(function() {
      $('.preload').css("opacity", "0");
      var titolo = document.getElementById("titolo");
      var titolo1 = document.getElementById("titolo1");
              TweenLite.fromTo(titolo, .24, {y:70}, {y:0}, Power4.easeOut).delay(0.7);
              TweenLite.fromTo(titolo1, .24, {y:70}, {y:0}, Power4.easeOut).delay(0.77);
      });
      // Hide Header on on scroll down
      var didScroll;
      var lastScrollTop = 0;
      var delta = 4;
      var navbarHeight = jQuery('#desktop-header').outerHeight();

      $(window).scroll(function(event){
          didScroll = true;
      });

      setInterval(function() {
          if (didScroll) {
              hasScrolled();
              didScroll = false;
          }
      }, 100);

      function hasScrolled() {
          $('header').css("background-color", "#ffffff");
          var st = $(this).scrollTop();
          
          // Make sure they scroll more than delta
          if(Math.abs(lastScrollTop - st) <= delta)
              return;
          
          // If they scrolled down and are past the navbar, add class .nav-up.
          // This is necessary so you never see what is "behind" the navbar.
          if (st > lastScrollTop && st > navbarHeight){
              // Scroll Down
              $('#desktop-header').removeClass('nav-down').addClass('nav-up');
          } else {
              // Scroll Up
              if(st + $(window).height() < $(document).height()) {
                  $('#desktop-header').removeClass('nav-up').addClass('nav-down');
              }
          }
          
          lastScrollTop = st;
      } 
            // init controller
            var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});
            var controller2 = new ScrollMagic.Controller({globalSceneOptions: {}});
            // build scenes
            new ScrollMagic.Scene({triggerElement: ".vision", reverse: false})
                    .setClassToggle(".vision-fadein", "o0") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
            
            new ScrollMagic.Scene({triggerElement: ".vision", reverse: false})
                    .setTween(TweenMax.fromTo("#animate100", .24, {y:70}, {y:0}, Power4.easeOut).delay(.7)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);
            new ScrollMagic.Scene({triggerElement: ".vision", reverse: false})
                    .setTween(TweenMax.fromTo("#animate101", .24, {y:70}, {y:0}, Power4.easeOut).delay(.8)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);
            new ScrollMagic.Scene({triggerElement: ".vision", reverse: false})
                    .setTween(TweenMax.fromTo("#animate102", .24, {y:70}, {y:0}, Power4.easeOut).delay(.86)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);
            new ScrollMagic.Scene({triggerElement: ".vision", reverse: false})
                    .setTween(TweenMax.fromTo("#animate103", .24, {y:70}, {y:0}, Power4.easeOut).delay(.92)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);

            new ScrollMagic.Scene({triggerElement: ".whatweare", reverse: false})
                    .setClassToggle(".whatweare-fadein", "o0") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
            new ScrollMagic.Scene({triggerElement: ".whatwedo", reverse: false})
                    .setClassToggle(".whatwedo-fadein", "o0") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

            new ScrollMagic.Scene({triggerElement: ".casehistory", reverse: false})
                    .setClassToggle(".casehistory-fadein", "o0") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
            new ScrollMagic.Scene({triggerElement: ".casehistory", reverse: false})
                    .setTween(TweenMax.fromTo("#animate200", .24, {y:70}, {y:0}, Power4.easeOut)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);
            new ScrollMagic.Scene({triggerElement: ".casehistory", reverse: false})
                    .setTween(TweenMax.fromTo("#animate201", .24, {y:70}, {y:0}, Power4.easeOut).delay(.1)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);
            new ScrollMagic.Scene({triggerElement: ".casehistory", reverse: false})
                    .setTween(TweenMax.fromTo("#animate202", .24, {y:70}, {y:0}, Power4.easeOut).delay(.16)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);

            new ScrollMagic.Scene({triggerElement: ".platform", reverse: false})
                    .setClassToggle(".platform-fadein", "o0") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

            new ScrollMagic.Scene({triggerElement: ".home-full-trigger", reverse: false})
                    .setClassToggle(".home-full-trigger-fadein", "o0") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

            new ScrollMagic.Scene({triggerElement: ".partners", reverse: false})
                    .setClassToggle(".partners-fadein", "o0") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
            new ScrollMagic.Scene({triggerElement: ".partners", reverse: false})
                    .setTween(TweenMax.fromTo("#animate300", .24, {y:70}, {y:0}, Power4.easeOut)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);
            new ScrollMagic.Scene({triggerElement: ".partners", reverse: false})
                    .setTween(TweenMax.fromTo("#animate301", .24, {y:70}, {y:0}, Power4.easeOut).delay(.1)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);
            new ScrollMagic.Scene({triggerElement: ".partners", reverse: false})
                    .setTween(TweenMax.fromTo("#animate302", .24, {y:70}, {y:0}, Power4.easeOut).delay(.16)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);
            new ScrollMagic.Scene({triggerElement: ".partners", reverse: false})
                    .setTween(TweenMax.fromTo("#animate303", .24, {y:70}, {y:0}, Power4.easeOut).delay(.22)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);
            new ScrollMagic.Scene({triggerElement: ".partners", reverse: false})
                    .setTween(TweenMax.fromTo("#animate304", .24, {y:70}, {y:0}, Power4.easeOut).delay(.28)) // trigger a TweenMax.to tween
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller2);

            new ScrollMagic.Scene({triggerElement: ".prefooter", reverse: false})
                    .setClassToggle(".prefooter-fadein", "o0") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);