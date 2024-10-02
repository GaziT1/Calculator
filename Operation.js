window.addEventListener("load",addListener);
var operation; num1; num2;
function addListener()
{
	document.getElementById("output").disabled = true;
	document.getElementById("btnseven").addEventListener("click",Seven);
    document.getElementById("btneight").addEventListener("click",Eight);
 	document.getElementById("btnnine").addEventListener("click",Nine);
	document.getElementById("btnfour").addEventListener("click",Four);
	document.getElementById("btnfive").addEventListener("click",Five);
	document.getElementById("btnsix").addEventListener("click",Six);
	document.getElementById("btnone").addEventListener("click",One);
	document.getElementById("btntwo").addEventListener("click",Two);
	document.getElementById("btnthree").addEventListener("click",Three);
	document.getElementById("btnzero").addEventListener("click",Zero);
	document.getElementById("btnpoint").addEventListener("click",Point);
	document.getElementById("btnequals").addEventListener("click",Equals);
	document.getElementById("btnadd").addEventListener("click",Plus);
	document.getElementById("btnsub").addEventListener("click",Minus);
	document.getElementById("btnmult").addEventListener("click",Mult);
	document.getElementById("btndiv").addEventListener("click",Div);
    document.getElementById("btnclear").addEventListener("click",Clear);
	document.getElementById("btnpi").addEventListener("click",Pi);
	document.getElementById("btnsqrt").addEventListener("click",Sqrt);
	document.getElementById("btnsq").addEventListener("click",Sq);
	document.getElementById("btnpercent").addEventListener("click",Percent);
	document.getElementById("btnbackspace").addEventListener("click",Backspace);
	document.getElementById("btnlog").addEventListener("click",Log);
	document.getElementById("btnsin").addEventListener("click",Sin);
	document.getElementById("btnexp").addEventListener("click",Exp);
	document.getElementById("btnpower").addEventListener("click",Power);
	document.getElementById("btnnegpos").addEventListener("click",NegPos);
	document.getElementById("btnln").addEventListener("click",Ln);
	document.getElementById("btncos").addEventListener("click",Cos);
	document.getElementById("btnfactorial").addEventListener("click",Factorial);
	document.getElementById("btntan").addEventListener("click",Tan);
	document.getElementById("btnradians").addEventListener("click",Radians);
	document.getElementById("btndegrees").addEventListener("click",Degrees);
	
}
function Output(){var output = document.getElementById("output");}
function Zero(){Output(); output.value += "0";}
function One(){Output(); output.value += "1";}
function Two(){Output(); output.value += "2";}
function Three(){Output(); output.value += "3";}
function Four(){Output(); output.value += "4";}
function Five(){Output(); output.value += "5";}
function Six(){Output(); output.value += "6";}
function Seven(){Output(); output.value += "7";}
function Eight(){Output(); output.value += "8";}
function Nine(){Output(); output.value += "9";}
function Point() {
    Output();
    if (!output.value.includes(".")) {
        output.value += ".";
    } else {
        alert("No more than one point.");
    }
}

function Equals() {
    Output();
    num2 = parseFloat(output.value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input.");
        
    }
    if (operation === "+") {
        output.value = num1 + num2;
    } else if (operation === "-") {
        output.value = num1 - num2;
    } else if (operation === "*") {
        output.value = num1 * num2;
    } else if (operation === "/") {
        if (num2 === 0) {
            alert("Cannot divide by zero.");
            
        }
        output.value = num1 / num2;
    } else {
        alert("Invalid operation.");
        
    }
    num1 = parseFloat(output.value);
    operation = null;
}

function Plus() {
    Output();
    num1 = parseFloat(output.value);
    operation = "+";
    output.value = "";
}

function Minus() {
    Output();
    num1 = parseFloat(output.value);
    operation = "-";
    output.value = "";
}

function Mult() {
    Output();
    num1 = parseFloat(output.value);
    operation = "*";
    output.value = "";
}

function Div() {
    Output();
    num1 = parseFloat(output.value);
    operation = "/";
    output.value = "";
}

function Clear() {
    Output();
    output.value = "";
    num1 = null;
    num2 = null;
    operation = null;
}

function Pi() {
    Output();
    output.value = Math.PI;
}

function Sqrt() {
    Output();
    num1 = parseFloat(output.value);
    if (num1 < 0) {
        alert("Cannot calculate square root of a negative number.");
        
    }
    output.value = Math.sqrt(num1);
}

function Sq() {
    Output();
    num1 = parseFloat(output.value);
    output.value = num1 * num1;
}

function Percent() {
    Output();
    num1 = parseFloat(output.value);
    output.value = num1 / 100;
}

function Backspace() {
    Output();
    output.value = output.value.slice(0, -1);
}
function Log() {
    Output();
    num1 = parseFloat(output.value);
    if (num1 <= 0) {
        alert("Cannot calculate logarithm of zero or a negative number.");
        
    }
    output.value = Math.log10(num1);
}

function Sin() {
    Output();
    num1 = parseFloat(output.value);
    output.value = Math.sin(num1);
}

function Exp() {
    Output();
    num1 = parseFloat(output.value);
    output.value = Math.exp(num1);
}

function Power() {
    Output();
    num1 = parseFloat(output.value);
    output.value = "";
}

function NegPos() {
    Output();
    num1 = parseFloat(output.value);
    output.value = -num1;
}

function Ln() {
    Output();
    num1 = parseFloat(output.value);
    if (num1 <= 0) {
        alert("Cannot calculate natural logarithm of zero or a negative number.");
        
    }
    output.value = Math.log(num1);
}

function Cos() {
    Output();
    num1 = parseFloat(output.value);
    output.value = Math.cos(num1);
}

function Factorial() {
    Output();
    num1 = parseInt(output.value);
    if (num1 < 0) {
        alert("Cannot calculate factorial of a negative number.");
        
    }
    result = 1;
    for (num2 = 2; num2 <= num1; num2++) {
        result *= num2;
    
    }
    output.value = result;
}

function Tan() {
    Output();
    num1 = parseFloat(output.value);
    output.value = Math.tan(num1);
}

function Radians() {
    Output();
    num1 = parseFloat(output.value);
    output.value = num1 * Math.PI / 180;
}

function Degrees() {
    Output();
    num1 = parseFloat(output.value);
    output.value = num1 * 180 / Math.PI;
}
