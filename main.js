// Get references to the avatar and headerText elements
const avatar = document.querySelector('.tempAvatar');
const headerText = document.querySelector('.headerText');

// Set a threshold distance in pixels before the avatar starts fading out
const threshold = 20;

// Define a function to handle the window resize event
function handleResize() {
  // Get the distance between the right edge of the headerText and the left edge of the avatar
    const distance = avatar.getBoundingClientRect().left - headerText.getBoundingClientRect().right;

    // If the distance is less than the threshold, fade out the avatar
    if (distance < threshold) {
        avatar.classList.add('fade-out');
    }
    // Otherwise, fade in the avatar (if it was previously faded out)
    else {
        avatar.classList.remove('fade-out');
    }
};

// Call the handleResize function when the window first loads and whenever it is resized
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
