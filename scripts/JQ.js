$(function() {

  isVisible = false;
  isVisible2 = false;
  isVisible3 = false;

  var mX, mY, distance, distance2
  function calculateDistance(elem, mouseX, mouseY) {
      return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
  }
    $(document).mousemove(function(e) {
        mX = e.pageX;
        mY = e.pageY;
        //On calcule la distance du premier élément
        $element  = $('#anthoPoint');
        distance = calculateDistance($element, mX, mY);
        if (distance < 150 && isVisible == false) {
          percent = 0.17;
          add_width = (percent*$('.bubbles').parent().width())+'px';
          if ($("#anthoBubble").width() == 0) {
            $('#anthoBubble').animate({'width': '+='+add_width}, 500);
            isVisible = true;
          }
        }
        else if (distance >= 150 && isVisible == true) {
          isVisible = false;
          $("#anthoPoint").fadeTo("fast", 0.1);
          $(".bubbles").stop().animate({width: 0}, 300 );
        }
        //On calcule la distance du second élément
        $element2  = $('#mathPoint');
        distance2 = calculateDistance($element2, mX, mY);
        if (distance2 < 150 && isVisible2 == false) {
          percent = 0.17;
          add_width = (percent*$('.bubbles').parent().width())+'px';
          if ($("#mathBubble").width() == 0) {
            $('#mathBubble').animate({'width': '+='+add_width}, 500);
            isVisible2 = true;
          }
        }
        else if (distance2 >= 150 && isVisible2 == true) {
          isVisible2 = false;
          $("#mathPoint").fadeTo("fast", 0.1);
          $(".bubbles").stop().animate({width: 0}, 300 );
        }
        //On calcule la distance du troisième élément
        $element3  = $('#etiPoint');
        distance3 = calculateDistance($element3, mX, mY);
        if (distance3 < 150 && isVisible3 == false) {
          percent = 0.17;
          add_width = (percent*$('.bubbles').parent().width())+'px';
          if ($("#etiBubble").width() == 0) {
            $('#etiBubble').animate({'width': '+='+add_width}, 500);
            isVisible3 = true;
          }
        }
        else if (distance3 >= 150 && isVisible3 == true) {
          isVisible3 = false;
          $("#etiPoint").fadeTo("fast", 0.1);
          $(".bubbles").stop().animate({width: 0}, 300 );
        }
    });

    $("#showProject").click(function(){
      $("#contentProject").slideToggle(1000);
    })

    $("#showTeam").click(function(){
      $("#contentTeam").slideToggle(1000);
    })

    $("#showETC").click(function(){
      $("#contentETC").slideToggle(1000);
    })

});
