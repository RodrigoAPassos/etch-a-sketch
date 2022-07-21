// --create n lines of n divs--
function createGrid (n) {
    const gridContainer = document.querySelector(".gridContainer");
    let i = 0;

    while (i < n) {
        let line = createLine(n);
        gridContainer.appendChild(line);
        i++;
    }
}
// --create a line of n divs--
function createLine (n) {
    const lines = document.createElement("p");
    lines.classList.add("line");

    for (let i = 0; i < n; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        lines.appendChild(square);
    }
    return lines;
}

// --ask size call createGrid--
function defineSize () {
    let size = prompt("Please enter a size up to 100 for the sides of the grid: ", "16");
    if (size > 100 || size <= 0) {
        defineSize();
    } else createGrid(size);
}

// --func to clear grid before remake--
function clearGrid() {
    const gridContainer = document.querySelector(".gridContainer");
    const lines = document.querySelectorAll(".line");

    lines.forEach((lin) => {
        gridContainer.removeChild(lin)
    })
}

// --paint a sqr--
function paint (sqr) {
    sqr.classList.add("painted");
}

//createGrid(64);
// --Mouse over--
function mouseOver () {
    document.querySelectorAll(".square").forEach((sqr) => {
        sqr.addEventListener('mouseover', () => {
            paint(sqr);
            console.log("chamado")
        })
    })
}

// --Button for grid size--
document.querySelector(".gridSize").addEventListener('click', () => {
    clearGrid();
    defineSize();
    mouseOver();
})