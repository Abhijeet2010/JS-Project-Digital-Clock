const hrs = document.querySelector('#hrs')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')


const showTime =()=>{  
    hrs.textContent = new Date().getHours() 
    min.textContent = new Date().getMinutes()
    sec.textContent = new Date().getSeconds()
}
// setInterval(showTime, 1000)