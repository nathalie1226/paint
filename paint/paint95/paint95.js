/**
 * Created by itc_user on 6/21/2016.
 */
//default value for the color and for the canvas size
var color="blue";
var canvasSize=50;

//generating the color pallet i want 6 colors and a clear button
var div1= document.createElement('div');
div1.className="Colors";
var span1=document.createElement('div');
document.body.appendChild(span1);
for (var c=0;c<6;c++){
  var button= document.createElement('button');
    button.className="color";
    button.id=c;
    span1.appendChild(button);
}

// creating the clear button
var clearButton= document.createElement('button');
clearButton.className="bou";
clearButton.id="clear";
clearButton.value="clear";
document.body.appendChild(clearButton);
document.getElementById("clear").textContent="Clear";


//changing the id of the buttons
document.getElementById(0).id="white";
document.getElementById(1).id="red";
document.getElementById(2).id="blue";
document.getElementById(3).id="green";
document.getElementById(4).id="yellow";
document.getElementById(5).id="pink";


//changing the value of the buttons

document.getElementById("white").value="white";
document.getElementById("red").value="red";
document.getElementById("blue").value="blue";
document.getElementById("green").value="green";
document.getElementById("yellow").value="yellow";
document.getElementById("pink").value="pink";




//creating a labelled input to ask the user what size he wants the canvas to be
var divInput=document.createElement("div");
divInput.className="sC";
var label=document.createElement("label");
label.className="sizeCanvas";
label.textContent="what size do you want the canvas to be?";
var input=document.createElement("input");
input.type="number";
input.id="size";
input.className="sizeCanvas";
var buttonSubmit=document.createElement("button");
buttonSubmit.id="submit";
buttonSubmit.textContent="Submit";


//putting my new elements in the body
divInput.appendChild(label);
divInput.appendChild(input);
divInput.appendChild(buttonSubmit);
document.body.appendChild(divInput);

//generating a canvas
// canvasSize=document.getElementById("size").value;
// for (x = 0; x < 50; x++) {
//     var divC = document.createElement("div");
//     divC.className = "colomn";
//     document.body.appendChild(divC);
//     for (var p = 0; p < 50; p++) {
//         var pixe = document.createElement("div");
//         pixe.className = "pix one";
//         divC.appendChild(pixe);
//     }
//     }

//generating the canvas according to the user's choice of size for it
function generateCanvas () {
    canvasSize=document.getElementById("size").value;
    for (x = 0; x < canvasSize; x++) {
        var divC = document.createElement("div");
        divC.className = "colomn";
        document.body.appendChild(divC);
        for (var p = 0; p < canvasSize; p++) {
            var pixe = document.createElement("div");
            pixe.className = "pix one";
            divC.appendChild(pixe);
        }
    }
    for (var i=0;i<draw.length;i++) {
        draw[i].addEventListener("click", drawingColor);
        draw[i].addEventListener("contextmenu", erase);
        draw[i].addEventListener("dblclick", erase);

    }
}


//function that changes the value of "color" according to the button that was pressed by the user (when he chose the color)
function changeColor(clickEvent){
    var btn1=clickEvent.target;
console.log(btn1.value);

    if (btn1.value.toUpperCase()==="RED"){
        color="red";
    }
    else if (btn1.value.toUpperCase()==="BLUE"){
        color="blue";
    }
    else if (btn1.value.toUpperCase()==="YELLOW"){
        color="yellow";
    }
    else if (btn1.value.toUpperCase()==="GREEN"){
        color="green";
    }
    else if (btn1.value.toUpperCase()==="PINK"){
        color="pink";
    }
    else if (btn1.value.toUpperCase()==="WHITE"){
        color="white";
    }
}

//function clear all that was drawn in the canvas
function clearAll(clickevent){
    var all=document.getElementsByClassName("pix");
    for (var i=0;i<draw.length;i++) {
        all[i].style.backgroundColor="white";
    }
}

function erase(clickEvent){
    clickEvent.preventDefault();
    var btn=clickEvent.target;
    btn.style.backgroundColor="white";
}

//function that changes the color of the pixels that the user clicked on according to the color the user selected before
function drawingColor(clickEvent){
    var btn=clickEvent.target;
    if (color.toUpperCase()==="RED"){
        btn.style.backgroundColor="red";
    }
    else if (color.toUpperCase()==="WHITE"){
        btn.style.backgroundColor="white";
    }
    else if (color.toUpperCase()==="BLUE"){
        btn.style.backgroundColor="blue";
    }
    else if (color.toUpperCase()==="YELLOW"){
        btn.style.backgroundColor="yellow";
    }
    else if (color.toUpperCase()==="GREEN"){
        btn.style.backgroundColor="green";
    }
    else if (color.toUpperCase()==="PINK"){
        btn.style.backgroundColor="pink";
    }
    else {
        btn.style.backgroundColor="white";
    }
}

//making sure the function generateCanvas works when the button submit is clicked on submit
var sub=document.getElementById("submit");
sub.addEventListener("click",generateCanvas);

//making sure the function drawingColor works every time a pixels is clicked on in the canvas
var draw=document.getElementsByClassName("pix");
// for (var i=0;i<draw.length;i++) {
//     draw[i].addEventListener("click", drawingColor);
//     draw[i].addEventListener("mousover", erase);
//
//
// }

//making the function changeColor works every time a "color" button is pressed
var currentColor=document.getElementsByClassName("color");
for (var j=0;j<currentColor.length;j++) {
    currentColor[j].addEventListener("click", changeColor);
}

// making sure the function clear works when the button clear is clicked on submit
var suppr=document.getElementById("clear");
suppr.addEventListener("click",clearAll);



