const debug = false;

// Add  borders around all content for debugging
const allElements = document.querySelectorAll("*");
if (debug) {
  allElements.forEach((element) =>
    element.setAttribute("style", "outline: 2px solid red;")
  );
}
