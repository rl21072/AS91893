$(document).ready(function(){

    $("a").on('click', function(event) {
  
      if (this.hash !== "") {

        event.preventDefault();
  
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      } 
    });
  });

  $(document).ready(function(){
    $("#pupuke").click(function(){
      $("#pupuke_info").slideToggle("slow");
    });
    $("#rangitoto").click(function(){
      $("#rangi_info").slideToggle("slow");
    });
    $(".info span").click(function(){
      $(".info").slideUp(700);
      });
  });

  $(document).ready(function(){
    $("#ngati").click(function(){
      $("#ngati_info").slideToggle("slow");
    });
    $("#waitemata").click(function(){
      $("#waitemata_info").slideToggle("slow");
    });
    $(".info span").click(function(){
      $(".info").slideUp(700);
      });
  });