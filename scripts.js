let gallery = ['dog', 'mountain', 'walrus'];

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function carousel(index){
  let nextIndex = (index + 1) < gallery.length ? index +1 : 0
  let box = document.createElement('div');
  box.className = "carousel-image"
  let image = new Image();
  image.onclick = function() {
    var previewBox = document.createElement('div');
    var preview = document.getElementById('preview');
    preview.innerHTML = '';
    let imagePreview = new Image();
    imagePreview.src = "./resources/"+ gallery[index] +".jpg";
    previewBox.className = "preview-image";
    previewBox.appendChild(imagePreview);
    preview.appendChild(previewBox);
  }
  image.onload = function() { 
    $(box).slideDown(
      function(){
        setTimeout(function() {
          $(box).slideUp(function(){
            $(box).remove();
          });
          carousel(nextIndex);
        }, 2000)
      });
  };
  image.src = "./resources/"+ gallery[index] +".jpg";
  box.appendChild(image);
  var container = document.getElementById('carousel');
  container.insertBefore(box, container.firstChild);
}

$( document ).ready(carousel(0));