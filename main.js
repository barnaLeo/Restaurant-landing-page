let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelector('.carousel').querySelectorAll('img');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Add click event listener to the menu items
document.querySelectorAll('.menu a').forEach(item => {
  item.addEventListener('click', function() {
    // Hide all content items
    document.querySelectorAll('.content').forEach(content => {
      content.style.display = 'none';
    });
    // Show the selected content item
    const selectedContentId = this.getAttribute('data-category');
    document.getElementById(selectedContentId).style.display = 'block';
  });
});

