let result = "";
// let exp = /[\+\-\*/]{2,}/;
function EnterNumber(value) {
    result += (value);
    document.getElementById("on_screen").value = result;
}

function EnterOperator(value) {
    result += value;
    document.getElementById("on_screen").value = result;
}

function EnterClear() {
    
    result = "";
    document.getElementById("on_screen").value = "";
}

function EnterEqual() {
    
        result = eval(result);

        document.getElementById("on_screen").value = result;
    

    
}