 const num= parseInt(prompt("enter the number"));
 if(num< 0){
     console.log("number is negitive")
 }
 else if(num==0)
 {
     console.log("number is positive")
    
 }
 else{
     let fact=1;
     for(i=1;i<=num;i++)
     {
         fact*=i;
     }
     console.log("the factorial of"+num+"is "+fact)
 }