
// ----------2--------------------
let conn = window.prompt("if you want to take consideration of letters case please enter \"y\" if not enter \"n\"");
if(conn == "y"){
    let amm = window.prompt("enter your text to be checked");
    let n = [];
        let amm_res = 0;
        for(let i = amm.length-1;i >= 0; i--){
            n.push(amm[i]);
            amm_res += amm[i]
        }
        amm_res = amm_res.slice(1)
        // console.log(res);
    if(amm.toLowerCase() != amm_res){
        window.alert(`the text ${amm}--> is not palindrome `);
    }else if(amm == amm_res){
                window.alert(`your entered text: \"${amm}\" --> is palindrome `);
        }}
else if(conn == "n"){
    let amm = window.prompt("enter your text to be checked");
    let n = [];
        let amm_res = 0;
        for(let i = amm.length-1;i >= 0; i--){
            n.push(amm[i]);
            amm_res += amm[i];
        }
        amm_res = amm_res.slice(1);
    if(amm === amm_res ){
        // console.log(amm.reverse()n);
        window.alert(`your entered text: \"${amm}\" --> is palindrome `);
    }else{
        window.alert(`the text ${amm}--> is not palindrome `);
    }
}else{
    window.alert("you must enter \"y\" or \"n\" only");
    
}
