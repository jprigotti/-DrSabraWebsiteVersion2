$('.btn-modal-galery').click(function(){
  $('.containerPopup').css({'display':'contents'});
});




document.querySelector('.popup-img span').onclick = () =>{
  document.querySelector('.containerPopup').style.display = 'none';
}


//EventListener para btn-modal-popup-cardiologia
$('.btn-modal-popup-cardiologia').click(function(){
  $('#modal-popup-cardiologia').modal('toggle');
})

$('.menu-option').click(function(){
  $('.menu').css({'visibility':'hidden'});
  $('.menuContainer').css({'left': -350});
  $('.toggler').prop('checked', false);
});

$('.toggler').click(function(){
  if($(this).is(":checked")){
    $('.menu').css({'visibility':'visible'});
    $('.menuContainer').css({'left': 0});
    $('.menuContainer').css({'ransition-duration': 0.2});
  }else{
    $('.menu').css({'visibility':'hidden'});
    $('.menuContainer').css({'left': -350});
    $('.menuContainer').css({'ransition-duration': 0.2});
  }
})


//Para comprimir y expandir el contact-info
$('.contact-info-show').click(function(){
  if($(this).is(":checked")){
    $('.contact-info').css({'transform': 'translate3d(350px,0,0)'});
    $('.contact-info-controller').css({'left': '-40px'});
    $('.contact-info-controller-container').css({'left': '-40px'});
    $('.fa-caret-right').css({'transform': 'rotate(180deg)'});

  }else{
    $('.contact-info').css({'transform': 'translate3d(0,0,0)'});
    $('.contact-info-controller').css({'left': '0'});
    $('.contact-info-controller-container').css({'left': '0'});
    $('.fa-caret-right').css({'transform': 'rotate(180deg)'});
  }
})


