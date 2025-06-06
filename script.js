const container = document.querySelector(".grid");
const gridRows = document.getElementsByClassName("grid-row")

function rowGenerator(){
    for(var i = 0 ; i < 16 ; i++){
    const newDiv = document.createElement("div");
    rowStyler(newDiv)
    container.appendChild(newDiv);
    }  
}
function gridGenerator(){
    for(var i = 0; i < 16 ; i++){
        for(var j = 0; j < 16; j++){
            const newDiv = document.createElement("div");
            girdStyler(newDiv);
            gridRows[i].appendChild(newDiv);
        }
        
    }
}
rowGenerator()
gridGenerator()



function rowStyler(newDiv){
    newDiv.style.width = "100%";
    newDiv.style.height = "31.25px"
    newDiv.style.backgroundColor = "black";
    newDiv.style.cssText = "display: flex; justify-content: flex-start; width: 100%; height: 31.25px; background-color: black;";
    newDiv.className = "grid-row";
}

function girdStyler(newDiv){
     newDiv.style.cssText = "width: 31.25px; height: 31.25px;"
     newDiv.className = "grid-element";
}


function rainbowColorGenerator(){
    let rgb = ["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF", "#4B0082", "#EE82EE"];
    return rgb[Math.floor(Math.random() * 7)]
}

function gridColoror(){
    const grids = document.getElementsByClassName("grid-element");
        for(let i = 0; i < grids.length; i++){
            const grid = grids[i];
            grid.addEventListener('mouseover', function (){
                grid.style.backgroundColor = rainbowColorGenerator()
            });
        }
}

gridColoror()
