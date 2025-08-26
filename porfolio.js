const blocks = document.querySelectorAll(".block");


blocks.forEach(block =>{
    const image = block.querySelector("img");
    const video = block.querySelector("video")

//hide video by default
video.style.display = "none"

block.addEventListener("mouseenter", ()=>{
    image.style.display = "none"
    video.style.display = "block"
    video.play()
   
});

block.addEventListener("mouseleave", ()=>{
    image.style.display = "block"
    video.style.display = "none"
    video.pause()
    video.currentTime = 0
})


})




