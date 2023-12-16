const myButton = document.querySelector("button");
const img = document.querySelector("img");
const images = ["img1.jpeg", "img2.webp", "img3.webp", "img4.jpeg"];


myButton.addEventListener("click", changeImg);

function changeImg() {
   
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    img.src = "img/img3.webp", images[randomIndex];

}