

// --------------4-------------
let user_name = window.prompt("please enter your name");
let un_v = /^[a-zA-Zأ-ي\s]+$/;
if(un_v.test(user_name) == false){
    window.alert("the name is not valid");
    user_name = "no name found";
}


let user_phone = window.prompt("please enter your phone");
let uph_v =/^01[0-2,5]{1}[0-9]{8}$/;
if(uph_v.test(user_phone) == false){
    window.alert("the phone is not valid");
    user_phone = "no phone found" ;
}


let user_email = window.prompt("please enter your email");
let ue_v =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(ue_v.test(user_email) == false){
    window.alert("the email is not valid");
    user_email =  "no email found";
}


function grating(u_name , u_phone , u_email ){
    console.log(`welcome, ${u_name} \n your phone is: ${u_phone}\n your email is: ${u_email}`);
    
}
grating(user_name,user_phone,user_phone);


