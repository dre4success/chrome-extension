(function() {
  let id = 'hfcbnpcjniepjcnapakpdkeflmhnilib';

  // create button and style it
  let button = document.createElement('button');
  button.style.backgroundColor = '#ff0092';
  button.style.borderRadius = '4px';
  button.style.padding = '7px';
  button.style.marginLeft = '200px';
  let text = document.createTextNode('Transcribe with Fireflies.ai');
  button.appendChild(text);
  button.style.display = 'none';

  // get the div to place the button in
  let parentDiv = document.querySelector('.emaTS');
  parentDiv.appendChild(button);

  setInterval(() => {
    let description = document.getElementById('hInySc0');
    let location = document.querySelector('[aria-label="Location"]');
    let guest = document.querySelector('[aria-owns="nngdp149"]');

    let locationValues = location.value.split(' ');
    let descriptionValues = description.textContent.split(' ');

    let phoneNumber = [];
    /* 
    To check if there is phone number in location and description
    I am making some assumptions about the phone number:
    1) That it's a 10 digit number
    2) That the number does not contain any dash
    */

    for (let value of locationValues) {
      if (!isNaN(parseFloat(value)) && value.length === 10) {
        phoneNumber.push(value);
      }
    }
    for (let val of descriptionValues) {
      if (!isNaN(parseFloat(val)) && val.length === 10) {
        phoneNumber.push(val);
      }
    }
    // if there's phone number in description or location
    if (phoneNumber.length >= 1) {
      button.style.display = 'block';
      button.addEventListener('click', function() {
        //add fred@fireflies.io to guest and submit guest form
      });
    }
  }, 100);
})();
