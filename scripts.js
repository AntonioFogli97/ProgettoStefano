let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = $( ".mySlides" );
  for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  let delta
  if (slideIndex - 2 == -1) {delta = slides.length} else { delta = slideIndex - 2 }
  $(slides[delta]).slideDown();
  $(slides[slideIndex]).slideDown();
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  slideIndex++;
}