const textareaEL = document.getElementById("textarea");
const totalCharacterEL = document.getElementById("total-character");
const remainCharacterEL = document.getElementById("remaining-character");

textareaEL.addEventListener("keyup",()=>{
  updateCounter();
});

updateCounter();
function updateCounter(){
  totalCharacterEL.innerText = textareaEL.value.length
  remainCharacterEL.innerText = textareaEL.getAttribute("maxlength") - textareaEL.value.length;
}