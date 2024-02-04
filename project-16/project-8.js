const btnEL = document.querySelector(".btn");
const closeIconEL = document.querySelector(".close-icon");
const trailerContainerEL = document.querySelector(".trailer-container");
const videoEL = document.querySelector("video");

btnEL.addEventListener("click",()=>{
  trailerContainerEL.classList.remove("active")
});

closeIconEL.addEventListener("click",()=>{
  trailerContainerEL.classList.add("active");
  videoEL.pause();
  videoEL.currentTime = 0;
})