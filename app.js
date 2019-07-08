var promptButton = document.getElementById('prompt');
promptButton.onclick = function() {
 var response = prompt('Enter your name below');
 var displayContainer = document.getElementById('promptResponse');
 displayContainer.innerText = 'Hi ' + response + '! Im glad you took the time to visit my portfolio.' + 'Select the "Enter" button at the top of the page to continue.';
}

