$(window).scroll(function () {
  if ($(this).scrollTop() >= 500) {
    $('#navBar').addClass('noTransparrent');
  } else {
    $('#navBar').removeClass('noTransparrent');
  }
});

$(document).ready(function () {
  $('a.scroll').on('click', function (event) {
    let hash = this.hash;
    $('html,body').animate(
      {scrollTop: $(hash).offset().top},
      800,
      function () {}
    );
  });
});
