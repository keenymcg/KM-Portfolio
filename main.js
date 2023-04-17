// MENU
const menu = document.querySelectorAll(".menuImg")
menu.forEach(img => {
    img.style.cursor = 'pointer';

    img.addEventListener('mouseover', () => {
        img.style.transition = 'width 1s, height 1s';
        img.style.width = `${img.offsetWidth + 10}px`;
        img.style.height = `${img.offsetHeight + 10}px`;
    });

    img.addEventListener('mouseout', () => {
        img.style.transition = 'width 1s, height 1s';
        img.style.width = `${img.offsetWidth - 10}px`;
        img.style.height = `${img.offsetHeight - 10}px`;
    });

    if (img.id === 'resume') {
        img.addEventListener('click', () => {
        window.location.href = "https://www.linkedin.com/in/keenanmcguckin/";
        });
    } else if (img.id === 'camera') {
        img.addEventListener('click', () => {
        window.location.href = "https://github.com/keenymcg";
        });
    };
});




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
        h6.textContent = "I also play guitar sometimes"; 
    } else if (passionImageSrc === "images/paraglide.jpeg") {
        h6.textContent = "Certified Pilot (P2)"; 
    } else if (passionImageSrc === "images/hummingbird.jpg") {
        h6.textContent = "Birds <3 (Pic by me)"; 
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


// PROJECTS

// Get all the project images
const projImgs = document.querySelectorAll('.projImg');

// Loop through each image and add the event listeners
projImgs.forEach(img => {
  // Change the cursor to a pointer when hovering over the image
    img.style.cursor = 'pointer';

    // When hovering over the image, increase its width and height by 15px over 1 second
    img.addEventListener('mouseover', () => {
        img.style.transition = 'width 1s, height 1s';
        img.style.width = `${img.offsetWidth + 15}px`;
        img.style.height = `${img.offsetHeight + 15}px`;
    });

    // When no longer hovering over the image, decrease its width and height by 15px over 1 second
    img.addEventListener('mouseout', () => {
        img.style.transition = 'width 1s, height 1s';
        img.style.width = `${img.offsetWidth - 15}px`;
        img.style.height = `${img.offsetHeight - 15}px`;
    });

    // When clicking on the image, open the corresponding link
    if (img.id === 'etch') {
        img.addEventListener('click', () => {
        window.location.href = 'https://example.com/etch';
        });
    } else if (img.id === 'calc') {
        img.addEventListener('click', () => {
        window.location.href = 'https://example.com/calc';
        });
    } else if (img.id === 'game') {
        img.addEventListener('click', () => {
        window.location.href = 'https://example.com/game';
        });
    }
});


// SOCIALS

const socials = document.querySelectorAll(".socialsImg")
socials.forEach(img => {
    img.style.cursor = 'pointer';

    img.addEventListener('mouseover', () => {
        img.style.transition = 'width 1s, height 1s';
        img.style.width = `${img.offsetWidth + 10}px`;
        img.style.height = `${img.offsetHeight + 10}px`;
    });

    img.addEventListener('mouseout', () => {
        img.style.transition = 'width 1s, height 1s';
        img.style.width = `${img.offsetWidth - 10}px`;
        img.style.height = `${img.offsetHeight - 10}px`;
    });

    if (img.id === 'linkedIn') {
        img.addEventListener('click', () => {
        window.location.href = "https://www.linkedin.com/in/keenanmcguckin/";
        });
    } else if (img.id === 'gitHub') {
        img.addEventListener('click', () => {
        window.location.href = "https://github.com/keenymcg";
        });
    } else if (img.id === 'insta') {
        img.addEventListener('click', () => {
        window.location.href = "https://www.instagram.com/keenoman_photography/";
        });
    }
});