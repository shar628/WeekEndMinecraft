const board1 = document.querySelector('.board');
let tool = "shoval";
const shoval1 = document.getElementById("shovel1")
shoval1.addEventListener("click", function () {
    tool = "shoval";
})
const axe1 = document.getElementById("axe1")
axe1.addEventListener("click", function () {
    tool = "axe";
})
const pickaxe1 = document.getElementById("pickaxe1")
pickaxe1.addEventListener("click", function () {
    tool = "pickaxe";
})
for (let i = 0; i < 12; i++) {
    const div1 = document.createElement("div")
    const img1 = document.createElement("img")
    img1.setAttribute("data-type", "sky")
    img1.src = "images/sky1.png"
    img1.alt = "sky";
    div1.appendChild(img1);
    board1.appendChild(div1);
}
for (let i = 0; i < 12; i++) {
    const div1 = document.createElement("div")
    const img1 = document.createElement("img")
    img1.setAttribute("data-type", "tree_trunk")
    img1.addEventListener("click", function (event) {
        const type = event.target.getAttribute("data-type")
        if (tool === "axe") {
            if (type === "tree_trunk") {
                event.target.src = "images/smily3.jpg"
            }
        }
    });
    img1.src = "images/tree trunk.png"
    img1.alt = "tree";
    div1.appendChild(img1);
    board1.appendChild(div1);
}
for (let i = 0; i < 12; i++) {
    const div1 = document.createElement("div")
    const img1 = document.createElement("img")
    img1.setAttribute("data-type", "stone")
    img1.addEventListener("click", function (event) {
        const type = event.target.getAttribute("data-type")
        if (tool === "pickaxe") {
            if (type === "stone") {
                event.target.src = "images/smily4.jpg"
            }
        }
    });
    img1.src = "images/stone.jpg"
    img1.alt = "stone";
    div1.appendChild(img1);
    board1.appendChild(div1);
}
for (let i = 0; i < 12; i++) {
    const div1 = document.createElement("div")
    const img1 = document.createElement("img")
    img1.setAttribute("data-type", "ground")
    img1.addEventListener("click", function (event) {
        const type = event.target.getAttribute("data-type")
        if (tool === "shoval") {
            if (type === "ground") {
                event.target.src = "images/smily2.jpg"
            }
        }
    });
    img1.src = "images/ground.jpg"
    img1.alt = "ground";
    div1.appendChild(img1);
    board1.appendChild(div1);
}

