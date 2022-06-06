
 function findlastdigit(a,b,c)
 {
   
        num1=a%10;
        num2=b%10;
        num3=c%10;
        if(num1===num2 && num1===num3){
          return "same";
        }else{
        
          return "not same"
        }
        
        
      }
  console.log(findlastdigit(20,300,1000));