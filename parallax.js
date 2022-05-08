let trigger = document.querySelector('.popUpImage');
trigger.onclick = () =>
document.querySelector('.containerPopup').style.display = 'contents';

document.querySelector('.popup-img span').onclick = () =>{
  document.querySelector('.containerPopup').style.display = 'none';
}

$(window).scroll(function(e) {
    parallax();
  })
  
  
  function parallax() {
    var scroll = $(window).scrollTop();
    var screenHeight = $(window).height();
  
    $('.parallax--bg').each(function() {
      var offset = $(this).offset().top;
      var distanceFromBottom = offset - scroll - screenHeight
      
      if (offset > screenHeight && offset) {
        $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.3) +'px');
      } else {
        $(this).css('background-position', 'center ' + (( -scroll ) * 0.3) + 'px');
      }
    })
  }