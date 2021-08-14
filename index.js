let up=document.querySelector(".up"),
    down=document.querySelector(".down"),
    number=document.querySelectorAll(".number"),
    equal=document.querySelector(".equal_to");

  
//let i=0;

for(let i=0; i<number.length; i++){
    number[i].onclick=function(){
        if(up.innerHTML==0){
            up.innerHTML=number[i].innerHTML;
        }
        else{
            up.innerHTML+=number[i].innerHTML;
        }
    }
}
equal.onclick=function(){
    down.innerHTML=eval(up.innerHTML)
}