$(function() {

  isVisible = false;
  isVisible2 = false;

  $("#test").click(function(){
    percent = 0.17;
    add_width = (percent*$('.bubbles').parent().width())+'px';
    if ($("#firstB").width() == 0) {
      $('#firstB').animate({'width': '+='+add_width}, 500);
    }
  })
  $("#test2").click(function(){
    percent = 0.17;
    add_width = (percent*$('.bubbles').parent().width())+'px';
    if ($("#secondB").width() == 0) {
      $('#secondB').animate({'width': '+='+add_width}, 500);
    }
  })

  var mX, mY, distance, distance2
  function calculateDistance(elem, mouseX, mouseY) {
      return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
  }
    $(document).mousemove(function(e) {
        mX = e.pageX;
        mY = e.pageY;
        //On calcule la distance du premier élément
        $element  = $('#test');
        distance = calculateDistance($element, mX, mY);
        if (distance < 100 && isVisible == false) {
          $("#test").fadeTo("fast", 1);
          isVisible = true;
        }
        else if (distance >= 100 && isVisible == true) {
          isVisible = false;
          $("#test").fadeTo("fast", 0.3);
          $(".bubbles").stop().animate({width: 0}, 300 );
        }
        //On calcule la distance du second élément
        $element2  = $('#test2');
        distance2 = calculateDistance($element2, mX, mY);
        if (distance2 < 100 && isVisible2 == false) {
          $("#test2").fadeTo("fast", 1);
          isVisible2 = true;
        }
        else if (distance2 >= 100 && isVisible2 == true) {
          isVisible2 = false;
          $("#test2").fadeTo("fast", 0.3);
          $(".bubbles").stop().animate({width: 0}, 300 );
        }

    });
    $("#showGroupe").click(function(){
      $("#conteneur_img_groupe").slideToggle(1000);
    })
    $("#showTxtProjet").click(function(){
      $("#conteneur_txt_projet").slideToggle(1000);
    })

});
