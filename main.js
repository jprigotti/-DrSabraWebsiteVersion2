// GMAIL API SEND EMAIL ROUTINE
// https://gsuite-developers.googleblog.com/2011/12/using-new-js-library-to-unlock-power-of.html
// https://developers.google.com/gmail/api/auth/scopes
// https://developers.google.com/gmail/api/guides/sending
// https://developers.google.com/identity/protocols/oauth2
// https://github.com/google/google-api-javascript-client/blob/master/docs/start.md
// https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow
// https://developers.google.com/gmail/api/reference/rest/v1/users.messages/send
// https://gist.github.com/laxyapahuja/cbd967d9b1ff560326085df2a71bbf0f

// New method
// https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#oauth-2.0-endpoints
// https://www.google.com/search?client=firefox-b-d&q=youtube+google+api+send+email#fpstate=ive&vld=cid:13433b7a,vid:-rcRf7yswfM


$('#send-email-form').submit(function (evento) {

  evento.preventDefault();  // avoid to execute the actual submit of the form.
$('#btn-send-email').addClass('disabled');

  let that = $(this),
    data = {}; //this is gonna be a JS object to store all input values

  //loop through all the "name" items in the Form to load the data object
  that.find('[name]').each(function (index, value) {
    var that = $(this),
      name = that.attr('name'),
      value = that.val();
    data[name] = value;
  });

  console.log(data);
  //check if user is registered or not, runnig a query using AJAX-GET passing data object

  $.ajax({
    method: "post",
    redirect: "follow",
    url: 'https://script.google.com/macros/s/AKfycbyvJqzMRWNCQDISRY71ZHmwc51_qbr3obOVl-apqpED-B4t5Kl8yNNTLH9F1KPo7Tdpxg/exec',
    dataType: 'json',
    accepts: 'application/json',
    data,
    success: (status) => {
      console.log("Status: ", status);
      var form = document.querySelector('#send-email-form');
      form.reset();
      $('#btn-send-email').removeClass('disabled');

      $('#btn-send-email').text('OK');
      $('#btn-send-email').removeClass('btn-solid-blue');
      $('#btn-send-email').addClass('btn-solid-green');
      setTimeout(()=>{
        $('#btn-send-email').text('Enviar');
        $('#btn-send-email').removeClass('btn-solid-green');
        $('#btn-send-email').addClass('btn-solid-blue');
      }, "2000");
 
    },
    error: (err) => alert("Error: ", err)
  });

});



$('.btn-modal-galery').click(function () {
  $('.containerPopup').css({ 'display': 'contents' });
});




document.querySelector('.popup-img span').onclick = () => {
  document.querySelector('.containerPopup').style.display = 'none';
}


//EventListener para btn-modal-popup-cardiologia
$('.btn-modal-popup-cardiologia').click(function () {
  $('#modal-popup-cardiologia').modal('toggle');
})

$('.menu-option').click(function () {
  $('.menu').css({ 'left': '-350px' });
  $('.toggler').prop('checked', false);
  $("body").css("overflow", "visible");
});


$('.toggler').click(function () {
  if ($(this).is(":checked")) {
    $('.menu').css({ 'left': '0' });
    $("body").css("overflow", "hidden");
  } else {
    $('.menu').css({ 'left': '-350px' });
    $("body").css("overflow", "visible");
  }
})


//Para comprimir y expandir el contact-info
$('.contact-info-show').click(function () {
  if ($(this).is(":checked")) {
    $('.contact-info').css({ 'transform': 'translate3d(300px,0,0)' });
    $('.contact-info-controller').css({ 'left': '-40px' });
    $('.contact-info-controller-container').css({ 'left': '-40px' });
    $('.fa-caret-right').css({ 'transform': 'rotate(180deg)' });

  } else {
    $('.contact-info').css({ 'transform': 'translate3d(0,0,0)' });
    $('.contact-info-controller').css({ 'left': '0' });
    $('.contact-info-controller-container').css({ 'left': '0' });
    $('.fa-caret-right').css({ 'transform': 'rotate(180deg)' });
  }
})

$('.btn-scroll-top').click(function(){
  var modal=document.querySelector('.modal');
  modal.scrollTo(0,0);
})



// WEBAPP CODE
/*
function doPost(e) {

  try {
    Logger.log(JSON.stringify(e));
    var firstName = e.parameter['firstName'];
    var lastName = e.parameter['lastName'];
    var cell = e.parameter['cell'];
    var email = e.parameter['email'];
    var message = e.parameter['message'];

    var emailData = {
      to: 'rigottijp@gmail.com',
      subject: 'Mail de pacientes',
      body: 'Mensaje de ' + firstName + ' ' + lastName + '\n \n Email: ' + email + '\n Cell: ' + cell + '\n Mensaje: ' + message
    }

    sendEmail(emailData);

    // return json success results
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);


  } catch (error) { // if error return this
    Logger.log(error);
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error' }))
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

}



function sendEmail(emailData) {

  var recipient = emailData.to;
  var subject = emailData.subject;
  var message = emailData.body;

  try {
    MailApp.sendEmail(recipient, subject, message);
    return true;
  } catch (error) {
    return error;
  }

}*/