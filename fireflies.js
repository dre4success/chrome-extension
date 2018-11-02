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
    if (
      document.querySelectorAll('.whsOnd.zHQkBf')[3].nextElementSibling
        .innerText === 'Add guests'
    ) {
      /* 
        Using window object because guest variable is in a setInterval 
        meaning our function is immediately invoked but setInterval is put
        on an event loop, so which makes our guest variable undefined at 
        the button.addEventListener. The window object makes it available
        at that point
      */
      window.__guest__ = document.querySelectorAll('.whsOnd.zHQkBf')[3];
      document.querySelectorAll(
        '.whsOnd.zHQkBf'
      )[3].nextElementSibling.innerText = '';
    } else if (
      document.querySelectorAll('.whsOnd.zHQkBf')[1].nextElementSibling
        .innerText === 'Add guests'
    ) {
      window.__guest__ = document.querySelectorAll('.whsOnd.zHQkBf')[1];
      document.querySelectorAll(
        '.whsOnd.zHQkBf'
      )[1].nextElementSibling.innerText = '';
    }

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
        window.__guest__.setAttribute('data-initial-value', 'fred@fireflies.io');
        window.__guest__.setAttribute('dir', 'ltr');
        window.__guest__.setAttribute('aria-expanded', true);
        window.__guest__.value = 'fred@fireflies.io';
      });
    }
  }, 100);
})();
