window.addEventListener("load",addListener);
var operation; num1; num2;
function Output(){var output = document.getElementById("output");}
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
	document.getElementById("btnadd").addEventListener("click",Plus);
	document.getElementById("btnsub").addEventListener("click",Minus);
	document.getElementById("btnmult").addEventListener("click",Mult);
	document.getElementById("btndiv").addEventListener("click",Div);
	document.getElementById("btnequals").addEventListener("click",Equals);
    document.getElementById("btnclear").addEventListener("click",Clear);
	document.getElementById("btnbackspace").addEventListener("click",Backspace);
	document.getElementById("btnpi").addEventListener("click",Pi);
	document.getElementById("btnsqrt").addEventListener("click",Sqrt);
	document.getElementById("btnsq").addEventListener("click",Sq);
	document.getElementById("btnpercent").addEventListener("click",Percent);
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
function Zero(){ Output(); output.value += "0";}
function One(){ Output(); output.value += "1";}
function Two(){ Output(); output.value += "2";}
function Three(){ Output(); output.value += "3";}
function Four(){ Output(); output.value += "4";}
function Five(){ Output(); output.value += "5";}
function Six(){ Output(); output.value += "6";}
function Seven(){ Output(); output.value += "7";}
function Eight(){ Output(); output.value += "8";}
function Nine(){ Output(); output.value += "9";}
function Point()
{ Output();
	if (output.value.includes("."))
	{
		alert("You can't have two decimals in one number");
	}
	else
	{
		output.value += ".";
	}
}
function Plus()
{ Output();
	operation = "+";
	num1 = output.value;
	output.value = "";
}
function Minus()
{ Output();
	operation = "-";
	num1 = output.value;
	output.value = "";
}
function Mult()
{ Output();
	operation = "*";
	num1 = output.value;
	output.value = "";
}
function Div()
{ Output();
	operation = "/";
	num1 = output.value;
	output.value = "";
}

function Equals()
{ Output();
	num2 = output.value;
	if (operation == "+")
	{
		output.value = parseFloat(num1) + parseFloat(num2);
	}
	if (operation == "-")
	{
		output.value = parseFloat(num1) - parseFloat(num2);
	}
	if (operation == "*")
	{
		output.value = parseFloat(num1) * parseFloat(num2);
	}
	if (operation == "/")
	{
		output.value = parseFloat(num1) / parseFloat(num2);
	}
}

function Clear()
{ Output();
	output.value = "";
}
function Backspace()
{ Output();
	output.value = output.value.slice(0,-1);
}

function Pi()
{ Output();
	output.value = Math.PI;
}

function Sqrt()
{ Output();
	output.value = Math.sqrt(parseFloat(output.value));
}

function Sq()
{ Output();
	output.value = Math.pow(parseFloat(output.value),2);
}

function Percent()
{ Output();
	output.value = parseFloat(output.value)/100;
}

function Log()
{ Output();
	output.value = Math.log10(parseFloat(output.value));
}
function Exp()
{ Output();
	output.value = Math.exp(parseFloat(output.value));
}

function Power() {
    Output();
    num1 = parseFloat(output.value);
    if (output.value !== "") {
        num2 = parseFloat(output.value);
        output.value = Math.pow(num2, num1);
    }
}

function NegPos()
{ Output();
	output.value = -parseFloat(output.value);
}

function Ln()
{ Output();
	output.value = Math.log(parseFloat(output.value));
}

function Cos()
{ Output();
	output.value = Math.cos(parseFloat(output.value));
}

function Sin()
{ Output();
	output.value = Math.sin(parseFloat(output.value));	
}

function Factorial()
{ Output();
	num1 = parseInt(output.value);
    if (num1 < 0) {
        alert("Cannot calculate factorial of a negative number.");
        
    }
    result = 1;
    for (num2 = 2; num2 <= num1; num2++) 
	{
        result *= num2;
    
    }
    output.value = result;
}

function Tan()
{ Output();
	output.value = Math.tan(parseFloat(output.value));
}

function Radians()
{ Output();
	output.value = parseFloat(output.value) * Math.PI / 180;
}

function Degrees()
{ Output();
	output.value = parseFloat(output.value) * 180 / Math.PI;
}
