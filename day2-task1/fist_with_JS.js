// first task
// -----------1-----------

let x = [1, 2, 8, "alaa", 66, true, 55];
let m = [];
function sum1(arr1,arr2){
    for(let i = 0; i < arr1.length; i++){
        if(typeof(arr1[i]) == "number")
            arr2.push(arr1[i]);
        }
        let count = 0;
        let res = 0;
    for(let m = 0; m < arr2.length; m++){
        res = count += arr2[m];  
    }
        // console.log(res)
        return(res); 
    }

// sum1(x,n);
console.log(sum1(x, m));



// ---------another-solution---------------

let num = window.prompt("enter n numbers to be adjusted");
num = Number(num);
let count = 0;
function sum2(n){
    if(isNaN(n)){
        window.alert("n should be a number");
    }else if(n > 10){
        window.alert("n numbers should be less than 10");
    }else{
        for(let i = 1; i<= n; i++){
            let element = window.prompt("enter the"+[i]+" number to be adjusted");
            let n_ele = Number(element);
            if(isNaN(n_ele)){
                // console.log(element);
                window.alert("it must be numbers only");
                // count = String(count);
                // count += element;

            }else{
                count += n_ele;
        }
    }
        window.alert(`the sum of the numbers entered is: ${count}`);

}}


sum2(num);









