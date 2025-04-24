// Function to store user preferences in localStorage
function storePreferences() {
  const preference = document.getElementById('animateButton').innerText === 'Click to Animate' ? 'clicked' : 'notClicked';
  localStorage.setItem('userPreference', preference);
}

// Function to retrieve and apply user preferences
function applyPreferences() {
  const preference = localStorage.getItem('userPreference');
  if (preference === 'clicked') {
    document.getElementById('animateButton').innerText = 'Animation Triggered';
  }
}

// Function to trigger the animation on button click
function triggerAnimation() {
  const image = document.getElementById('animateImage');
  image.classList.add('animate');

  // Store the preference after clicking
  storePreferences();
  
  // Change button text to indicate animation has been triggered
  document.getElementById('animateButton').innerText = 'Animation Triggered';

  // Remove animation class after animation ends to allow re-triggering
  image.addEventListener('animationend', () => {
    image.classList.remove('animate');
  });
}

// Event listener for button click
document.getElementById('animateButton').addEventListener('click', triggerAnimation);

// Apply stored preferences when the page loads
window.onload = applyPreferences;
