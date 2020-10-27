setInterval (function(){

	var date= new Date();
 	let hr= date.getHours();
 	let min= date.getMinutes();
 	let sec= date.getSeconds();

 	let second= document.getElementsByClassName('sec')[0];
 	let minutes= document.getElementsByClassName('min')[0];
 	let hour= document.getElementsByClassName('hr')[0];
 	second.style.transform="rotate("+sec*6+"deg)";
 	minutes.style.transform="rotate("+min*6+"deg)";
 	hour.style.transform="rotate("+hr*30+"deg)";

},1000);