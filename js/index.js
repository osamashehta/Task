const img = document.querySelector(".mainImg img");
const arrowRight = document.querySelector(".arrowRight");
const arrowLeft = document.querySelector(".arrowLeft");
const smallImg = document.querySelectorAll(".smallImg img");

let index = 0;

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", (e) => {
    img.setAttribute("src", e.target.getAttribute("src"));
  });
}
arrowRight.addEventListener("click", () => {
  index++;
  if (index == smallImg.length) index = 0;
  let nextImg = smallImg[index].getAttribute("src");
  img.setAttribute("src", nextImg);
});

arrowLeft.addEventListener("click", () => {
  index--;
  if (index == -1) index = smallImg.length - 1;
  let prevImg = smallImg[index].getAttribute("src");
  img.setAttribute("src", prevImg);
});
