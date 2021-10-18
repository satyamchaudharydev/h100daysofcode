const daily = document.querySelector('.daily');
const month = document.querySelector('.month')
const week = document.querySelector('.week')
const card = document.querySelectorAll('.card-time');
const recentDom = document.querySelectorAll('.recent-span');
let statChange;
let dataEl = [];
let recentData = [];
fetch('./data.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(data[1].title,data[1].timeframes.daily);
     statChange = (prop) => {
       
        data.forEach(el => {
            current = el['timeframes'][prop].current;
            dataEl.push(current)
            recent = el['timeframes'][prop].previous;
            recentData.push(recent)

        });
        
        console.log(recentData)
    }

  }).catch(err => {
      console.log('err')

    // Do something for an error here
  });
  console.log(dataEl)


daily.addEventListener('click' , (element) => {
    daily.classList.add('update');
    statChange('daily')
    card.forEach((cel,i) => {
        cel.innerText = dataEl[i] + 'hrs';
    })
    recentDom.forEach((rel,i) => {
        rel.innerText = recentData[i] + 'hrs';
    })

    if(month.classList.contains('update')){
        month.classList.remove('update')
    }
    if(week.classList.contains('update')){
        week.classList.remove('update')
    } 
    dataEl = [];
    recentData = [];

})  

month.addEventListener('click' , () => {
   
    month.classList.add('update') ;
    
    if(daily.classList.contains('update')){
        daily.classList.remove('update')
    }
    if(week.classList.contains('update')){
        week.classList.remove('update')
    }    
    statChange('monthly')
    card.forEach((cel,i) => {
        cel.innerText = dataEl[i] + 'hrs';
    })
    recentDom.forEach((rel,i) => {
        rel.innerText = recentData[i] + 'hrs';
    })
    dataEl = [];
    recentData = [];


})  

week.addEventListener('click' , (el) => {
  
    week.classList.add('update') ;
   
    if(month.classList.contains('update')){
        month.classList.remove('update')
    }
    if(daily.classList.contains('update')){
        daily.classList.remove('update')
    }    
    statChange('weekly')
    card.forEach((cel,i) => {
        cel.innerText = dataEl[i] + 'hrs';
    })
    recentDom.forEach((rel,i) => {
        rel.innerText = recentData[i] + 'hrs';
    })
    dataEl = [];
    recentData = [];


})  