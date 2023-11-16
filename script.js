// * Scroll event
window.addEventListener("wheel", function (event) {
  if (event.deltaY < 0) {
    // Scroll up
  } else if (event.deltaY > 0) {
    // Scroll down
  }
});

// * Touchscreen scroll event
// Touch start point
let touchStart;
window.addEventListener("touchstart", (e) => {
  touchStart = e.targetTouches[0].clientY;
});

window.addEventListener("touchend", function (e) {
  // Touch end position
  let touchEnd = e.changedTouches[0].clientY;
  // Breakpoint for activating touch event
  let deltaTouch = 10;
  if (Math.abs(touchEnd - touchStart) > deltaTouch) {
    if (touchStart < touchEnd) {
      // Scroll up
    } else if (touchStart > touchEnd) {
      // Scroll down
    }
  }
});
