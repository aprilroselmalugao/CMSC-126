function CheckPalindrome(){
	var arr=document.getElementById("word").value;
	var temp=arr.toLocaleLowerCase().replace(/[\W_]/g,'');
	var spl=temp.split("");
	var rev=spl.reverse();
	var pal=rev.join("");


	if(pal==temp)
		document.getElementById("output").innerHTML=("Palindrome");
	else
		document.getElementById("output").innerHTML=("Not a Palindrome");
}