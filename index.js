var imageModal = document.getElementById('imageModal');

var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("image-modal-caption");
img.onclick = function() {
  imageModal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
}

var imgModalSpan = document.getElementsByClassName("imgClose")[0];

imgModalSpan.onclick = function() {
  imageModal.style.display = "none";
}