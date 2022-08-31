"use strict";
//window.addEventListener("load", start); //init calculator

const calc = document.querySelector("#calculate");
let dropdown = document.querySelector("#decimals").value;
let n1;
let n2;
let oper;
let result;

document.querySelector("#calculate").addEventListener("click", calculator);
document.querySelector("#clear").addEventListener("click", clear);

function calculator() {
    n1 = parseInt(document.querySelector("#firstnumber").value); //parseInt makes sure the input is converted to a number
    n2 = parseInt(document.querySelector("#secondnumber").value);
    oper = document.querySelector("#operator").value;
    if (oper === "add") { //assigning the operations
        result = value = n1 + n2;
    } else if (oper === "sub") {
        result = value = n1 - n2;
    } else if (oper === "mul") {
        result = value = n1 * n2;
    } else if (oper === "div") {
        result = value = n1 / n2;
    }
    roundRes();
}

function roundRes() {
    let dec = document.querySelector("#decimals").value;
    let round = document.querySelector("#doround");
    if (round.checked === true) { // read from drop-down if it is checked
        result = result.toFixed(dec); //to round the result accordingly the chosen number from the drop-down
    }
    document.querySelector("#firstnumber").value = result;
    results();
}

function results() {
    document.querySelector("#results li:last-child").innerHTML = result;
    //document.querySelector("#results").scroll(0, 1000); //this is intendet to print the result in the <li> but does not work
    // take the result from the last child and disply in the sibling before that
}

function clear() {
    document.querySelector("#firstnumber").value = "";
    document.querySelector("#secondnumber").value = "";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#decimals").value = "";
    document.querySelector("#doround").checked = false;
    document.querySelector("html").offsetHeight;
}