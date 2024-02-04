const containerEL = document.querySelector(".container");


for(let i = 0 ; i < 50 ; i++){
  const colorContainerEL = document.createElement("div");
  colorContainerEL.classList.add("color-container");
  containerEL.appendChild(colorContainerEL);
}

const colorContainerEL = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
  colorContainerEL.forEach((colorContainerEL) =>{
    const newColorCode = randomColor();
    colorContainerEL.style.backgroundColor = "#" + newColorCode;
    colorContainerEL.innerHTML = "#" + newColorCode;
  });
}

function randomColor(){
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let color = "";
  for(let i = 0 ; i < colorCodeLength ; i++){
    const randomNum = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomNum, randomNum + 1);
  }
  return color;
}