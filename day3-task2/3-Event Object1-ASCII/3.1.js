document.write("press any key:");

function ascii (event) {
            if (event.altKey) {
                alert( "The ASCII Code for \"Alt\" "+ event.which);
            }else if (event.ctrlKey) {
                alert( "The ASCII Code for \"ctrl\" "+ event.which);
            }else if (event.shiftKey) {
                alert("The ASCII Code for \"shift\""+ event.which);
            }else{
                alert(`The ASCII Code for \"${event.key}\" is: ${event.which}`);
            }

}

document.addEventListener("keydown", ascii);