const debug = false;

// Add  borders around all content for debugging
const allElements = document.querySelectorAll("*");
if (debug) {
  allElements.forEach((element) =>
    element.setAttribute("style", "outline: 2px solid red;")
  );
}

const grid = document.querySelector('.etch-a-sketch');
const gridBGColor = '#cccccc'
let clearGrid = () => {
  grid.childNodes.forEach(
    element => {
      if (element.style){
      element.style.backgroundColor = gridBGColor
      }
    }
  )
}

