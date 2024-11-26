const submit = document.getElementById("submit");
// const box = document.getElementById("box");

// submit.addEventListener("mouseover", () => {
//   setTimeout(() => {
//     overflowOff();,
//     1000
//   })
// });

// submit.addEventListener("mouseout", () => {
//   box.style.overflow = "hidden";
// });

// function overflowOff() {box.style.overflow = "visible";}


// HOVER

const paragraph = document.getElementById("text");

const text = document.getElementById("text").innerText;

const words = text.split(" ");

const wordSpans = words.map((word) => `<span>${word}</span>`);

paragraph.innerHTML = wordSpans.join(" ");

const spans = paragraph.querySelectorAll("span");

spans.forEach((span) => {
  const textSpan = span.innerText;
  span.addEventListener("mouseenter", function () {
    span.innerText = "Akram";
  });
  span.addEventListener("mouseleave", function () {
    span.innerText = textSpan;
  });
});

submit.addEventListener("click", () => {
  alert("Button Clicked");
});




