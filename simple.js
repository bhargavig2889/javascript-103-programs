 const a=Number(prompt("enter the frist number"));
 const b=Number(prompt("enter the second number"));
 const o=(prompt("enter the operator"));
 let result;
 switch(o)
 {
     case '+':
         result=a+b;
         console.log(result);
         break;
     case  '-' :
         result=a-b;
         console.log(result);
         break;
     case '*':
         result=a*b;
         console.log(result);
         break;
     case  '/' :
          result=a/b;  
          console.log(result);
          break;  
      default:
          console.log("invalid operator");
          break;    

 }
