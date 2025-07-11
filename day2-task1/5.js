// ---------------------5-----------------
let arr1 = [];
for(let i =0; i<3; i++){
    let l = window.prompt('element');
    arr1.push(Number(l));
}
console.log(arr1);


function sum(x,y,z){
    return(x+y+z);
}
sum_res = sum(arr1[0],arr1[1],arr1[2]);
console.log(sum_res)



function multp(a,b,c){
    return(a*b*c);
}
let mult = multp(arr1[0],arr1[1],arr1[2]);
console.log(mult);



function div(o,p,q){
    return(o/p/q);
}
let divided = div(arr1[0],arr1[1],arr1[2]);
console.log(divided);