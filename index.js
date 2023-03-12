const quoteContainer = document.querySelector("#quote");
const author = document.querySelector("#author");
const photoGallery = document.querySelector("#photo-gallery");

let url = "https://type.fit/api/quotes";

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

AOS.init();

const photos = [
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

for (i = 0; i < photos.length; i++) {
  const element = document.createElement("div");
  element.setAttribute("class", "col-md-4 mt-3 col-lg-3");

  const image = document.createElement("img");
  image.setAttribute("class", "img-fluid img-thumbnail");
  image.setAttribute("data-aos", "fade");
  image.setAttribute("data-aos-duration", "2000");
  image.setAttribute("src", photos[i]);
  element.appendChild(image);
  photoGallery.appendChild(element);
}
