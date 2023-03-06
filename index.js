const quoteContainer = document.querySelector("#quote");
const author = document.querySelector("#author");
// const quoteButton = document.querySelector("#quote-btn");
let url = "https://type.fit/api/quotes";

// quoteButton.addEventListener("click", () => {
//   getQuote().then((quote) => {
//     quoteContainer.innerHTML = quote.text;
//     if (!author) {
//       author.innerHTML = `-- Anonymous`;
//     }
//     author.innerHTML = `-- ${quote.author}`;
//   });
// });

const getQuote = async function () {
  const randomNumber = Math.floor(Math.random() * 1000);
  const response = await fetch(url);
  const data = await response.json();

  return data[randomNumber];
};

getQuote().then((quote) => {
  quoteContainer.innerHTML = quote.text;
  if (!author) {
    author.innerHTML = `-- Anonymous`;
  }
  author.innerHTML = `- ${quote.author}`;
});

// const imageArray = [
//   "./public/imgs/testimonials/testimonial1.jpg",
//   "./public/imgs/testimonials/testimonial2.jpg",
//   "./public/imgs/testimonials/testimonial3.jpg",
//   "./public/imgs/testimonials/testimonial4.jpg",
//   "./public/imgs/testimonials/testimonial5.jpg",
//   "./public/imgs/testimonials/testimonial6.jpg",
//   "./public/imgs/testimonials/testimonial7.png",
//   "./public/imgs/testimonials/testimonial8.png",
//   "./public/imgs/testimonials/testimonial9.png",
//   "./public/imgs/testimonials/testimonial10.png",
//   "./public/imgs/testimonials/testimonial11.jpg",
//   "./public/imgs/testimonials/testimonial12.jpg",
//   "./public/imgs/testimonials/testimonial13.jpg",
//   "./public/imgs/testimonials/testimonial14.jpg",
//   "./public/imgs/testimonials/testimonial15.png",
//   "./public/imgs/testimonials/testimonial16.jpg",
//   "./public/imgs/testimonials/testimonial17.png",
//   "./public/imgs/testimonials/testimonial18.png",
//   "./public/imgs/testimonials/testimonial19.jpg",
//   "./public/imgs/testimonials/testimonial20.jpg",
// ];

// const getRandomImage = function () {
//   const randomNumber = Math.floor(Math.random() * imageArray.length); //generate a random number between 1 and the image array length
//   const image = imageArray[randomNumber]; // assign image the imagearray element at position random number
//   imageArray.splice(randomNumber, 1); //remove the element from the array so it won't be displayed again
//   return image;
// };

// const randomImage = document.querySelector("#random-image-button");
// const imageGallery = document.querySelector(".image-gallery");

// randomImage.addEventListener("click", () => {
//   if (imageArray.length === 1) {
//     // check if the image array is empty - if it is, repopulate it
//     imageArray.push(
//       "./public/imgs/testimonials/testimonial1.jpg",
//       "./public/imgs/testimonials/testimonial2.jpg",
//       "./public/imgs/testimonials/testimonial3.jpg",
//       "./public/imgs/testimonials/testimonial4.jpg",
//       "./public/imgs/testimonials/testimonial5.jpg",
//       "./public/imgs/testimonials/testimonial6.jpg",
//       "./public/imgs/testimonials/testimonial7.png",
//       "./public/imgs/testimonials/testimonial8.png",
//       "./public/imgs/testimonials/testimonial9.png",
//       "./public/imgs/testimonials/testimonial10.png",
//       "./public/imgs/testimonials/testimonial11.jpg",
//       "./public/imgs/testimonials/testimonial12.jpg",
//       "./public/imgs/testimonials/testimonial13.jpg",
//       "./public/imgs/testimonials/testimonial14.jpg",
//       "./public/imgs/testimonials/testimonial15.png",
//       "./public/imgs/testimonials/testimonial16.jpg",
//       "./public/imgs/testimonials/testimonial17.png",
//       "./public/imgs/testimonials/testimonial18.png",
//       "./public/imgs/testimonials/testimonial19.jpg",
//       "./public/imgs/testimonials/testimonial20.jpg"
//     );
//   }
//   const image = getRandomImage();

//   const imageElement = document.createElement("img");
//   imageElement.setAttribute("src", image);
//   imageElement.classList.add("img-fluid", "img-thumbnail");

//   const imageContainer = document.createElement("div");
//   imageContainer.classList.add("col-md-12", "mt-3", "col-lg-12");
//   imageContainer.appendChild(imageElement);

//   imageGallery.innerHTML = "";
//   imageGallery.appendChild(imageContainer);
// });

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
