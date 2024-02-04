const bodyEL = document.querySelector("body");

bodyEL.addEventListener("mousemove",(event)=>{
  const PosX = event.offsetX;
  const PosY = event.offsetY;
  const spanEL = document.createElement("span");
  spanEL.style.left = PosX + "px"; 
  spanEL.style.top = PosY + "px";
  const size = Math.random() * 100; /*0-100*/
  spanEL.style.width = size  + "px";
  spanEL.style.height = size + "px";
  bodyEL.appendChild(spanEL);
  setTimeout(()=>{
    spanEL.remove();
  },3000);
})