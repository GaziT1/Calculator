window.addEventListener("load",addListener);
var output = document.getElementById("output").value;
function addListener()
{
	document.getElementById("output").disabled = true;
	document.getElementByName("btnseven").addEventListener("click",Seven);
    document.getElementByName("btneight").addEventListener("click",Eight);
 	document.getElementByName("btnnine").addEventListener("click",Nine);
	document.getElementByName("btnfour").addEventListener("click",Four);
	document.getElementByName("btnfive").addEventListener("click",Five);
	document.getElementByName("btnsix").addEventListener("click",Six);
	document.getElementByName("btnone").addEventListener("click",One);
	document.getElementByName("btntwo").addEventListener("click",Two);
	document.getElementByName("btnthree").addEventListener("click",Three);
	document.getElementByName("btnzero").addEventListener("click",Zero);

}

function Zero()
{
	document.getElementById("output").value += "0";
}

function One()
{
	document.getElementById("output").value += "1";
}

function Two()
{
	document.getElementById("output").value += "2";
}

function Three()
{
	document.getElementById("output").value += "3";
}

function Four()
{
	document.getElementById("output").value += "4";
}

function Five()
{
	document.getElementById("output").value += "5";
}

function Six()
{
	document.getElementById("output").value += "6";
}

function Seven()
{
	document.getElementById("output").value += "7";
}

function Eight()
{
	document.getElementById("output").value += "8";
}

function Nine()
{
	document.getElementById("output").value += "9";
}
