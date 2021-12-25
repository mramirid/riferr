$(document).ready(function () {
  const element = $('meta[name="active-menu"]').attr('content');
  $('#' + element).addClass('active');

  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
  });
});
