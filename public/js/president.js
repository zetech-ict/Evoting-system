const form = document.querySelector("#aspirants")

//form event
form.addEventListener('submit', (e) =>{
  //when you click this button it responds by getting the data and initializing it as instructed 
    const choice = document.querySelector("input[name = zt]:checked").value
    const data = {zt:choice}
    console.log(data)
    fetch("http://localhost:3001/pages/president", {
        method:'post',
        body:JSON.stringify(data),
        Headers:new Headers({
          'content-type':'application/javascript'
        })
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
//e.is a function to desplay the defaul are of the page
    e.preventDefault()
})
//chart
let dataPoints = [
  { label: 'Kael', y: 0},
  { label: 'Suzan', y: 0},
  { label: 'Peter', y: 0},
  { label: 'John', y: 0},
]

const chartContainer = document.querySelector("#chartContainer")

if(chartContainer){
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled:true,
    theme:'theme1',
    title:{
      text:'Zetech Polls'
    },
    data:[
      {
        type:'column',
        dataPoints:dataPoints
      }
    ]
  })
  chart.render()
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        var pusher = new Pusher('73c25b9d3a1ce3868a22', {
          cluster: 'ap2'
        });
    
        var channel = pusher.subscribe('zt-poll');

        channel.bind('zt-vote', function(data) {
          dataPoints.forEach((point)=>{
              if(point.label==data.zt)
              {
                   point.y+=data.points;
              }
          });
       
        })
}
//humberger
const menuBtn = document.querySelector(".humbuger")
const mobileNav = document.querySelector(".mobile-nav")

menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle("is-active")
  mobileNav.classList.toggle("is-active")
})

