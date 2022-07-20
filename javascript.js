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


const square = document.querySelectorAll(".square");
console.log(square);
square.forEach(sqr => {
    sqr.addEventListener('click', () => {
        paint();
        console.log("chamado");
    })
})

function paint () {
    square.classList.add("painted");
    console.log("fui chamado");
}

//gridContainer.addEventListener("mouseover", () => paint());

createGrid(16);