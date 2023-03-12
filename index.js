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

const testimonials = [
  "I had an achy tennis elbow. I've had it for about 10 years. It's completely gone. &#128512",
  "Knee pain gone! I can sit criss cross applesauce for the first time in like 6 years!",
  "Being a very active person and playing pickleball 3-5 times a week, I developed some left hip issues. It was a deep pain/ache. After 2 weeks on the collagen, it hasn't come back!",
  "For about a year, my right knee has had shooting pains when I would run, lift, squat or even sometimes go down stairs. Since starting this collagen, it hasn't hurt a bit!",
  "5 days in I noticed the throbbing down my left leg from hip to knee gone. I could ALWAYS feel it while driving one car in particular AND after getting in bed at night. Gone...day 25 now, more pains gone little by little every day. I'm so so so happy!!",
  "Torn miniscus pain...almost gone. It's been killing me for 3 months. Activate collagen just 2 weeks.",
  "Softer skin, a glow, firm skin like my post pregnancy belly, higher metabolism, helped with weight loss.",
  "My nails are very strong. Don't break or chip! My knees don't hurt going up and down stairs!! My skin is softer and cellulite in my legs has disappeared!! &#10084; &#10084; &#10084;",
  "Love this collagen! Have tried powdered collagen but forgot about it or doesn't taste great. Have seen so many awesome improvements with this liquid collagen. Scar on my nose has diminished a lot!! Tried all kinds of scar creams with little to no change. My crepey skin on arms, neck and legs is gone!! Turkey neck gone! Definitely not going to stop using it! &#10084;",
  "My neck skin is so much tighter!! My skin is more hydrated!! Less wrinkles!!!",
  "My nails and hair are incredibly thicker! Also, my fine lines are minimized, and eye lids lifted slightly. MOST exciting, the dermatitis I had since January (horrible rash with itching burning blisters all over chin/jaw plus hundreds of bumps on forehead) is 90% GONE! I tried all sorts of things and nothing worked - I never expected the collagen to do this but I am so grateful! And my eyelashes are growing awesome too!",
  "Outside healthier skin, the amazing joint pain reduction.",
];

const quoteContainer = document.querySelector("#quote");
const author = document.querySelector("#author");
const url = "https://type.fit/api/quotes";
const photoGallery = document.querySelector("#photo-gallery");
const testimonialSection = document.querySelector("#testimonials");
const numberOfPhotos = 15;
const randomPhotos = selectRandomItems(photos, numberOfPhotos);
const numberOfTestimonials = 5;
const randomTestimonials = selectRandomItems(
  testimonials,
  numberOfTestimonials
);

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

for (i = 0; i < randomPhotos.length; i++) {
  const element = document.createElement("div");
  element.setAttribute("class", "col-md-4 mt-3 col-lg-3");
  const image = document.createElement("img");

  setAttributes(image, {
    class: "img-fluid img-thumbnail",
    "data-aos": "fade",
    "data-aos-duration": "2000",
    src: randomPhotos[i],
  });
  element.appendChild(image);
  photoGallery.appendChild(element);
}

for (i = 0; i < randomTestimonials.length; i++) {
  const element = document.createElement("div");
  element.setAttribute("class", "col-md-4");
  const quote = document.createElement("blockquote");
  const quoteText = document.createElement("p");
  quoteText.innerHTML = randomTestimonials[i];

  setAttributes(quote, {
    class: "quote-border-left quote-border-right",
    "data-aos": "flip-down",
    "data-aos-duration": "1000",
  });
  setAttributes(quoteText, {
    class: "justify-text",
  });
  quote.appendChild(quoteText);
  element.appendChild(quote);
  testimonialSection.appendChild(element);
}

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function selectRandomItems(arr, numItems) {
  if (arr.length < numItems) {
    throw new Error(
      "The number of items to select cannot be greater than the number of items in the array"
    );
  }
  const result = [];
  const usedIndexes = {};
  while (result.length < numItems) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!usedIndexes[randomIndex]) {
      usedIndexes[randomIndex] = true;
      result.push(arr[randomIndex]);
    }
  }
  return result;
}

console.log(randomPhotos);

AOS.init();
