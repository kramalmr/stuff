const body = document.getElementsByTagName("body")[0];

// alert(body.style.display)
body.style.display = "none";

function init() {
  body.style.display = "";
}

// HOVER

const paragraph = document.getElementById("textHero");
const text = paragraph.innerText;
const words = text.split(" ");
const wordSpans = words.map((word) => `<span>${word}</span>`);
paragraph.innerHTML = wordSpans.join(" ");

const frameHero = document.getElementById("frameHero");
const imgHero = document.getElementById("imgHero");

// // DRAGGER

// Select the draggable container
const wrapImg = document.getElementById("wrapImg");

// Variables to store the initial position of the mouse and the element
let isDragging = false;
let offsetX, offsetY;
let dragTimeout; // To handle the hold-to-drag delay

// Event listener for mouse down (when the user clicks and holds)
wrapImg.addEventListener("mousedown", (e) => {
  e.preventDefault(); // Prevent any unwanted default behavior, like text selection.

  // Start the "click and hold" delay
  dragTimeout = setTimeout(() => {
    isDragging = true;

    // Get the initial mouse position relative to the element
    offsetX = e.clientX - wrapImg.offsetLeft;
    offsetY = e.clientY - wrapImg.offsetTop;

    // Add mousemove and mouseup event listeners to handle dragging
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }); // Delay of 200ms before allowing dragging
});

// Function to handle the dragging effect
function onMouseMove(e) {
  if (!isDragging) return;

  // Calculate new position
  const newX = e.clientX - offsetX;
  const newY = e.clientY - offsetY;

  // Update the element's position
  wrapImg.style.position = "absolute";
  wrapImg.style.left = `${newX}px`;
  wrapImg.style.top = `${newY}px`;
  wrapImg.style.transform = "scale(1.1)";
  imgHero.style.boxShadow = "0px 40px 50px 10px rgba(0, 0, 0, 0.4)";
  wrapImg.style.cursor = "grabbing";
}

// Function to stop the dragging
function onMouseUp() {
  if (isDragging) {
    isDragging = false;
    imgHero.style.boxShadow = "0px 40px 50px 10px rgba(0, 0, 0, 0.0)";
    wrapImg.style.transform = "scale(1)";

    wrapImg.style.cursor = "grab";
    clearTimeout(dragTimeout); // Clear the timeout in case dragging was canceled before 200ms
  }

  // Remove the event listeners for mousemove and mouseup
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}
// // NAV

// const nav = document.getElementById("nav");
// const logo = document.getElementById("logo");

document.onscroll = () => {
  if (window.scrollY > 0) {
    nav.style.position = "fixed";
    nav.style.top = "-100px";
    nav.style.transition = "top 0.5s ease 0s";
  } else {
    nav.style.position = "absolute";
    nav.style.top = "0px";
    nav.style.transition = "top 1s ease 0s";
  }
};

// document.onscrollend = () => {
//     nav.style.position = "absolute";
//     nav.style.top = "0px";
//     nav.style.transition = "top 1s ease 0s";
// }

// GOTO FUCTIONS

function gotoSectionAbout(section) {
  const sectionPage = document.getElementById("about");

  // console.log(sectionPage); // This will let you know if the element is found

  if (sectionPage) {
    sectionPage.style.display = "flex"; // Show the section
    sectionPage.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error(`Section with ID '${section}' not found.`);
  }
}

function gotoSectionProjects(section) {
  const sectionPage = document.getElementById("projects");

  if (sectionPage) {
    sectionPage.style.display = "flex"; // Show the section
    sectionPage.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error(`Section with ID '${section}' not found.`);
  }
}

function gotoSectionContact(section) {
  const sectionPage = document.getElementById("contact");

  if (sectionPage) {
    sectionPage.style.display = "flex"; // Show the section
    sectionPage.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error(`Section with ID '${section}' not found.`);
  }
}

// ABOUT

const about = document.getElementById("about");
const buttonAbout = document.getElementsByClassName("buttonAbout");
const textButtonAbout = document.getElementsByClassName("buttonAbout p");

for (let i = 0; i < buttonAbout.length; i++) {
  buttonAbout[i].addEventListener("mouseover", () => {
    buttonAbout[i].addEventListener("click", () => {
      openWindowAbout(i);
    });
  });
}

const windowAbout = document.querySelectorAll(".windowAbout");

const closeWindowAbout = document.querySelectorAll(".closeWindowAbout");
const upButton = document.querySelectorAll(".up-button");

function openWindowAbout(id) {
  windowAbout[id].style.display = "block";
  document.body.style.overflow = "hidden";
  for (let i = 0; i < upButton.length; i++) {
    upButton[i].style.display = "none";
  }
  closeWindowAbout[id].addEventListener("click", () => {
    windowAbout[id].style.display = "none";
    // document.body.style.overflow = "auto";
    for (let i = 0; i < upButton.length; i++) {
      upButton[i].style.display = "block";
    }
  });
}

for (let i = 0; i < closeWindowAbout.length; i++) {
  closeWindowAbout[i].addEventListener("click", () => {
    windowAbout[i].style.display = "none";
    // document.body.style.overflow = "auto";
    upButton.style.display = "block";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const upButtons = document.querySelectorAll(".up-button");

  // Check if buttons exist
  if (upButtons.length === 0) {
    console.log("No upButtons found");
  }

  for (let i = 0; i < upButtons.length; i++) {
    upButtons[i].addEventListener("click", () => {
      console.log("Button clicked!"); // Debugging line
      scrollToTop();
    });
  }

  function scrollToTop() {
    const allSections = document.querySelectorAll(".containerAlt");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Hide sections after scroll
    setTimeout(() => {
      allSections.forEach((section) => {
        section.style.display = "none";
      });
    }, 500); // Adjust if necessary based on scroll time
  }
});

// const marquee = document.getElementById("marquee");
// const marqueeContent = document.getElementById("marquee-content");

// const navLinks = document.querySelectorAll(".navLink");
// // navLinks.forEach((link) => {
// //   link.addEventListener("mouseover", () => {
// //     marqueeContent.style.animationPlayState = "paused";
// //   });
// // }, false);

// custom Cursor About

const customCursorAbout = document.querySelectorAll(".custom-cursor");
const aboutImage = document.querySelectorAll(".floatingImage");

document.addEventListener("mousemove", (e) => {
  customCursorAbout.forEach((cursor) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
});

aboutImage.forEach((image, index) => {
  image.addEventListener("mouseover", () => {
    customCursorAbout[index].style.display = "block";
  });

  image.addEventListener("mouseout", () => {
    customCursorAbout[index].style.display = "none";
  });
});
