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
  $('.menu').css({'left': '-300px'});
  $('.toggler').prop('checked', false);
  $("body").css("overflow", "visible"); 
});


$('.toggler').click(function(){
  if($(this).is(":checked")){
    $('.menu').css({'left': '0'});
    $("body").css("overflow", "hidden");    
  }else{
    $('.menu').css({'left': '-350px'});
    $("body").css("overflow", "visible"); 
  }
})


//Para comprimir y expandir el contact-info
$('.contact-info-show').click(function(){
  if($(this).is(":checked")){
    $('.contact-info').css({'transform': 'translate3d(300px,0,0)'});
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


