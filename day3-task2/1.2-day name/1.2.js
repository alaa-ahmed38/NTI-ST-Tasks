// -----------1.2------------
let day = prompt("please enter the date of today\"month/day/year\"");

function to_day(date){
    let day_name = new Date(date);
    return day_name.getDay();
}
if(isNaN(to_day(day))){
    alert("please enter the date in the right way explained ")
}else{
    console.log(to_day(day));
switch(to_day(day)){
    case 1:
    console.log("it is: \"saturday\"");
    break;
    case 2:
    console.log("it is: \"sunday\"");
    break;
    case 3:
    console.log("it is: \"monday\"");
    break;
    case 4:
    console.log("it is: \"tuesday\"");
    break;
    case 5:
    console.log("it is: \"wednesday\"");
    break;
    case 6:
    console.log("it is: \"thursday\"");
    break;
    case 7:
    console.log("it is: \"friday\"");
    break;
    default:
    console.log("it is not a day");        
}}
