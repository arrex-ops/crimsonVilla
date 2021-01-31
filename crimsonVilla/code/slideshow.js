var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// Review Section Carousel 
let slideTotal = document.getElementById('slide_overlay').children.length;
let increment = 0;
let elementObject = document.getElementById( "slide_overlay" );
let currentCard = Math.ceil(slideTotal / 2);
let arrowRight = document.getElementById('right');
let arrowLeft = document.getElementById('left');


function moveSlide(dir) {
  console.log('hello')
  if ((dir === 'right') && (currentCard < slideTotal)) {
    increment -= 130;
    Array.prototype.forEach.call(elementObject.children, child => {
      child.style.setProperty('transform', ('translateX(' + increment + '%)'));
    });
    currentCard += 1;
    if (currentCard === slideTotal) {
      arrowRight.style.opacity = 0.3;
    }
  } 
  
  else if ((dir === 'left') && (currentCard > 1)) {
    increment += 130;
    Array.prototype.forEach.call(elementObject.children, child => {
      child.style.setProperty('transform', ('translateX(' + increment + '%)'));
    });
    currentCard -= 1;
    if (currentCard === 1) {
      arrowLeft.style.opacity = 0.3;
    }
  }
  if ((currentCard > 1) && (currentCard < slideTotal)) {
    arrowLeft.style.opacity = 1;
    arrowRight.style.opacity = 1;
  }
}

// Alternative Use 
// function moveSlide(n) {
//   if ((n === 'right') && (currentSlide < slideTotal)) {
//     increment -= 15;
//     elementObject.style.setProperty('transform', ('translateX(' + increment + 'rem)'));
//     currentSlide += 1;
//   } 
  
//   else if ((n === 'left') && (currentSlide > 1)) {
//     increment += 15;
//     elementObject.style.setProperty('transform', ('translateX(' + increment + 'rem)'));
//     currentSlide -= 1;
//   }  
// }