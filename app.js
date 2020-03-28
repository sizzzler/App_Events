var circle1 = document.getElementById ("circle1");
var circle2 = document.getElementById ("circle2");
var circle3 = document.getElementById ("circle3");

circle1.addEventListener('mouseover', (event) => {
  changeColor(event);
});

circle1.addEventListener('mouseup', (event) => {
  changeColor(event);
});

circle2.addEventListener('mouseover', (event) => {
  changeColor(event);
});

circle2.addEventListener('mouseup', (event) => {
  changeColor(event);
});
circle3.addEventListener('mouseover', (event) => {
  changeColor(event);
});

circle3.addEventListener('mouseup', (event) => {
  changeColor(event);
});

function changeColor(event) {
  let dot = event.target
  let color = dot.style.backgroundColor;
  if(color == "silver") {
    dot.style.backgroundColor = "powderblue";
  } else {
    dot.style.backgroundColor = "silver";

  }
}

document.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("circle1", event.target.id);
});

document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

document.addEventListener("drop", (event) => {
  event.preventDefault();
  if ( event.target.className == "droptarget" ) {
    var data = event.dataTransfer.getData("circle1");
    event.target.appendChild(document.getElementById(data));
  }
});

document.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("circle1", event.target.id);
});

document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

document.addEventListener("drop", (event) => {
  event.preventDefault();
  if ( event.target.className == "droptarget" ) {
    var data = event.dataTransfer.getData("circle1");
    event.target.appendChild(document.getElementById(data));
  }
});



window.addEventListener("keypress", changeColor);
let body = document.body

function changeColor(event) {
    if  (event.key === "d"){
        body.style.background = "blue";
    } else if (event.key === "Enter" ) {
        body.style.background = "orange" ;
    }

}





