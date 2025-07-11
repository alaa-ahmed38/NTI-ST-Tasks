

// -------------3--------------------
let text = window.prompt("enter your text").toLowerCase();
let letter = "e";
let count = 0;

let n = [];
for(let i =0;i< text.length; i++){
    if(text[i] === letter){
        n.push(1);
    }
}
console.log(n.length);
