const clapElement = document.querySelector('.k-sound');
const audioSound = document.querySelector('.clap');
const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const input = document.querySelector("input")

let no = 10;
let fresh;
let index = 0;
const playPause = () => {
    if(index === 0){
        index = 1;
        fresh = setInterval(() => audioSound.play(), (10* no));

        playBtn.innerHTML = "pause"

    }
    else{
        clearInterval(fresh);
        fresh = null; 
        index = 0;
        playBtn.innerHTML = "play"
    }
}


playBtn.addEventListener("click",() => {
    playPause()
    
})
stopBtn.addEventListener("click",() => {
    stop()
    
})


const stop = () => { 
    clearInterval(fresh);
    fresh = null; 
    playBtn.innerHTML = "play"

}
input.addEventListener("change",() => {
    const inputValue = input.value;
    index === 0
    playPause()
    no = inputValue;
    console.log(no)
})
