let div_parent = document.getElementsByClassName("center")[0];

let div_element = document.createElement("div");
div_element.id = "footer";

let img2 = document.createElement("img");
img2.src = "dom.jpg";
img2.alt = "hello..it rains over here:)";
img2.title = "bear";
// console.log(img2);



div_parent.append(div_element);
div_element.append(img2);

img2.style.float = "left";

let img1 = document.getElementsByTagName("img")[0];
img1.style.float = "right";
div_parent.style.display = "flex";
div_parent.style.flexDirection = "column";


let nav = document.getElementsByTagName("ul")[0];
// let div_nav = document.getElementById("navigation")[0];
nav.style.listStylePosition = "inside";
nav.style.listStyleType = "circle";

