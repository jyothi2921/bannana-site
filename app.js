var btnTranslate=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");

console.log(txtinput)
btnTranslate.addEventListener ("click",function clickEventHandler() {
    console.log("clicked!")
    console.log("input",txtinput.value);
})

