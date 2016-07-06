$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;

$('nav a.current').removeClass('current');
$(this).addClass('current');

$('#content-container').remove();
$('.content').load(url + ' #content-container').hide().fadeIn('fast');

});
