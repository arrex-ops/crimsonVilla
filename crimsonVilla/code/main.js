// Circular Nav Menu Animation

let navIncrement = 6;
const circularNavButtonContainer = document.getElementById('circular_nav_container');
const circularNavButton = document.getElementById('circular_nav_button');
const actionButton = document.getElementById('nav_action_button');
const actionNavContainer = document.getElementById('animation_expand_container');
let navStatus = false;
let counter = 1;

function navMove(num) {
    let newNum = counter + num;
    if (newNum % 2 === 0) { 
        navExpand(); 
        navOpacityUp();
    }
    else { 
        navCollapse();
        navOpacityDown();
    }
    counter += 1;
}

function navExpand() {
    Array.prototype.forEach.call(circularNavButtonContainer.children, child => {
        if ((child.id != 'nav_action_button') && (child.id != 'animation_expand_container')) {
            child.style.setProperty('transform', ('translateY(-' + navIncrement + 'rem)'));
            circularNavButtonContainer.style.setProperty('opacity', ('1'));
            navIncrement += (6 - 2);
        }
    });
    actionNavContainer.style.setProperty('transform', ('translateY(-' + (navIncrement - 4) + 'rem'));
    actionNavContainer.style.setProperty('height', ((navIncrement) + 'rem'));
    actionNavContainer.style.setProperty('z-index', '11');
    actionButton.style.setProperty('transform', 'rotateX(180deg)');
}

function navCollapse() {
    Array.prototype.forEach.call(circularNavButtonContainer.children, child => {
        if ((child.id != 'nav_action_button') && (child.id != 'animation_expand_container')) {
            navIncrement = 6
            child.style.setProperty('transform', ('translateY(' + navIncrement + 'rem'));
            navIncrement += (6 - 2);
        }
    });
    navIncrement = 6;
    actionButton.style.setProperty('transform', 'rotateX(0deg)')
    actionButton.style.setProperty('opacity', '0.5')
    actionNavContainer.style.setProperty('height', '60px')
    actionNavContainer.style.setProperty('transform', ('translateY(0'));
    actionNavContainer.style.setProperty('z-index', '12');
}

function navOpacityDown() {
    setTimeout(() => {
        Array.prototype.forEach.call(circularNavButtonContainer.children, child => {
            if ((child.id != 'nav_action_button') && (child.id != 'animation_expand_container')) {
            child.style.setProperty('opacity', 0);
            }
        });
    }, 150)
}

function navOpacityUp() {
    setTimeout(() => {
        Array.prototype.forEach.call(circularNavButtonContainer.children, child => {
            if (child.id != 'animation_expand_container') {
                child.style.setProperty('opacity', 1);
            };
        });
    }, 150);
} 

// Slideshow Carousel Animation 
let playState = true;

function pauseAnimation() {
    const slideOverlay = document.getElementById('slide_overlay');
    if (playState === false) {
        Array.prototype.forEach.call(slideOverlay.children, child => {
            child.style.animationPlayState = 'running';
        });
        playState = true;
    }
    else {
        Array.prototype.forEach.call(slideOverlay.children, child => {
            child.style.animationPlayState = 'paused';
        });
        playState = false;
    }
}


// Explore button animation 
// const middleArrow = document.getElementById('middle');
// const bottomArrow = document.getElementById('bottom');
// function exploreArrowDown() {
//     middleArrow.style.marginTop = '6rem';
//     bottomArrow.style.marginTop = '8rem';
// }
// function exploreArrowUp() {
//     middleArrow.style.marginTop = '4rem';
//     bottomArrow.style.marginTop = '4rem';
// }


// Opacity On Scroll Animation 
// let targetEle;
// let i = 0;

// window.addEventListener("load", (event) => {
//   targetEle = document.getElementsByClassName('theme_container');
//   createObserver();
// }, false);

// function createObserver() {
//   let observer;

//   let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.05
//   };

//   observer = new IntersectionObserver(handleIntersect, options);
//   observer.observe(targetEle[i]);
// }

// function handleIntersect(entries, observer) {
//     let overlayOnePos = 'skew(45deg, -25deg) rotate(70deg)'
//     let overlatTwoPos = 'rotate(-10deg)'
//     let overlatThreePos = 'rotate(-35deg) translate(-5rem)'
//     let status = false;
//     entries.forEach((entry) => {
//         if (!entry.isIntersecting) {
//         return;
//         } if (status) {
//             return;
//         } else {
//             entry.target.style.opacity = 1;
//             entry.target.style.marginTop = 0;
//             if (entry.target.id === 'first_section') {
//                 entry.target.children[0].style.setProperty('transform', overlayOnePos)
//             } else if (entry.target.id === 'second_section') {
//                 entry.target.children[0].style.setProperty('transform', overlatTwoPos)
//             } else if (entry.target.id === 'fourth_section') {
//                 entry.target.children[0].style.setProperty('transform', overlatThreePos)
//             }
//         }
//     });
//     status = true;
//     if (i === targetEle.length) {
//         return;
//     } else {
//         i += 1;
//         createObserver();
//     }
// }



