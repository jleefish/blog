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
      "Studying android and iOS programming",      
      "I am passionate about building useful applications",
      "I'm a programmer."
    ],
    typeSpeed: 60,
    startDelay: 50,
    showCursor: false
  });
});

