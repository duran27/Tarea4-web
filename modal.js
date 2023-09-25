
const clickZoomImages = document.querySelectorAll(".click-zoom-image");
const imageCaptions = document.querySelectorAll(".image-caption");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementById("closeModal");

clickZoomImages.forEach(function (image, index) {
  image.addEventListener("click", function () {
    modal.style.display = "block";
    modalImage.src = image.src;
    captionText.innerHTML = imageCaptions[index].textContent;
  });
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

