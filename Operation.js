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
    document.getElementByName("btnclear").addEventListener("click",answeradd);
	document.getElementByName("btnpi").addEventListener("click",answeradd);
	document.getElementByName("btnsqrt").addEventListener("click",answersub);
	document.getElementByName("btnsq").addEventListener("click",answermult);
	document.getElementByName("btnpercent").addEventListener("click",answerdiv);
	document.getElementByName("btnbackspace").addEventListener("click",clear);
	document.getElementByName("btnlog").addEventListener("click",answermult);
	document.getElementByName("btnsin").addEventListener("click",answerdiv);
	document.getElementByName("btnexp").addEventListener("click",clear);
	document.getElementByName("btnpower").addEventListener("click",answeradd);
	document.getElementByName("btnnegpos").addEventListener("click",answersub);
	document.getElementByName("btndiv").addEventListener("click",answermult);
	document.getElementByName("btnln").addEventListener("click",answerdiv);
	document.getElementByName("btncos").addEventListener("click",clear);
	document.getElementByName("btnmult").addEventListener("click",answerdiv);
	document.getElementByName("btnfactorial").addEventListener("click",clear);
	document.getElementByName("btntan").addEventListener("click",answeradd);
	document.getElementByName("btnsub").addEventListener("click",clear);
	document.getElementByName("btnradians").addEventListener("click",answermult);
	document.getElementByName("btnadd").addEventListener("click",answersub);
	document.getElementByName("btndegrees").addEventListener("click",answermult);
	document.getElementByName("btnpoint").addEventListener("click",answeradd);
	document.getElementByName("btnequals").addEventListener("click",answersub);
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
