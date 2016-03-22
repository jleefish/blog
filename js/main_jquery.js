// --------------------------------------------------------- //
// LOADING
// --------------------------------------------------------- //
$( window ).load(function() {

  $('#loader').addClass('removed');
  $('#page').addClass('displayed');

  $(".headline").typed({
    strings: [
      "I'm studying at Sheridan College in Oakville",
      "Focusing on web / mobile application",
      "Learning MEAN stack on my own",
      "Not easy, but interesting !!",            
      "I am passionate about building useful applications",
      "I'm a programmer."
    ],
    typeSpeed: 60,
    startDelay: 50,
    showCursor: false
  });
});

