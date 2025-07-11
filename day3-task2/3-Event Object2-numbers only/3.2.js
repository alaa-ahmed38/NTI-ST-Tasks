// let form1 = document.createElement("form");

// input1.type = "text";
// input1.placeholder = "enter your numbers";

// let btn = document.createElement("button");
// btn.type = "summit";

// form1.appendChild(input1);
// form1.append(btn);


// document.write(input1);






let input1 = document.querySelector("input");

document.addEventListener("keydown", EnterNumber);

function EnterNumber(ev){
    let element = Number(ev.target.value);
    if(isNaN(element)){
        alert("numbers only");
        ev.target.value = " ";
        
    }else{
        // console.log(ev.target.value);

}}
