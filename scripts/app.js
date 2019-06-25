let img = document.querySelector(".hero-image .image");

let position = 0;

function nextImg() {
  position++;
  if(position > 3) {
    position = 0;
  }
  img.style['background-image'] = `url("./images/hero-image-${position}.jpg")`;
}

function previousImg() {
  position--;
  if(position < 0) {
    position = 3;
  }
  img.style['background-image'] = `url("./images/hero-image-${position}.jpg")`;
}

const nextButton = img.querySelector('.next-button').addEventListener('click', nextImg);

const previousButton = img.querySelector('.previous-button').addEventListener('click', previousImg);

// img.addEventListener('click', changeImg);
