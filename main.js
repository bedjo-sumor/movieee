let slideIndex = 1;
// var navbar = document.getElementById("navbar"); 
// var navOffset = navbar.offsetTop;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-fade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


function expandImage(imgs,container_id) {
  var expandImg = document.getElementById("expandedImg-"+container_id);
  var imgText = document.getElementById("imgtext-"+container_id);
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

// window.addEventListener("scroll", () => {
//   (window.scrollY >= navOffset) ? 
//       navbar.classList.add("fixed-nav") : 
//       navbar.classList.remove("fixed-nav")
// });



