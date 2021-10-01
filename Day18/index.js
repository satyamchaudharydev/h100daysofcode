const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const circle = document.querySelectorAll('.circle')
const play = document.querySelector('.play')
const kick = document.querySelector('.kick');
const clap= document.querySelector('.clap');
const hihat = document.querySelector('.hihat')
const input = document.querySelector('input')

let data = []
let timing = 500;
let currentBeat  = 0;

console.log(data);

data.push(one.children,two.children,three.children);
// for clicking square
const musicBlock = (index) => {
    circle.forEach((element, i) => {
      if (i === index) {
        element.classList.add('update')
       
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
        play.innerHTML = "pause";

    }
    else{
        clearInterval(inter);
        fresh = null; 
        index = 0;
        play.innerHTML = "play";
    }
}
play.addEventListener("click", () => {



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
        // data[1][currentBeat].classList.add('scale');
      clap.play();
    }
 
    if (data[2][currentBeat].classList.contains("update")
    ) {
        // data[2][currentBeat].classList.add('scale')

      hihat.play()
    }
  
  }
  
   setInterval(() => {
    console.log(currentBeat)
    playBeat(currentBeat)
    if (currentBeat === 7) {
      currentBeat = 0
      circle.forEach(el=>{
        el.classList.remove('scale')

      })

    } else {
        currentBeat += 1

    }
  
  }, timing)


})

input.addEventListener("change",() => {
        const inputValue = input.value;
        
        index === 0;
        playPause()
        no = inputValue;
        console.log(no)
    })




// const circle = document.querySelectorAll('.circle');
// const play = document.querySelector('.play');
// const kickAudio = document.querySelector('.kick');
// const clapAudio = document.querySelector('.clap');



// let pushedElement = [];
// let elementId = []

// const musicPlay = (el,index) => {
//     for(var i = 1; i <= 22;i+=3){
//         if(el.getAttribute('data-text') == i ){
//                 setTimeout(() =>     el.classList.add("circle-red"), (1000*index));

//             setInterval(() => kickAudio.play(), (500))
//     }}
//     for(var i = 2;i<= 23;i+=3){
//         if(el.getAttribute('data-text') == i ){
//             // audioSound.play()
//             setInterval(() => clapAudio.play(), (500));
//             setTimeout(() =>     el.classList.add("circle-green"), (1000*index));
//             console.log("green")
//         }
//     }
//     for(var i = 3;i<= 24;i+=3){
//         if(el.getAttribute('data-text') == i ){
//             // audioSound.play()
//             setInterval(() => kickAudio.play(), (500));

//             setTimeout(() =>     el.classList.add("circle-yellow"), (1000*index));
//         }
//     }
// }

// function musicBlock(index) {
//     circle.forEach((element, i) => {
//       if (i === index) {
//         element.classList.add('update')
//        pushedElement.push(element)
//         elementId.push(element.getAttribute('data-text'));
       
//       }
//     });
//   }


//   circle.forEach((element, i) => 
//     element.addEventListener('click', () => musicBlock(i))
  
//   )
  
//   play.addEventListener("click" , () => {
//    const sortId = pushedElement.sort((a,b) => a.getAttribute('data-text')- b.getAttribute('data-text'))
//    sortId.forEach((el,index) =>{
//         musicPlay(el,index);
        
//    }
//     )

   

  
// })




















// const clapElement = document.querySelector('.k-sound');


// const audioSound = document.querySelector('.clap');
// const playBtn = document.querySelector('.play');
// const stopBtn = document.querySelector('.stop');
// const circle = document.querySelectorAll('.circle');
// const input = document.querySelector("input");
// let transitionCount = 1.5;
// const transition = `${transitionCount}` + "s";


// let firstCircle = circle[0];

// let secondCircle = circle[1];
// let thirdCircle = circle[2];
// let fourthCircle = circle[3];

// let fifthCircle = circle[4];
// let sixthCircle = circle[5];

// let seventhCircle = circle[6];
// let eigthCircle = circle[7];

// // 



// let no = 10;
// let fresh;
// let index = 0;
// const playPause = () => {
//     if(index === 0){
//         index = 1;
//         fresh = setInterval(() => audioSound.play(), (10* no));
//         playBtn.innerHTML = "pause"

//     }
//     else{
//         clearInterval(fresh);
//         fresh = null; 
//         index = 0;
//         playBtn.innerHTML = "play"
//     }
// }


// playBtn.addEventListener("click",() => {
//     document.documentElement.style.setProperty('--transition', transition);

//     firstCircle.classList.add("circle-animate");
    
//     setTimeout(() =>     secondCircle.classList.add("circle-animate"), (1000));
//     setTimeout(() =>     thirdCircle.classList.add("circle-animate"), (1500));
//     setTimeout(() =>     fourthCircle.classList.add("circle-animate"), (2000));
//     setTimeout(() =>     fifthCircle.classList.add("circle-animate"), (2500));
//     setTimeout(() =>     sixthCircle.classList.add("circle-animate"), (3000));
//     setTimeout(() =>     seventhCircle.classList.add("circle-animate"), (3500));
//     setTimeout(() =>     eigthCircle.classList.add("circle-animate"), (4000));





//     playPause()
    
// })
// stopBtn.addEventListener("click",() => {
//     stop()
    
// })


// const stop = () => { 
//     clearInterval(fresh);
//     fresh = null; 
//     playBtn.innerHTML = "play"

// }
// input.addEventListener("change",() => {
//     const inputValue = input.value;
    
//     index === 0
//     playPause()
//     no = inputValue;
//     console.log(no)
// })
