/**
 * Created by itc_user on 6/21/2016.
 */
//default value for the color and for the canvas size

var canvasSize=50;
var arrColor=["white","red","blue","green","yellow","pink"];
var color=arrColor[2];

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
//changing the id and the value of the buttons
for (var i=0;i<arrColor.length;i++){
    document.getElementById(i).value=arrColor[i];
    document.getElementById(i).id=arrColor[i];
}

// creating the clear button
var clearButton= document.createElement('button');
clearButton.id="clear";

clearButton.value="clear";
document.body.appendChild(clearButton);
document.getElementById("clear").textContent="Clear";


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


var imouseDown=false;
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
        draw[i].addEventListener("mousedown", clickMouseDown);
        draw[i].addEventListener("mouseover", drawingColor);
        draw[i].addEventListener("mouseup", clickMouseUp);
        draw[i].addEventListener("contextmenu", erase);
        draw[i].addEventListener("dblclick", erase);

    }
}
function clickMouseDown(){
    imouseDown=true;
}
function clickMouseUp(){
    imouseDown=false;
}


//function that changes the value of "color" according to the button that was pressed by the user (when he chose the color)
function changeColor(clickEvent) {
    var btn1 = clickEvent.target;
    for (var i = 0; i < arrColor.length; i++) {
        if (btn1.value === arrColor[i]) {
            color = arrColor[i];
        }
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
    if (imouseDown===true)
    {
        btn.style.backgroundColor= color;
    }

}

//making sure the function generateCanvas works when the button submit is clicked on submit
var sub=document.getElementById("submit");
sub.addEventListener("click",generateCanvas);

//making sure the function drawingColor works every time a pixels is clicked on in the canvas
var draw=document.getElementsByClassName("pix");


//making the function changeColor works every time a "color" button is pressed
var currentColor=document.getElementsByClassName("color");
for (var j=0;j<currentColor.length;j++) {
    currentColor[j].addEventListener("click", changeColor);
}

// making sure the function clear works when the button clear is clicked on submit
var suppr=document.getElementById("clear");
suppr.addEventListener("click",clearAll);


   