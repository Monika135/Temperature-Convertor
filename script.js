var cel = document.querySelector("#cel");
var farehn = document.querySelector("#faren");
var celbtn = document.querySelector("#cel1");
var farenbtn = document.querySelector("#faren1");
var reset=document.querySelector("#reset");
var val=0;
var res=0;

celbtn.addEventListener("click",()=>{
    val = parseInt(farehn.value);
    res=((5/9)*(val-32));
  
    cel.value=res;
})
farenbtn.addEventListener("click",()=>{
    val = parseInt(cel.value);
    res=(((9*val)/5)+32);
    farehn.value=res;
})

reset.addEventListener("click",()=>{
    cel.value="";
    farehn.value="";
})
