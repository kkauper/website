function KAUPERCO()
{
    this.init = function()
    {
        this.initPreloader();
        this.initPageExit();

        // NAV MOUSE HOVER CLASS
        this.initNavHoverCursor();

        // OVERLAY NAVIGATION
        this.initShowOverlayNavigation();
        this.initHideOverlayNavigation();

        // INIT LAX.JS
        this.initWow();

        // INIT HOME FADE
        this.initHeroFade();

        // INIT ARCHIVE SCROLLING
        this.initArchiveScrolling();
    };

    this.initPreloader = function()
    {
      $(window).on('load', function() {
        gsap.to('.preloader', {duration: 1.4, opacity: 0, display:'none'});
      });
    };

    this.initPageExit = function()
    {
      $('.link.--animate').click(function(event)
      {
        event.preventDefault();
        newLocation = this.href;
        gsap.set('.preloader', {xPercent: 100, y: 0, z: 0, opacity: 1, display: 'block'});
        gsap.to('.preloader', {duration: 0.5, xPercent: 0, y: 0, z: 0, opacity: 1, display: 'block'});
        setTimeout(function()
        {
          $('body').fadeOut(1, newpage);
        }, 550);
      });

      function newpage()
      {
        window.location = newLocation;
      }
    }

    // NAV MOUSE HOVER CLASS
    this.initNavHoverCursor = function()
    {
      $(document).on('mouseenter', '.main-nav', function()
      {
        $('body').addClass('nav-hover');
      });

      $(document).on('mouseleave', '.main-nav', function()
      {
        $('body').removeClass('nav-hover');
      });
    }

    // OVERLAY NAVIGATION
    this.initShowOverlayNavigation = function()
    {
      $(document).on('click', 'button.mobile-nav-button', function()
      {
        $('body').addClass('nav-open');
        $(this).addClass('open');
      });
    }

    this.initHideOverlayNavigation = function()
    {
      $(document).on('click', 'button.burger.open', function()
      {
        $('body').removeClass('nav-open');
        $(this).removeClass('open');
        setTimeout(function()
        {
          $('div.site-nav').attr('aria-hidden', 'true');
        }, 2000);
      });
    }

    this.initWow = function()
    {
        new WOW(
        {
          boxClass: 'kauper-animated'
        }).init();
    }

    this.initHeroFade = function()
    {
      $(window).scroll(function()
      {
        var scroll = $(window).scrollTop();
        if (scroll >= 0.6 * $(window).height())
        {
          $("body").addClass('--faded');
          $("body").removeClass('--green');
        } else
        {
          $("body").addClass('--green');
          $("body").removeClass('--faded');
        }
      });
    }

    this.initArchiveScrolling = function()
    {
      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 160
        }, 500);
    });
    }

    // INIT PRELOADER
    this.init();
}

$(function() {
  new KAUPERCO();
});


(() => {
  var cursor = $(".cursor"),
  follower = $(".cursor-follower");

  var posX = 0,
      posY = 0;

  var mouseX = 0,
      mouseY = 0;

  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      TweenMax.set(follower, {
          css: {
          left: posX - 12,
          top: posY - 12
          }
      });

      TweenMax.set(cursor, {
          css: {
          left: mouseX,
          top: mouseY
          }
      });
    }
  });

  $(document).on("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
  });
  $(".link").on("mouseenter", function() {
      cursor.addClass("active");
      follower.addClass("active");
  });
  $(".link").on("mouseleave", function() {
      cursor.removeClass("active");
      follower.removeClass("active");
  });
})();