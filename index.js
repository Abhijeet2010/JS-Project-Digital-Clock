
// Digital Clock
const showTime =()=>{
    let data = new Date()
    hrs = data.getHours() 
    min = data.getMinutes()
    sec = data.getSeconds()
    am = document.querySelector('#am')

    if(hrs>=12){
        am.innerHTML = "PM"
    }else{
        am.innerHTML = "AM"
    }

        hrs >12 ? hrs = hrs-12 : hrs
    document.querySelector('#hrs').innerHTML = hrs + "<br/> Hrs"
    document.querySelector('#min').innerHTML = min + "<br/> Mins"
    document.querySelector('#sec').innerHTML = sec + "<br/> Secs"
}

setInterval(showTime, 1000)


// greets(Texts) changing according to TimeZone👆

const timeGrettings =()=>{
    let getData = new Date()
    let hrs = getData.getHours()
    let dummyText = document.querySelector("#box-6-h2")
    let greetTexts = document.querySelector("#box-4-h2")
    let changeImg = document.getElementById('box-7-img')

    // box-greets and gave quotes
    if(hrs<12){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
    }else if(hrs >=12 && hrs <=15 ){
        dummyText.innerHTML = "Its Lunch Time🍱"; 
        changeImg.src = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
    }else if(hrs>=16 && hrs<=18){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇"; 
        changeImg.src = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")  
    }else if(hrs>=20 && hrs<=22){
        dummyText.innerHTML = "Get Some Dinner🥗🍜"
        changeImg.src = "./Digital-clock-img/dinner-time.svg"
        changeImg.setAttribute("height", "100%") 

    }else if (hrs>=23 && hrs<=24){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
    }else{
        dummyText.innerHTML = "Next Lovely Day is Waiting For you😉🤩"
    }
    // box-4-greets
    if(hrs<12  ){
        greetTexts.innerHTML = "Very Goood Morning ⛅🤗"       
    }else if(hrs >=12 && hrs <=15 ){
        greetTexts.innerHTML = "Good Afternoon Bro🌞😄"; 
    }else if(hrs>=16 && hrs<=18){
        greetTexts.innerHTML = "Good Evening Buddy✌😅";
    }else if (hrs>=23 && hrs<=24){
        greetTexts.innerHTML = "Good Night Dear🌛😴"
    }else{
        greetTexts.innerHTML = "Dont watch Mobile😡Take Some Rest😴"
        }

}
setInterval(timeGrettings, 1000)


// button "click" Eventlistner:- 

document.getElementById('btn').addEventListener('click',()=>{
    let data = new Date()
   let hrs = data.getHours()
    min = data.getMinutes()
    sec = data.getSeconds()
    am = document.querySelector('#am')
    
    // getting value from select tag in html
    let wake = document.getElementById('select-wake').value
    let lunch = document.getElementById('select-lunch').value
    let nap = document.getElementById("select-nap").value
    let night = document.getElementById('select-night').value
    // console.log(wake)

    // selecting box-8 > span tag to show text inside of it which is selected by select tag from above👆 when button will click.

    let wakeUp  =   document.getElementById('box-8-span-1')
    let lunchTime  =   document.getElementById('box-8-span-2')
    let napTime   =  document.getElementById('box-8-span-3')
    let nightTime =  document.getElementById('box-8-span-4')


    wakeUp.innerHTML = `Wake up Time is : ${wake} <br/>`
    lunchTime.innerHTML = `Lunch Time is : ${lunch} <br/>`
    napTime.innerHTML = `Nap Time is : ${nap} <br/>`
    nightTime.innerHTML = `Night Time is : ${night} <br/>`

    // selecting img tag for changing image click on button
    let changeImg = document.getElementById('box-7-img')

});


