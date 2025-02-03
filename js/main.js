let images = Array.from(document.querySelectorAll("figure>img"));
const popupLayer = document.querySelector(".popup-layer");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".fa-xmark");
const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
let imageIndex;

// Add Event to all Images and change Figure src...
images.map((image, index) => {
  image.addEventListener("click", (e) => {
    let clickedImage = e.target.getAttribute("src");
    popupLayer.style.display = "flex";
    modal.style.backgroundImage = `url(${clickedImage})`;
    imageIndex = index;
  });
});

// Get Next Image Function...
function getNextImage() {
  imageIndex++;
  if (imageIndex == images.length) {
    imageIndex = 0;
  }
  let currentImageSrc = images[imageIndex].getAttribute("src");
  console.log(currentImageSrc);
  modal.style.backgroundImage = `url(${currentImageSrc})`;
}
rightArrow.addEventListener("click", getNextImage);

// Get Previous Image Function...
function getPrevImage() {
  imageIndex--;
  if (imageIndex == -1) {
    imageIndex = images.length - 1;
  }
  let currentImageSrc = images[imageIndex].getAttribute("src");
  console.log(currentImageSrc);
  modal.style.backgroundImage = `url(${currentImageSrc})`;
}
leftArrow.addEventListener("click", getPrevImage);

// close Modal Function...
function closeModal() {
  popupLayer.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);
popupLayer.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup-layer")) closeModal();
});

// Document Events...
document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") closeModal();
  if (e.code == "ArrowRight") getNextImage();
  if (e.code == "ArrowLeft") getPrevImage();
});
