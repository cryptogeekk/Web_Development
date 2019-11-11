


var p1button=document.getElementById("playerone")
var p2button=document.getElementById("playertwo")
var one=document.getElementById('headone')
var two=document.getElementById('headtwo')
var reset=document.getElementById('reset')
var number=document.getElementById('number')
var zero=document.getElementById('zero')
var countofp1=0;
var countofp2=0;
var winningscore=5
var gameover=false




p1button.addEventListener("click",function()
{
        if(!gameover)
        {
            countofp1++
            if(countofp1===winningscore)
            {
                gameover=true
                
            }
            one.textContent=countofp1
        }
    
       
           
      
    
    
})


p2button.addEventListener("click",function()
{
    if(!gameover)
        {
            countofp2++
            if(countofp2===winningscore)
            {
                gameover=true
            }
            two.textContent=countofp2
        }
    
})

reset.addEventListener('click',function()
{
    countofp1=0
    countofp2=0
    one.textContent=0
    two.textContent=0
    gameover=false
    zero.textContent=0
})


number.addEventListener('click',function()
{
  zero.textContent=number.value
  winningscore=Number(number.value)
})
