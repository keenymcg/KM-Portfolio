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
        window.location.href = "resume.html";
        });
    } else if (img.id === 'camera') {
        img.addEventListener('click', () => {
        window.location.href = "https://www.instagram.com/keenoman_photography/";
        });
    };
});


// PASSIONS

// Get references to the avatar and passion list elements
const avatar = document.querySelector('.tempAvatar');
const passions = document.querySelectorAll('.passions');
const h6row1 = document.querySelector('.avatarText');
const h6row2 = document.querySelector('.avatarTextRow2')

// Define a function to handle the mouseover event for each passion list item
// function handlePassionHover(event) {
//   // Get the source of the image for the current passion
//     const passionImageSrc = event.currentTarget.getAttribute('data-avatar');

//     // Change the avatar image to the new source
//     avatar.setAttribute('src', passionImageSrc);
//     if (passionImageSrc === "images/education.png") {
//         h6row1.textContent = `RPCV Ethiopia, 2017-2019`;
//         h6row1.style.color = '#3F497F'
//         h6row2.textContent = 'text'
//         h6row2.style.color = 'rgb(255, 255, 255)'
//     } else if (passionImageSrc === "images/music.jpg") {
//         h6row1.textContent = "Also guitar."; 
//         h6row1.style.color = '#3F497F'
//         h6row2.textContent = "Anyway, here's Wonderwall..."
//         h6row2.style.color = '#3F497F'
//     } else if (passionImageSrc === "images/paraglide.jpeg") {
//         h6row1.textContent = "Certified Pilot (P2)"; 
//         h6row1.style.color = '#3F497F'
//         h6row2.textContent = 'text'
//         h6row2.style.color = 'rgb(255, 255, 255)'
//     } else if (passionImageSrc === "images/hummingbird.jpg") {
//         h6row1.textContent = "Birds <3";
//         h6row2.style.color = '#3F497F'
//         h6row2.textContent = "(pic by me)"
//     } else if (passionImageSrc === "images/photography.jpg") {
//         h6row1.textContent = "Sony a7rii + Tamron 28-200"; 
//         h6row2.style.color = '#3F497F'
//         h6row2.textContent = "(pic also by me)"
//     }   
// };

// passions.forEach(passion => {
//     passion.addEventListener('mouseover', handlePassionHover);
// });


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
        window.open("https://keenymcg.github.io/Odin_Etch_a_sketch/", "_blank");
        });
    } else if (img.id === 'dash') {
        img.addEventListener('click', () => {
        window.open("https://keenymcg.github.io/Odin_Admin_Dash/", "_blank");
        });
    } else if (img.id === 'calc') {
        img.addEventListener('click', () => {
        window.open("https://keenymcg.github.io/Odin_Calculator/", "_blank");
        });
    } else if (img.id === 'game') {
        img.addEventListener('click', () => {
        window.open("https://keenymcg.github.io/Odin-Rock-Paper-Scissor-JS/", "_blank");
        });
    }    
});


// // FIRSTPROJ IMAGE

// const firstProj = document.querySelector('.firstProj');
// const projects = document.querySelector('#projects');

// function fadeImageIn() {
//     const projectsPosition = projects.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     if (projectsPosition < windowHeight / 2) { /* if the projects section is visible in the viewport */
//       firstProj.classList.add('fade-in'); /* add the fade-in class to the image */
//     };
// }
// window.addEventListener('scroll', fadeImageIn); /* listen for scroll events */


// GITCODE IMAGES

const gitCodeImgs = document.querySelectorAll('.gitCode');

gitCodeImgs.forEach(img => {
    img.style.opacity = '0.5';
    img.style.transition = 'opacity 0.5s';

    img.addEventListener('mouseover', () => {
        img.style.opacity = '0.9';
        img.style.transition = 'opacity 0.5s';
    });

    img.addEventListener('mouseout', () => {
        img.style.opacity = '0.5';
        img.style.transition = 'opacity 0.5s';
    });

    if (img.id === 'dashGit') {
        img.addEventListener('click', (event) => {
            event.preventDefault();
            window.open("https://github.com/keenymcg/Odin_Admin_Dash");
        });
    } else if (img.id === 'etchGit') {
        img.addEventListener('click', (event) => {
            event.preventDefault();
            window.open("https://github.com/keenymcg/Odin_Etch_a_sketch");
        });
    } else if (img.id === 'calcGit') {
        img.addEventListener('click', (event) => {
            event.preventDefault();
            window.open("https://github.com/keenymcg/Odin_Calculator");
        });
    } else if (img.id === 'rpsGit') {
        img.addEventListener('click', (event) => {
            event.preventDefault();
            window.open("https://github.com/keenymcg/Odin-Rock-Paper-Scissor-JS");
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
        img.addEventListener('click', (event) => {
            event.preventDefault();
            window.open("https://www.linkedin.com/in/keenanmcguckin/");
        });
    } else if (img.id === 'gitHub') {
        img.addEventListener('click', (event) => {
            event.preventDefault();
            window.open("https://github.com/keenymcg");
        });
    } else if (img.id === 'insta') {
        img.addEventListener('click', (event) => {
            event.preventDefault();
            window.open("https://www.instagram.com/keenoman_photography/");
        });
    }    
});
