// --------------------------------------------------------- //
// LOADING
// --------------------------------------------------------- //
$( window ).load(function() {

  $('#loader').addClass('removed');
  $('#page').addClass('displayed');

  $(".headline").typed({
    strings: [
      "I enjoy programming",
      "I'm studying at Sheridan College in Oakville",
      "I'm focusing on web / mobile applicaiotn",
      "I'm learning MEAN stack on my own",
      "Not easy, but interesting !!",            
      "I want to build useful applications",
      "I'm a programmer"
    ],
    typeSpeed: 60,
    startDelay: 50,
    showCursor: false
  });
  
});


// --------------------------------------------------------- //
// BACK TO TOP
// --------------------------------------------------------- //
$('#backtotop').click(function(){
        
$('html,body').animate({scrollTop: 0},2000);
return false;

});
