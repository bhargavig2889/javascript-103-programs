const num1=Number(prompt("enter the frist number"));
const num2=Number(prompt("enter the second number"));
for(i=num1;i<=num2;i++)
{
    let flag=0;
    for(j=2;j<i;j++)
    {
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(i>1 && flag==0){
        console.log(i);
    }
}