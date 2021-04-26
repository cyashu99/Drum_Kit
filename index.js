function playaudio(word)
{
    switch(word)  {
        case "w": audio= new Audio("sounds/crash.mp3");
                break;
        case "a": audio= new Audio("sounds/kick-bass.mp3");
                break;
        case "s": audio= new Audio("sounds/snare.mp3");
                break;
        case "d": audio= new Audio("sounds/tom-1.mp3");
                break;
        case "j": audio= new Audio("sounds/tom-2.mp3");
                break;
        case "k": audio= new Audio("sounds/tom-3.mp3");
                break;
        case "l": audio= new Audio("sounds/tom-4.mp3");
    }
    audio.play();
}
function animate(word)
{
    var clss="."+word;
    document.querySelector(clss).classList.add("pressed");
    setTimeout(function() {
        document.querySelector(clss).classList.remove("pressed");
    }, 100);
}
for(var i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        playaudio(this.innerHTML);
        animate(this.innerHTML);
    })
}
document.addEventListener("keypress", function(word)  {
    playaudio(word.key);
    animate(word.key);
})