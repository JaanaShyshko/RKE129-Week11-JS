const currentMainImg = document.querySelector(".gallery-img4 img");
const imgToChoosForm = document.querySelectorAll(".gallery img")

imgToChoosForm.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
    imgToChoosForm.forEach(img => img.style.opacity = 1);
    currentMainImg.src = e.target.src;
    e.target.style.opacity = 0.5;
}