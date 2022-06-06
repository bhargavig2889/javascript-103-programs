 var num1 =parseFloat(prompt("enter the frist number"));
 var  num2=parseFloat(prompt("enter the second number"));
 var num3 = parseFloat(prompt("Enter third number: "));
 let largest;
 if(num1>=num2&&num1>=num3)
 {
    largest=num1;
 }
 else if(num2>=num1&&num2>=num3)
 {
     largest=num2;
    
 }
 else{
     largest=num3;
    
 }
  console.log("largest number among three is    "+largest);