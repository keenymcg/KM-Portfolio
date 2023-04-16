// Get references to the avatar and passion list elements
const avatar = document.querySelector('.tempAvatar');
const passions = document.querySelectorAll('.passions');
const h6 = document.querySelector('.avatarText');

// Define a function to handle the mouseover event for each passion list item
function handlePassionHover(event) {
  // Get the source of the image for the current passion
    const passionImageSrc = event.currentTarget.getAttribute('data-avatar');

    // Change the avatar image to the new source
    avatar.setAttribute('src', passionImageSrc);
    if (passionImageSrc === "images/education.png") {
        h6.textContent = `RPCV Ethiopia, 2017-2019`;
    } else if (passionImageSrc === "images/music.jpg") {
        h6.textContent = "Trained Singer, Pianist, & Performer"; 
    } else if (passionImageSrc === "images/paraglide.jpeg") {
        h6.textContent = "Certified Pilot"; 
    } else if (passionImageSrc === "images/hummingbird.jpg") {
        h6.textContent = "Birds <3"; 
    } else if (passionImageSrc === "images/photography.jpg") {
        h6.textContent = "Sony a7rii + Tamron 28-200"; 
    }
};

/*<li class="passions" data-avatar="images/music.jpg"><img src="images/egg-2.png" alt="egg image" />Writing Music & Stories</li>
<li class="passions" data-avatar="images/paraglide.jpeg"><img src="images/egg-1.png" alt="egg image" />Paragliding</li>
<li class="passions" data-avatar="images/hummingbird.jpg"><img src="images/egg-2.png" alt="egg image" />Birds</li>
<li class="passions" data-avatar="images/photography.jpg"*/

// Loop through each passion list item and add a mouseover event listener
passions.forEach(passion => {
    passion.addEventListener('mouseover', handlePassionHover);
});



