function insertText(){
	document.getElementById("newContent").innerHTML= "Some new text: <br> kukuk <br>";
}
function rumfang(){
	
	var h = document.getElementById("heightBox").value;
	var l = document.getElementById("lengthBox").value;
	var w = document.getElementById("wBox").value;
	w=parseFloat(w);
	h=parseFloat(h);
	l=parseFloat(l);
	var result = w*l*h;
	
	document.getElementById("result").innerHTML = result;
	
}