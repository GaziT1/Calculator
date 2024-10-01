window.addEventListener("load",addListener);
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
	document.getElementById("btncos").addEventListener("click",Mult);
	document.getElementById("btndiv").addEventListener("click",Div);
    document.getElementById("btnclear").addEventListener("click",answeradd);
	document.getElementById("btnpi").addEventListener("click",answeradd);
	document.getElementById("btnsqrt").addEventListener("click",answersub);
	document.getElementById("btnsq").addEventListener("click",answermult);
	document.getElementById("btnpercent").addEventListener("click",answerdiv);
	document.getElementById("btnbackspace").addEventListener("click",clear);
	document.getElementById("btnlog").addEventListener("click",answermult);
	document.getElementById("btnsin").addEventListener("click",answerdiv);
	document.getElementById("btnexp").addEventListener("click",clear);
	document.getElementById("btnpower").addEventListener("click",answeradd);
	document.getElementById("btnnegpos").addEventListener("click",answersub);
	document.getElementById("btnln").addEventListener("click",answerdiv);
	document.getElementById("btnmult").addEventListener("click",answerdiv);
	document.getElementById("btnfactorial").addEventListener("click",clear);
	document.getElementById("btntan").addEventListener("click",answeradd);
	document.getElementById("btnradians").addEventListener("click",answermult);
	document.getElementById("btndegrees").addEventListener("click",answermult);
	
}
function Symbolcheck(){Output(); if (output == ""){document.getElementById("output").disabled = true;} else {document.getElementById("output").disabled = false;}}
function Output(){var output = document.getElementById("output");}
function Outputnum(){var outputnumber = parseFloat(0);}
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
function Point(){Output(); output.value += "."; alert("No more than one point."); document.getElementById("btnpoint").disabled = true;}
function Equals(){output.value = outputOutputnum}
function Plus(){Symbolcheck(); output.value += "+";}
function Minus(){Symbolcheck(); output.value += "-";}
function Mult(){Symbolcheck(); Output(); output.value += "x";}
function Div(){Symbolcheck(); output.value += "÷";}
