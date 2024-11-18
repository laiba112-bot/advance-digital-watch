// setInterval(() =>{
//     let hours = document.getElementById('hours')
//     let mint = document.getElementById('mint')
//     let second = document.getElementById('second')
//     let ap = document.getElementById('ampm')
    
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();
//     let am = h >= 12 ? "pm" : "am";
    
//     if(h > 12){
//         h = h - 12;
//     }
//     h = (h < 10) ? "0" +  h : h;
//     m = (h < 10) ? "0" +  m : m;
//     s = (h < 10) ? "0" +  s : s;
    
//     hours.innerHTML = h
//     mint.innerHTML = m
//     second.innerHTML = s
//     AudioParamMap.innerHTML = am
// })
/* Reset and Base Styling */
function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const date = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initialize the time
  updateTime();
  