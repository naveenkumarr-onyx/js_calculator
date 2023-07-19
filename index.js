const x =  document.getElementById("invalue");
function display(value){
   x.value+=value
}
function calculate(){
    let inputValue=x.value;
    var answer =  eval(inputValue)
    x.value=answer
}
function clr(){
    x.value = ''
}