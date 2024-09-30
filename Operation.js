window.addEventListener("load",addListener);
var btnone, btntwo, btnthree, btnfour, btnfive, btnsix, btnseven, btneight, btnnine, btnzero, 
    output= document.getElementById("output").value;
	btnzero = document.getElementByName("btnzero").clicked
function addListener()
{
	//document.getElementById("output").disabled = true;
	//document.getElementByName("btnbtnclearadd").addEventListener("click",answeradd);
	//document.getElementByName("btnpi").addEventListener("click",answeradd);
	//document.getElementByName("btnsqrt").addEventListener("click",answersub);
	//document.getElementByName("btnsq").addEventListener("click",answermult);
	//document.getElementByName("btnpercent").addEventListener("click",answerdiv);
	//document.getElementByName("btnbackspace").addEventListener("click",clear);
	//document.getElementByName("btnlog").addEventListener("click",answermult);
	//document.getElementByName("btnsin").addEventListener("click",answerdiv);
	//document.getElementByName("btnexp").addEventListener("click",clear);
	//document.getElementByName("btnpower").addEventListener("click",answeradd);
	//document.getElementByName("btnnegpos").addEventListener("click",answersub);
	//document.getElementByName("btndiv").addEventListener("click",answermult);
	//document.getElementByName("btnln").addEventListener("click",answerdiv);
//	document.getElementByName("btncos").addEventListener("click",clear);
	document.getElementByName("btnseven").addEventListener("click",Numbers);
    document.getElementByName("btneight").addEventListener("click",Numbers);
 	document.getElementByName("btnnine").addEventListener("click",Numbers);
//	document.getElementByName("btnmult").addEventListener("click",answerdiv);
//	document.getElementByName("btnfactorial").addEventListener("click",clear);
//	document.getElementByName("btntan").addEventListener("click",answeradd);
	document.getElementByName("btnfour").addEventListener("click",Numbers);
	document.getElementByName("btnfive").addEventListener("click",Numbers);
	document.getElementByName("btnsix").addEventListener("click",Numbers);
//	document.getElementByName("btnsub").addEventListener("click",clear);
//	document.getElementByName("btnradians").addEventListener("click",answermult);
	document.getElementByName("btnone").addEventListener("click",Numbers);
	document.getElementByName("btntwo").addEventListener("click",Numbers);
	document.getElementByName("btnthree").addEventListener("click",Numbers);
//	document.getElementByName("btnadd").addEventListener("click",answersub);
//	document.getElementByName("btndegrees").addEventListener("click",answermult);
	document.getElementByName("btnzero").addEventListener("click",Zero);
//	document.getElementByName("btnpoint").addEventListener("click",answeradd);
//	document.getElementByName("btnequals").addEventListener("click",answersub);

}

document.write(document.getElementByName("btnzero").value)

function Zero()
{
	if (btnzero == true)
			{
				output.value = output + "0";
				document.getElementById("output").disabled = true;
			}
}

function Numbers()
{
	btnzero = document.getElementByName("btnzero").clicked
	if (btnzero == true)
		{
			output.value = output + "0";
			document.getElementById("output").disabled = true;
		}
	if (document.getElementByName("btnone").clicked)
		{
			document.getElementById("output").concat("1");	
		}
	if (document.getElementByName("btntwo").clicked)
		{
			document.getElementById("output").concat("2");			
		}
	if (document.getElementByName("btnthree").clicked)
		{
			document.getElementById("output").concat("3");				
		}
	if (document.getElementByName("btnfour").clicked)
		{
			document.getElementById("output").concat("4");					
		}
	if (document.getElementByName("btnfive").clicked)
		{
			document.getElementById("output").concat("5");						
		}
	if (document.getElementByName("btnsix").clicked)
		{
			document.getElementById("output").concat("6");							
		}
	if (document.getElementByName("btnseven").clicked)
		{
			document.getElementById("output").concat("7");								
		}
	if (document.getElementByName("btneight").clicked)
		{
			document.getElementById("output").concat("8");									
		}
	if (document.getElementByName("btnnine").clicked)
		{
			document.getElementById("output").concat("9");										
		}
}
