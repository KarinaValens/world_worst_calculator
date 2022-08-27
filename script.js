//"use strict";
//window.addEventListener("load", start); //init calculator

const calc = document.querySelector("#calculate");
document.querySelector("#calculate").addEventListener("click", calculator);
let dropdown = document.querySelector("#decimals").value;

let n1;
let n2;
let oper;
let result;



function calculator() {
    n1 = parseInt(document.querySelector("#firstnumber").value); //parseInt makes sure the input is converted to a number
    n2 = parseInt(document.querySelector("#secondnumber").value);
    oper = document.querySelector("#operator").value;
    //assigning the operations
    if (oper === "add") {
        document.querySelector("#results li:first-child").innerHTML = n1 + n2;
    }
    if (oper === "sub") {
        document.querySelector("#results").innerHTML = n1 - n2;
    }
    if (oper === "mul") {
        document.querySelector("#results").innerHTML = n1 * n2;
    }
    if (oper === "div") {
        document.querySelector("#results").innerHTML = n1 / n2;
    }
    results();
}

function results() {

}


// writing to field = 

// read from drop-down same as from field.value
// cheching check box  not .value but .checked=>boolean
// scrolling = document.querySelector("#results").scroll to (0.100000)=>any large number 