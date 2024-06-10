
let drummingButton = document.getElementById('drumming-button');
let drummingContent = document.getElementsByClassName('drumming-content');

let showDrummingInfo = () => {
     drummingContent.style.display = 'block';
}

drumming.onclick = showDrummingInfo;




let myMessageButton = document.getElementById('my-message-button');
let myMessageContent = document.getElementsByClassName('my-message-content');

let showMyMessageInfo = () => {
    myMessageContent.style.display = 'block';
}

myMessageButton.onclick = showMyMessageInfo;


