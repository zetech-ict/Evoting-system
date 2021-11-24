const form = document.querySelector("#aspirants")

form.addEventListener('submit', (e) =>{
    const choice = document.querySelector("input[type = text]").value
    const data = {zt:choice}
    console.log(data)
    fetch("http://localhost:3001/pages/library", {
        method:'post',
        body:JSON.stringify(data),
        Headers:new Headers({
            'content-type':'application/javascript'
        })
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))

    e.preventDefault()
})
let dataPoints = [
    { label: 'John', y: 0},
    { label: 'Peter', y: 0},
    { label: 'David', y: 0},
    { label: 'Mercy', y: 0},
  ]
  
  const chartContiner = document.querySelector("#chartContainer")
  
  if(chartContiner){
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
  
       var pusher = new Pusher('3a6a58dc11a8d051d8fd', {
         cluster: 'ap2'
       });
   
       var channel = pusher.subscribe('zt-poll');
  
       channel.bind('zt-vote', function(data) {
         dataPoints.forEach(x =>{
           if(x.label == data.zt){
             x.y += data.points
           }
         })
       });
  
  }
//humberger
const menuBtn = document.querySelector(".humbuger")
const mobileNav = document.querySelector(".mobile-nav")

menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle("is-active")
  mobileNav.classList.toggle("is-active")
})