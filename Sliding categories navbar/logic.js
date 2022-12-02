// Select the container with the class "tabs-box" and save its reference in the tabsBox constant
const tabsBox = document.querySelector(".tabs-box")

let isDragging = false;

// function telling element "tabsBox to scroll left by certan pixel amount set by e.movementX"
const dragging = (e) => {
    if(!isDragging) return
    tabsBox.scrollLeft -= e.movementX
}

// // add an event listener to the tabsBox listening for an event type of "mousemove" which induces a callback f
// // called dragging()
tabsBox.addEventListener("mousedown", () => isDragging = false)
tabsBox.addEventListener("mousemove", dragging)

