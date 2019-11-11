var secnumber=4;
var guess=prompt("Enter a number");
var guess=Number(guess);

if(guess===secnumber)
{
	alert("The number you guessed is right.");
}

else if(guess>secnumber)
{
	alert("The number is too high !!");
}

else
{
	alert("The number is too low");
}