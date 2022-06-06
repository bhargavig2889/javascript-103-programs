 var root1,root2;
  var a=Number(prompt("enter the  frist number"))
  var b=Number(prompt("enter the  second number"))
  var c=Number(prompt("enter the  thrid number"))
  var eq=b*b-4*a*c;
   if(eq>0)
   {
     root1=(-b+Math.sqrt(eq))/2*a;
     root2=(-b-Math.sqrt(eq))/2*a;
     console.log(root1);
     console.log(root2);
   }
   else(eq==0)
   {
      root1=root2=-b/(2*a);
      console.log(root1,root2);
   }

   
 