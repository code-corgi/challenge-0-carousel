let img = document.querySelector(".hero-image .image");

let position = 0;

function nextImg() {
  position++;
  fetch(`https://sgonzo3.github.io/challenge-0-carousel/images/hero-image-${position}.jpg`).then(resp => {
    if(resp.ok) {
      img.style['background-image'] = `url("./images/hero-image-${position}.jpg")`;
    } else {
      position = 0;
      img.style['background-image'] = `url("./images/hero-image-${position}.jpg")`;
    }
  }
);
}

function previousImg() {
  position--;
  fetch(`https://sgonzo3.github.io/challenge-0-carousel/images/hero-image-${position}.jpg`).then(resp => {
    console.log(resp);
    if(resp.ok) {
      img.style['background-image'] = `url("./images/hero-image-${position}.jpg")`;
    } else {
      position = 3;
      img.style['background-image'] = `url("./images/hero-image-${position}.jpg")`;
    }
  }
);
}

img.querySelector('.next-button').addEventListener('click', nextImg);

img.querySelector('.previous-button').addEventListener('click', previousImg);
