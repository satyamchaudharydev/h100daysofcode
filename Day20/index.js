const bar = document.querySelectorAll('.bar');
const baru = document.querySelector('.bar')
const play = document.querySelector('.play');
const bars1 = document.querySelector('.bars1');
const bars2 = document.querySelector('.bars2');
const bars3 = document.querySelector('.bars3');
const bars4 = document.querySelector('.bars4');
const bars5 = document.querySelector('.bars5');
const fa = document.querySelector('.fa-play');
const playText = document.querySelector('.play-text');
const audio1 = document.querySelector('.clap');
const audio2 = document.querySelector('.hihat');
const audio3 = document.querySelector('.kick');
const stop = document.querySelector('.stop');
const clear = document.querySelector('.clear');
const barsSection = document.querySelector('.bars-section');

const redo = document.querySelector('.fa-redo');
const playStat = document.querySelector('.music-play-stat');
const playCircle = document.querySelector('.moving-circle');
const movingLine = document.querySelector('.moving-line')
const addedIcon = document.querySelectorAll('.added-icon')
let data = [];
let currentBeat = 0;
let interval;
let intervalFunction;
let timing = 300;
let click = 0;
let index = 0;
let leftPos = 10;

console.log(bar.length/5)
const scalePlay = () => {
    return ;
}

const checkParent = ((child) => {
    if (bars1.contains(child)){
        audio1.play()
    }
    if(bars2.contains(child)){
        audio2.play()
    }
    if(bars3.contains(child)){
        audio3.play()
    }

})
const call = () => {
    return index !== currentBeat && index !== currentBeat + 6 && index !== currentBeat + 12 && index !== currentBeat + 18 && index !== currentBeat + 24
}
data.push(bars1.children,bars2.children,bars3.children,bars3.children,bars4.children,bars5.children);

const barClick = (index) => {
    bar.forEach((element, i) => {
    if(click === 0){
      if (i === index) {
        checkParent(element);
        element.classList.add('update');
        click = 1;
    }
    }
    else{
        if (i === index) {
          element.classList.remove('update');
          click = 0;
      }
      }
      
    });
  }

//   playpause

const playPause = (inter) => {
    if(index === 0){
        index = 1;

        console.log("added");
        fa.classList.replace('fa-play','fa-pause');
        playText.innerText = "Pause";
    }
    else{
        clearInterval(inter);
        fa.classList.replace('fa-pause','fa-play')
        playText.innerText = "Play";

        console.log("remove")
        inter = null; 
        index = 0;

       
    }
}

bar.forEach((element, i) => 
    element.addEventListener('click', () => barClick(i)
    )
  
  )

//   playingg....


play.addEventListener("click", () => {

    playPause(interval);
    const playBeat = (currentBeat) => {
        data.forEach((el,index) => {
            if(data[index][currentBeat]){
                data[index][currentBeat].classList.add('scale');
    
            }
        })
        
        if (data[0][currentBeat].classList.contains("update")) {
        audio1.play();
        addedIcon[0].classList.add('update-icon')

        }
        else{

             addedIcon[0].classList.remove('update-icon')

        }

        if (data[1][currentBeat].classList.contains("update")) {
        audio2.play();
        addedIcon[1].classList.add('update-icon')


        }
        else{
            addedIcon[1].classList.remove('update-icon')
        }
    
        if (data[2][currentBeat].classList.contains("update")
        ) {
        audio3.play()
        addedIcon[2].classList.add('update-icon')


        }
        else{
            addedIcon[2].classList.remove('update-icon')

        }
    }
   
     intervalFunction = (time) => {
    interval =  setInterval(() => {
        playBeat(currentBeat)
        barsSection.classList.add('update-bars-section');
        movingLine.style.width = `${leftPos}` +'px';

        document.querySelector(':root').style.setProperty('--left',`${leftPos}` +'px');

        bar.forEach((el,index)=>{
            if (index !== currentBeat && index !== currentBeat + 6 && index !== currentBeat + 12 && index !== currentBeat + 18 && index !== currentBeat + 24){
                    el.classList.remove('scale');
              }
            })
            if (currentBeat === 5) {
                currentBeat = 0;
                leftPos =  20;

            }
            else {
                leftPos += 85;
                currentBeat += 1
            }

        }, time)
    }

    if(index === 1){
        intervalFunction(timing);
    }
})

// stop 
let stopCount = 0;
stop.addEventListener("click",() =>{
    if(stopCount === 0){
    currentBeat = 0;
    // leftPos = 0;

    clearInterval(interval);

    interval = null; 
    leftPos = 0;
    bar.forEach(el => el.classList.remove('scale'))
    stopCount = 1;
    }
    else{
        intervalFunction(timing);
        stopCount = 0;

    }
})

// clear
clear.addEventListener("click",() =>{
        redo.classList.toggle('clear-rotate')
        bar.forEach(el => el.classList.remove('update'))
    
})
let barLisy =0;
document.querySelector('.list').addEventListener('click',() =>{
    console.log("clicked");
    // Create a new paragraph element, and append it to the end of the document body
    let div = document.createElement("div");
    div.classList.add('bar')
    bars1.appendChild(div);
    bars2.appendChild(div);
    bars3.appendChild(div);
    bars4.appendChild(div);
    bars5.appendChild(div);


})

