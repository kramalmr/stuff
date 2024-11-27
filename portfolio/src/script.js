const paragraph = document.getElementById("textHero");
const text = paragraph.innerText;
const words = text.split(" ");
const wordSpans = words.map((word) => `<span>${word}</span>`);
paragraph.innerHTML = wordSpans.join(" ");

const frameHero = document.getElementById("frameHero");
const imgHero = document.getElementById("imgHero");


// DRAGGER

// Select the draggable container
const wrapImg = document.getElementById('wrapImg');

// Variables to store the initial position of the mouse and the element
let isDragging = false;
let offsetX, offsetY;
let dragTimeout; // To handle the hold-to-drag delay

// Event listener for mouse down (when the user clicks and holds)
wrapImg.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Prevent any unwanted default behavior, like text selection.

    // Start the "click and hold" delay
    dragTimeout = setTimeout(() => {
        isDragging = true;
        
        // Get the initial mouse position relative to the element
        offsetX = e.clientX - wrapImg.offsetLeft;
        offsetY = e.clientY - wrapImg.offsetTop;

        // Add mousemove and mouseup event listeners to handle dragging
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }, 0); // Delay of 200ms before allowing dragging

});

// Function to handle the dragging effect
function onMouseMove(e) {
    if (!isDragging) return;

    // Calculate new position
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    // Update the element's position
    wrapImg.style.position = 'absolute';
    wrapImg.style.left = `${newX}px`;
    wrapImg.style.top = `${newY}px`;
    wrapImg.style.transform = 'scale(1.1)';
    imgHero.style.boxShadow = '0px 40px 50px 10px rgba(0, 0, 0, 0.4)';
    
}

// Function to stop the dragging
function onMouseUp() {
    if (isDragging) {
        isDragging = false;
        imgHero.style.boxShadow = '0px 40px 50px 10px rgba(0, 0, 0, 0.0)';
        wrapImg.style.transform = 'scale(1)';
        clearTimeout(dragTimeout); // Clear the timeout in case dragging was canceled before 200ms
    }
    
    // Remove the event listeners for mousemove and mouseup
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

}