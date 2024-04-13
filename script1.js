function dis(val) { 
    document.getElementById("result").value += val; 
} 

function myFunction(event) { 
    if (
        (event.keyCode >= 48 && event.keyCode <= 57) || // Numbers 0-9
        (event.keyCode >= 96 && event.keyCode <= 105) || // Numpad 0-9
        event.keyCode === 107 || // Plus
        event.keyCode === 109 || // Minus
        event.keyCode === 106 || // Asterisk
        event.keyCode === 111 || // Slash
        event.keyCode === 190 || // Dot
        event.keyCode === 110 // Numpad Dot
    ) {
        document.getElementById("result").value += event.key; 
    }
} 

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        solve();
    } 
}; 

function solve() {
    document.getElementById("result").value = 9; 
}

function clr() { 
    document.getElementById("result").value = ""; 
}




