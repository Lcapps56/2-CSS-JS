// Select the container with the class "tabs-box" and save its reference in the tabsBox constant
const tabsBox = document.querySelector(".tabs-box")
const arrowIcons = document.querySelectorAll(".icon i");
let isDragging = false;

const handleIcons = () => {
    let scrollVal = tabsBox.scrollLeft
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex":"none"
    arrowIcons[1].parentElement.style.display = scrollVal > 0 ? "flex":"none"
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        tabsBox.scrollLeft += icon.id ==="left" ? -350:350
        setTimeout(() => handleIcons(), 50)
    });
});

// function telling element "tabsBox to scroll left by the value that the mouse is moving to the left (mose moves 10 px's, scroll left 10 px's)"
const dragging = (e) => {
    if(!isDragging) return
    tabsBox.scrollLeft -= e.movementX;
    tabsBox.classList.add('dragging')
}

const dragStop = () => {
    isDragging = false
    tabsBox.classList.remove('dragging')
}

// // add an event listener to the tabsBox listening for an event type of "mousemove" which induces a callback f
// // called dragging()
tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

