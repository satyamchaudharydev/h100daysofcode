const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const stop = document.querySelector('.stop')
const circle = document.querySelectorAll('.circle')
const play = document.querySelector('.play')
const kick = document.querySelector('.kick');
const clap= document.querySelector('.clap');
const hihat = document.querySelector('.hihat')
const input = document.querySelector('input')

let data = []
let timing = 300;
let interval;
let intervalFunction;
let currentBeat  = 0;
let click = 0;
console.log(data);

data.push(one.children,two.children,three.children);


const checkParent = (( child) => {
    if (one.contains(child)){
        kick.play()
    }
    if(two.contains(child)){
        clap.play()
    }
    if(three.contains(child)){
        hihat.play()
    }

})

const musicBlock = (index) => {
    circle.forEach((element, i) => {
    if(click === 0){
      if (i === index) {
        checkParent(element)
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


circle.forEach((element, i) => 
    element.addEventListener('click', () => musicBlock(i)
    )
  
  )
let index = 0;
const playPause = (inter) => {
    if(index === 0){
        index = 1;
        play.innerHTML = `<i class="fa fa-pause" aria-hidden="true"></i>
        `;

    }
    else{
        clearInterval(inter);
        inter = null; 
        index = 0;
        play.innerHTML = `<i class="fa fa-play" aria-hidden="true">`;

       
    }
}
play.addEventListener("click", () => {
    
    playPause(interval)
    const playBeat = (currentBeat) => {
        if(data[0][currentBeat]){
            data[0][currentBeat].classList.add('scale');

        }
        if(data[1][currentBeat]){
            data[1][currentBeat].classList.add('scale');

        }
        if(data[2][currentBeat]){
            data[2][currentBeat].classList.add('scale');

        }
        if (data[0][currentBeat].classList.contains("update")) {
        kick.play();
        }

        if (data[1][currentBeat].classList.contains("update")) {
        clap.play();
        }
    
        if (data[2][currentBeat].classList.contains("update")
        ) {
        hihat.play()
        }
    
    }
   
     intervalFunction = (time) => {
    interval =  setInterval(() => {
        playBeat(currentBeat)
        
        circle.forEach((el,index)=>{
            if (index !== currentBeat && index !== currentBeat + 8 && index !== currentBeat + 16){
                    el.classList.remove('scale');
              }
            })
        
            if (currentBeat === 7) {
                currentBeat = 0
            }
            else {
                currentBeat += 1
            }
        }, time)
    }
    if(index !== 0){
        intervalFunction(timing)
    }
    

})
let stopCount = 0;
stop.addEventListener("click",() =>{
    console.log("sa")
    if(stopCount === 0){
    currentBeat = 0;
    clearInterval(interval);
        interval = null; 
        circle.forEach(el => el.classList.remove('scale'))
        stopCount = 1;
    }
    else{
        console.log("else")
        intervalFunction(timing);
        stopCount = 0;


    }
})


input.addEventListener("change",() => {

        const inputValue = input.value;
        clearInterval(interval);
       
        interval = null; 
        console.log(intervalFunction)
        intervalFunction(inputValue)

    })
