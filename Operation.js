window.addEventListener("load",addListener);
var output = document.getElementById("output");
function addListener()
{
	document.getElementById("output").disabled = true;
	//document.getElementById("btnseven").addEventListener("click",Seven);
   // document.getElementById("btneight").addEventListener("click",Eight);
 	//document.getElementById("btnnine").addEventListener("click",Nine);
	//document.getElementById("btnfour").addEventListener("click",Four);
	//document.getElementById("btnfive").addEventListener("click",Five);
	//document.getElementById("btnsix").addEventListener("click",Six);
//	document.getElementById("btnone").addEventListener("click",One);
	//document.getElementById("btntwo").addEventListener("click",Two);
	//document.getElementById("btnthree").addEventListener("click",Three);
	document.getElementById("btnzero").addEventListener("click",Zero);

}

function Zero()
{
	output.value += "0";
}

function One()
{
	output.value += "1";
}

function Two()
{
	output.value += "2";
}

function Three()
{
	output.value += "3";
}

function Four()
{
	output.value += "4";
}

function Five()
{
	output.value += "5";
}

function Six()
{
	output.value += "6";
}

function Seven()
{
	output.value += "7";
}

function Eight()
{
	output.value += "8";
}

function Nine()
{
	output.value += "9";
}
