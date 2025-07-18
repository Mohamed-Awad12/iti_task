const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];

function disableButtons(en) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.textContent != "Stop") {
      button.disabled = en;
    }
  });
}


const imgElement = document.getElementById("slideshow");
imgElement.src = images[1];
let index = 1;
let id = null;

function showImage() {
  const imgElement = document.getElementById("slideshow");
  imgElement.src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

function startSlideshow() {
  if (!id) {
    id = setInterval(nextImage, 1500);

    disableButtons(true);
  }
}

function stopSlideshow() {
  clearInterval(id);
  id = null;
  disableButtons(false);
}
