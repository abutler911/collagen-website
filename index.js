const imageArray = [
  "./public/imgs/testimonials/testimonial1.jpg",
  "./public/imgs/testimonials/testimonial2.jpg",
  "./public/imgs/testimonials/testimonial3.jpg",
  "./public/imgs/testimonials/testimonial4.jpg",
  "./public/imgs/testimonials/testimonial5.jpg",
  "./public/imgs/testimonials/testimonial6.jpg",
  "./public/imgs/testimonials/testimonial7.png",
  "./public/imgs/testimonials/testimonial8.png",
  "./public/imgs/testimonials/testimonial9.png",
  "./public/imgs/testimonials/testimonial10.png",
  "./public/imgs/testimonials/testimonial11.jpg",
  "./public/imgs/testimonials/testimonial12.jpg",
  "./public/imgs/testimonials/testimonial13.jpg",
  "./public/imgs/testimonials/testimonial14.jpg",
  "./public/imgs/testimonials/testimonial15.png",
  "./public/imgs/testimonials/testimonial16.jpg",
  "./public/imgs/testimonials/testimonial17.png",
  "./public/imgs/testimonials/testimonial18.png",
  "./public/imgs/testimonials/testimonial19.jpg",
  "./public/imgs/testimonials/testimonial20.jpg",
];

const randomImage = document.querySelector("#random-image-button");
const imageGallery = document.querySelector(".image-gallery");

const getRandomImage = function () {
  const randomNumber = Math.floor(Math.random() * imageArray.length);
  const image = imageArray[randomNumber];
  return image;
};

randomImage.addEventListener("click", () => {
  const image = getRandomImage();
  const imageElement = document.createElement("img");
  const imageContainer = document.createElement("div");

  imageElement.setAttribute("src", image);
  imageElement.classList.add("img-fluid", "img-thumbnail");

  imageContainer.classList.add("col-md-4", "mt-3", "col-lg-3");
  imageContainer.appendChild(imageElement);

  imageGallery.innerHTML = "";
  imageGallery.appendChild(imageContainer);
});
