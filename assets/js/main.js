function KAUPERCO()
{
    this.init = function()
    {
        // LOAD CONTENT AFTER DOM IS READY
        this.initDOM();

        // NAV MOUSE HOVER CLASS
        this.initNavHoverCursor();
        this.initDarkHoverCursor();
        this.initLightHoverImage();
        this.initNavOpacity();

        // OVERLAY NAVIGATION
        this.initShowOverlayNavigation();
        this.initHideOverlayNavigation();

        // INIT LAX.JS
        this.initWow();

        // INIT ARCHIVE SCROLLING
        this.initArchiveScrolling();
    };

    // LOAD CONTENT AFTER DOM IS READY
    this.initDOM = function()
    {
      $(document).ready(function(){
        setTimeout(function()
        {
          $('body').addClass('loaded');
          $('.wrapper').attr('data-loaded','true');
        }, 500);
       });
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

    // DARK COURSOR LINKS
    this.initDarkHoverCursor = function()
    {
      $(document).on('mouseenter', '.link.--dark', function()
      {
        $('body').addClass('cursor-dark');
      });

      $(document).on('mouseleave', '.link.--dark', function()
      {
        $('body').removeClass('cursor-dark');
      });
    }

    this.initLightHoverImage = function()
    {
      $(document).on('mouseenter', '.link.--dark .image', function()
      {
        $('body').addClass('cursor-dark-reverse');
      });

      $(document).on('mouseleave', '.link.--dark .image', function()
      {
        $('body').removeClass('cursor-dark-reverse');
      });
    }

    this.initNavOpacity = function()
    {
      $('nav.main-nav ul li a').on(
        {
        mouseenter: function ()
        {
          $(this).parent().parent().addClass('is-hovered');
        },
        mouseleave: function ()
        {
          $(this).parent().parent().removeClass('is-hovered');
        }
      });
    }

    // OVERLAY NAVIGATION
    this.initShowOverlayNavigation = function()
    {
      $(document).on('click', 'button.mobile-nav-button', function()
      {
        $('body').addClass('nav-open');
        $(this).addClass('open');
        $('div.site-nav').attr('aria-hidden', 'false');
      });
    }

    this.initHideOverlayNavigation = function()
    {
      $(document).on('click', 'button.mobile-nav-button.open', function()
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