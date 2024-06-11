
// Drumming

  let drummingButton = document.getElementById('drumming-button');
  let drummingImage = document.getElementById('drumming-image');
  let drummingText = document.getElementById('drumming-text');

  function showDrummingInfo() {
    drummingImage.style.display = 'block';
    drummingText.style.display = 'block';
}

drummingButton.addEventListener("click", showDrummingInfo);



// My Message Generator

  let myMessageButton = document.getElementById('message-button');
  let myMessageImage = document.getElementsById('message-image');
  let myMessageText = document.getElementById('message-text');
   

  function showMyMessageInfo() {
    myMessageImage.style.display = 'block';
    myMessageText.style.display = 'block';
}

myMessageButton.addEventListener("click", showMyMessageInfo);


