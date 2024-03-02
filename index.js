const images = document.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    alert(`You clicked on image ${image.src}`);
  });
});