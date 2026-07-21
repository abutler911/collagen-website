// Optimized customer photos live in public/imgs/gallery as gallery-01.webp … gallery-97.webp
const GALLERY_PHOTO_COUNT = 97;
const photos = Array.from({ length: GALLERY_PHOTO_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `./public/imgs/gallery/gallery-${n}.webp`;
});

const testimonials = [
  "I had an achy tennis elbow. I've had it for about 10 years. It's completely gone. &#128512;",
  "Knee pain gone! I can sit criss cross applesauce for the first time in like 6 years!",
  "Being a very active person and playing pickleball 3-5 times a week, I developed some left hip issues. It was a deep pain/ache. After 2 weeks on the collagen, it hasn't come back!",
  "For about a year, my right knee has had shooting pains when I would run, lift, squat or even sometimes go down stairs. Since starting this collagen, it hasn't hurt a bit!",
  "5 days in I noticed the throbbing down my left leg from hip to knee gone. I could ALWAYS feel it while driving one car in particular AND after getting in bed at night. Gone...day 25 now, more pains gone little by little every day. I'm so so so happy!!",
  "Torn meniscus pain...almost gone. It's been killing me for 3 months. Activate collagen just 2 weeks.",
  "Softer skin, a glow, firm skin like my post pregnancy belly, higher metabolism, helped with weight loss.",
  "My nails are very strong. Don't break or chip! My knees don't hurt going up and down stairs!! My skin is softer and cellulite in my legs has disappeared!! &#10084;&#10084;&#10084;",
  "Love this collagen! Have tried powdered collagen but forgot about it or it doesn't taste great. Have seen so many awesome improvements with this liquid collagen. The scar on my nose has diminished a lot!! My crepey skin on arms, neck and legs is gone!! Definitely not going to stop using it! &#10084;",
  "My neck skin is so much tighter!! My skin is more hydrated!! Less wrinkles!!!",
  "My nails and hair are incredibly thicker! Also, my fine lines are minimized, and eye lids lifted slightly. And my eyelashes are growing awesome too!",
  "Outside healthier skin, the amazing joint pain reduction.",
];

// Rotating inspirational quotes for the hero (shown locally — no API call)
const inspirationalQuotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Taking care of yourself doesn't mean me first, it means me too.", author: "L.R. Knost" },
  { text: "Investing in yourself is the best investment you will ever make.", author: "Robin Sharma" },
  { text: "Self-care is how you take your power back.", author: "Lalah Delia" },
  { text: "Beauty begins the moment you decide to be yourself.", author: "Coco Chanel" },
  { text: "Nothing makes a woman more beautiful than the belief that she is beautiful.", author: "Sophia Loren" },
  { text: "To keep the body in good health is a duty; otherwise we shall not be able to keep our mind strong and clear.", author: "Buddha" },
  { text: "Happiness is the highest form of health.", author: "Dalai Lama" },
  { text: "The groundwork for all happiness is good health.", author: "Leigh Hunt" },
  { text: "Confidence is the best accessory you can own.", author: "Anonymous" },
  { text: "Glow from the inside out.", author: "Anonymous" },
  { text: "Small daily habits create big transformations.", author: "Anonymous" },
];

function selectRandomItems(arr, numItems) {
  const shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(numItems, shuffled.length));
}

// Hero quote
(function showQuote() {
  const quoteContainer = document.querySelector("#quote");
  const authorContainer = document.querySelector("#author");
  if (!quoteContainer || !authorContainer) return;
  const quote =
    inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
  quoteContainer.textContent = quote.text;
  authorContainer.textContent = `— ${quote.author}`;
})();

// Before & after photo gallery
const photoGallery = document.querySelector("#photo-gallery-grid");
if (photoGallery) {
  const randomPhotos = selectRandomItems(photos, 12);
  randomPhotos.forEach((src, index) => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-3";
    const image = document.createElement("img");
    image.className = "gallery-thumb lightbox-item";
    image.src = src;
    image.loading = "lazy";
    image.alt = `Customer before-and-after photo ${index + 1}`;
    col.appendChild(image);
    photoGallery.appendChild(col);
  });
}

// Testimonial cards
const testimonialGrid = document.querySelector("#testimonial-grid");
if (testimonialGrid) {
  const randomTestimonials = selectRandomItems(testimonials, 6);
  randomTestimonials.forEach((text) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    const card = document.createElement("blockquote");
    card.className = "testimonial-card";
    const quoteText = document.createElement("p");
    quoteText.innerHTML = text;
    card.appendChild(quoteText);
    col.appendChild(card);
    testimonialGrid.appendChild(col);
  });
}

// Lightbox for gallery photos and the comparison chart
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
if (lightbox && lightboxImage) {
  document.addEventListener("click", (event) => {
    const item = event.target.closest(".lightbox-item");
    if (item) {
      lightboxImage.src = item.src;
      lightboxImage.alt = item.alt || "Enlarged photo";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      return;
    }
    if (!lightbox.hidden && event.target.closest("#lightbox")) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

// Back-to-top button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Collapse the mobile navbar after tapping a section link
document.querySelectorAll(".site-navbar .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.querySelector("#navbarNav");
    if (nav && nav.classList.contains("show") && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});

// Footer copyright year
const yearEl = document.getElementById("copyright-year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Animate-on-scroll
if (typeof AOS !== "undefined") {
  AOS.init({ duration: 700, once: true, offset: 80 });
}
