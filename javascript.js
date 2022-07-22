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

// --Mouse over--
function mouseOver () {
    document.querySelectorAll(".square").forEach((sqr) => {
        sqr.addEventListener('mouseover', () => {
            sqr.setAttribute("style", "background: white; opacity: 1")
        })
    })
}

// --paint rainbow--
function rainbow () {
    document.querySelectorAll(".square").forEach((sqr) => {
        sqr.addEventListener("mouseover", () => {
            sqr.setAttribute("style", `background: rgb(${rgbColor()}); opacity: 1`)})
        })
}

// --shading func--
function shading() {
    document.querySelectorAll(".square").forEach((sqr) => {
        sqr.addEventListener("mouseover", () => {
            sqr.setAttribute("style", `background: rgba(0, 0, 0, ${opacity()})`);
        })
    })
}

// --generate random integer 0-255--
function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

// --generate random rgb color--
function rgbColor () {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r, g, b];
}

// --opacity--
/*function opacity() {
    let opct = 0.1;
    document.querySelectorAll(".square").forEach((sqr) => {
        opct = window.getComputedStyle(sqr).getPropertyValue("opacity");
        //console.log(opct);
    })
    //console.log(opct);
    return (opct += 0.1);
}*/

// --Button for grid size--
document.querySelector(".gridSize").addEventListener('click', () => {
    let gSize = document.querySelector(".gridSize").innerHTML;
    if (gSize == "Start") {
        document.querySelector(".gridSize").innerHTML = "Grid Size";
    }
    document.querySelector(".defaultMode").classList.remove("on");
    document.querySelector(".rainbowMode").classList.remove("on");
    clearGrid();
    defineSize();
})

// --button for rainbow mode--
document.querySelector(".rainbowMode").addEventListener("click", () => {
    document.querySelector(".rainbowMode").classList.add("on");
    document.querySelector(".defaultMode").classList.remove("on");
    rainbow ();
})

// --button for default mode--
document.querySelector(".defaultMode").addEventListener("click", () => {
    document.querySelector(".defaultMode").classList.add("on");
    document.querySelector(".rainbowMode").classList.remove("on");
    mouseOver();
})

// --button for clear--
document.querySelector(".clear").addEventListener("click", () => {
    document.querySelectorAll(".square").forEach((sqr) => {
        sqr.setAttribute("style", "background: skyblue")
    })
})

// --button for shading--
/*document.querySelector(".shading").addEventListener("click", () => {
    shading();
})*/