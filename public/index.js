import PF from "pathfinding";

const grid = document.querySelector(".grid");
const rowInput = document.querySelector("#row");
const columnInput = document.querySelector("#column");
const updateButton = document.querySelector("#update");

const gridGraph = new PF.Grid(rowInput.value, columnInput.value);
const finder = new PF.AStarFinder();

updateButton.addEventListener("click", () => {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${columnInput.value}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rowInput.value}, 1fr)`;
  gridGraph.setWalkableAt(0, 0, false);
  gridGraph.setWalkableAt(rowInput.value - 1, columnInput.value - 1, false);

  const path = finder.findPath(
    0,
    0,
    rowInput.value - 1,
    columnInput.value - 1,
    gridGraph
  );

  for (let i = 0; i < rowInput.value * columnInput.value; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    if (i === 0) {
      gridItem.classList.add("start");
    } else if (i === rowInput.value * columnInput.value - 1) {
      gridItem.classList.add("end");
    } else if (path.includes(i)) {
      gridItem.classList.add("clear");
    } else {
      gridItem.classList.add("filled");
    }
    grid.appendChild(gridItem);
  }
});

window.onload = function () {
  grid.innerHTML = "";
  rowInput.value = 10;
  columnInput.value = 10;
  grid.style.gridTemplateColumns = `repeat(${columnInput.value}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rowInput.value}, 1fr)`;
  gridGraph.setWalkableAt(0, 0, false);
  gridGraph.setWalkableAt(rowInput.value - 1, columnInput.value - 1, false);
  const path = finder.findPath(
    0,
    0,
    rowInput.value - 1,
    columnInput.value - 1,
    gridGraph
  );

  for (let i = 0; i < rowInput.value * columnInput.value; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    if (i === 0) {
      gridItem.classList.add("start");
    } else if (i === rowInput.value * columnInput.value - 1) {
      gridItem.classList.add("end");
    } else if (path.includes(i)) {
      gridItem.classList.add("clear");
    } else {
      gridItem.classList.add("filled");
    }
    grid.appendChild(gridItem);
  }
};
