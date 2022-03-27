const debug = false;

// Add  borders around all content for debugging

const allElements = document.querySelectorAll("*");
if (debug) {
  allElements.forEach((element) =>
    element.setAttribute("style", "outline: 2px solid red;")
  );
}

const grid = document.querySelector(".etch-a-sketch");
const gridBGColor = "#cccccc";

let clearGrid = () => {
  grid.childNodes.forEach((element) => {
    if (element.style) {
      element.style.backgroundColor = gridBGColor;
    }
  });
};

const slider = document.querySelector("#slider");
slider.addEventListener("input", (e) => {
  let numberOfColsRows = slider.value;
  const output = document.querySelector("#size-output");
  output.innerText = slider.value;
  changeNumRowsCols(numberOfColsRows);
  const colorPicker = document.querySelector("#color-picker");

  const boxes = document.querySelectorAll(".box");
  Array.from(boxes).forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      element.style.backgroundColor = colorPicker.value;
    });
  });
});

const changeNumRowsCols = (numRowsCols) => {
  clearGrid();
  const etchASketchBox = document.querySelector(".etch-a-sketch");
  // Remove all current elements in the grid
  Array.from(etchASketchBox.children).forEach((child, index) => {
    etchASketchBox.removeChild(child);
  });
  // Add all elements
  for (let i = 0; i < numRowsCols * numRowsCols; i++) {
    let el = document.createElement("div");
    el.setAttribute("class", "box");
    etchASketchBox.appendChild(el);
  }
  console.log(etchASketchBox);
  etchASketchBox.setAttribute(
    "style",
    `grid-template-columns: repeat(${numRowsCols}, ${100 / numRowsCols}%)`
  );
};

const colorPicker = document.querySelector("#color-picker");

const boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    element.style.backgroundColor = colorPicker.value;
  });
});
