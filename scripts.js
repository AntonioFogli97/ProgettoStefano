let gallery = ['cane', 'monte', 'tricheco'];

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function generateDiv(index){
  let box = document.createElement('div');
  let image = document.createElement('img');
  image.style.width = '100%'
  image.src = "./resources/"+ gallery[index] + ".jpg";
  box.appendChild(image);
  let baseBox = document.getElementById('slideshow-container')
  baseBox.insertBefore(box, baseBox.firstChild);
  $(box).hide().slideDown(2000);
  setTimeout(() => { $(box).slideUp(2000); }, 2000);
}

function carousel(){
  generateDiv(0);
}