
// Drumming

  let drummingButton = document.getElementById('drumming-button');
  let drummingContent = document.getElementById('drumming-content');
  let drummingInfoVisible = false;

  function toggleDrummingInfo() {
    if (drummingInfoVisible) {
      drummingContent.style.display = 'none';
      drummingInfoVisible = false;  
    } else {
      drummingContent.style.display = 'block';
      drummingInfoVisible = true;
    }
} 

  function increaseMarginDrumming() {
    drummingContent.style.marginBottom = "36px";
  } 
   

drummingButton.addEventListener("click", toggleDrummingInfo);
drummingButton.addEventListener("click", increaseMarginDrumming);



// My Message Generator

  let myMessageButton = document.getElementById('message-button');
  let myMessageContent = document.getElementById('message-content');
  let myMessageInfoVisible = false; 


  function toggleMyMessageInfo() {
    if (myMessageInfoVisible) {
      myMessageContent.style.display = 'none';
      myMessageInfoVisible = false;
    } else {
      myMessageContent.style.display = 'block';
      myMessageInfoVisible = true;
    }
      
}

myMessageButton.addEventListener("click", toggleMyMessageInfo);


