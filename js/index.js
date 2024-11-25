let bodyImg = document.querySelector(".gallery__img");
let bakcButton = document.querySelector(".gallery__back");
let nextButton = document.querySelector(".gallery__next");

bodyImg.addEventListener("wheel", (eve) => {
  eve.preventDefault();
  bodyImg.scrollLeft += eve.deltaY;
});

bakcButton.addEventListener("click", () => {
  bodyImg.scrollLeft -= 1100;
});

nextButton.addEventListener("click", () => {
  bodyImg.scrollLeft += 1100;
});
