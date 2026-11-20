// Initialize Flickity
document.addEventListener("DOMContentLoaded", function() {
  var elem = document.getElementById('slideshow');
  if (elem) {
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'center',
      imagesLoaded: true,
      setGallerySize: false,
      wrapAround: true
    });
  }
});
