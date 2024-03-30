
document.addEventListener("DOMContentLoaded", function() {
 
  var progressBars = document.querySelectorAll('.progress-bar');

  
  progressBars.forEach(function(bar) {
  
      var percentage = parseInt(bar.getAttribute('aria-valuenow'));
     
      bar.style.width = percentage + '%';
  });
});



    function updateActiveSection() {
      var scrollPosition = $(window).scrollTop();
    
      if (scrollPosition === 0) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#home']").addClass("active");
        return;
      }
    
      $("section").each(function() {
        var target = $(this).attr("id");
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();
    
        if (
          scrollPosition >= offset - 40 &&
          scrollPosition < offset + height - 40
        ) {
          $(".header ul li a").removeClass("active");
          $(".header ul li a[href='#" + target + "']").addClass("active");
        }
      });
    }
    
  
   