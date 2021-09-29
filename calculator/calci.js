//Create 4 functions : madd,sub,divide,multiply and call correct function when user click them and perform calucation and render the result.
let num1=8,num2=2
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
sumMsg=document.getElementById("sum-el")
 //This is way 1 (here we are only changing answers not the default text present in sum id i.e "sum statement" )
msg=sumMsg.textContent
function sum(){
    add=num1+num2
    //sumMsg.textContent+=num1+num2         //10            imp
    sumMsg.textContent=msg+add
}
function subtract(){
    sub=num1-num2
    sumMsg.textContent=msg+sub
}
function multiply(){
    mul=num1*num2
    sumMsg.textContent=msg+mul
}
function divide(){
    div=num1/num2
    sumMsg.textContent=msg+div
}
/* //Another Way
function sum(){
    add=num1+num2
    sumMsg.textContent="SUM : " +add
    sumMsg.textContent+=num1+num2  prints Sum : 10
    sumMsg.textContent="SUM : "+num1+num2    prints Sum : 82

}
*/