var isFirstLoad = true;

$(window).scroll(function() {
  if (!isFirstLoad) {
    var scrolledFromTop = $(window).scrollTop() + $(window).height();
    $(".appear").each(function() {
      var distanceFromTop = $(this).offset().top;
      if (scrolledFromTop >= distanceFromTop + 100) {
        var delaiAnim = $(this).data("delai");
        $(this).delay(delaiAnim).animate({
          top: 0,
          opacity: 1
        });
      }
    });
  }
});

// Après la première exécution du code, définir isFirstLoad sur false
isFirstLoad = false;
