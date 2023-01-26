let trigger = document.querySelector('#popUpImage');
trigger.addEventListener("click", ()=>{
  document.querySelector('.containerPopup').style.display = 'contents';
});

let trigger1 = document.querySelector('#popUpImage1');
trigger1.addEventListener("click", ()=>{
  document.querySelector('.containerPopup').style.display = 'contents';
});



document.querySelector('.popup-img span').onclick = () =>{
  document.querySelector('.containerPopup').style.display = 'none';
}