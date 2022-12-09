
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
        // changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        // changeImg.setAttribute("height", "100%")
    }else if(hrs >=12 && hrs <=15 ){
        dummyText.innerHTML = "Its Lunch Time🍱"; 
        // changeImg.src = "./Digital-clock-img/lunch-to.svg"
        // changeImg.setAttribute("height", "100%")
    }else if(hrs>=16 && hrs<=18){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇"; 
        // changeImg.src = "./Digital-clock-img/nap-break.svg"
        // changeImg.setAttribute("height", "100%")  
    }else if(hrs>=20 && hrs<=22){
        dummyText.innerHTML = "Get Some Dinner🥗🍜"
        // changeImg.src = "./Digital-clock-img/dinner-time.svg"
        // changeImg.setAttribute("height", "100%") 

    }else if (hrs>=23 && hrs<=24){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        // changeImg.src = "./Digital-clock-img/good-night.svg"
        // changeImg.setAttribute("height", "100%")
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
    let dummyText = document.querySelector("#box-6-h2")



    if(wake=="7am" && hrs==8){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("7am bro wake up")
    }else if(wake=="8am" && hrs==8){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("8am bro wake up")
    }else if(wake=="9am" && hrs==9){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("9am bro wake up")

    }else if(wake=="10am" && hrs==10){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("10am bro wake up")
        
    }else if(wake=="11am" && hrs==11){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("11am bro wake up")
        
    }else if(wake=="12pm" && hrs==12){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("12pm bro wake up")
        
    }else if(wake=="1pm" && hrs==13){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("1pm bro wake up")
        
    }else if(wake=="2pm" && hrs==14){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("2pm bro wake up")
        
    }else if(wake=="3pm" && hrs==15){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("3pm bro wake up")
        
    }else if(wake=="4pm" && hrs==16){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("4pm bro wake up")
        
    }else if(wake=="5pm" && hrs==17){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("5pm bro wake up")
        
    }else if(wake=="6pm" && hrs==18){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("6pm bro wake up")
        
    }else if(wake=="7pm" && hrs==19){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("7pm bro wake up")
        
    }else if(wake=="8pm" && hrs==20){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("8pm bro wake up")
        
    }else if(wake=="9pm" && hrs==21){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("9pm bro wake up")
        
    }else if(wake=="10pm" && hrs==22){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("10pm bro wake up")
        
    }else if(wake=="11pm" && hrs==23){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("11pm bro wake up")
        
    }else if(wake=="12am" && hrs==24){
        dummyText.innerHTML = "Wake Up bro 😊 Get Some Break Fast🥣"
        changeImg.src = "./Digital-clock-img/wakeup-morning.svg"
        changeImg.setAttribute("height", "100%")
        console.log("12am bro wake up")
        
    }





    // Lunch time

    if(lunch=="7am" && hrs==8){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("7am bro wake up")
    }else if(lunch=="8am" && hrs==8){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("8am bro wake up")
    }else if(lunch=="9am" && hrs==9){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("9am bro wake up")

    }else if(lunch=="10am" && hrs==10){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src  = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("10am bro wake up")
        
    }else if(lunch=="11am" && hrs==11){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src  = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("11am bro wake up")
        
    }else if(lunch=="12pm" && hrs==12){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src  = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("12pm bro wake up")
        
    }else if(lunch=="1pm" && hrs==13){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src  = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("1pm bro wake up")
        
    }else if(lunch=="2pm" && hrs==14){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src  = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("2pm bro wake up")
        
    }else if(lunch=="3pm" && hrs==15){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src  = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("3pm bro wake up")
        
    }else if(lunch=="4pm" && hrs==16){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src  = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("4pm bro wake up")
        
    }else if(lunch=="5pm" && hrs==17){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("5pm bro wake up")
        
    }else if(lunch=="6pm" && hrs==18){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src  = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("6pm bro wake up")
        
    }else if(lunch=="7pm" && hrs==19){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src  = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("7pm bro wake up")
        
    }else if(lunch=="8pm" && hrs==20){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src  = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("8pm bro wake up")
        
    }else if(lunch=="9pm" && hrs==21){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src  = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("9pm bro wake up")
        
    }else if(lunch=="10pm" && hrs==22){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("10pm bro wake up")
        
    }else if(lunch=="11pm" && hrs==23){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("11pm bro wake up")
        
    }else if(lunch=="12am" && hrs==24){
        dummyText.innerHTML = "Its Lunch Time🍱"
        changeImg.src = "./Digital-clock-img/lunch-to.svg"
        changeImg.setAttribute("height", "100%")
        console.log("12am bro wake up")
        
    }






    // nap time
    if(nap=="7am" && hrs==8){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("7am bro wake up")
    }else if(nap=="8am" && hrs==8){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("8am bro wake up")
    }else if(nap=="9am" && hrs==9){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("9am bro wake up")

    }else if(nap=="10am" && hrs==10){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("10am bro wake up")
        
    }else if(nap=="11am" && hrs==11){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("11am bro wake up")
        
    }else if(nap=="12pm" && hrs==12){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("12pm bro wake up")
        
    }else if(nap=="1pm" && hrs==13){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("1pm bro wake up")
        
    }else if(nap=="2pm" && hrs==14){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("2pm bro wake up")
        
    }else if(nap=="3pm" && hrs==15){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("3pm bro wake up")
        
    }else if(nap=="4pm" && hrs==16){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("4pm bro wake up")
        
    }else if(nap=="5pm" && hrs==17){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("5pm bro wake up")
        
    }else if(nap=="6pm" && hrs==18){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("6pm bro wake up")
        
    }else if(nap=="7pm" && hrs==19){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("7pm bro wake up")
        
    }else if(nap=="8pm" && hrs==20){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("8pm bro wake up")
        
    }else if(nap=="9pm" && hrs==21){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("9pm bro wake up")
        
    }else if(nap=="10pm" && hrs==22){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("10pm bro wake up")
        
    }else if(nap=="11pm" && hrs==23){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("11pm bro wake up")
        
    }else if(nap=="12am" && hrs==24){
        dummyText.innerHTML = "Take A Small Nap🥱Refresh Yourself😇";
        changeImg.src  = "./Digital-clock-img/nap-break.svg"
        changeImg.setAttribute("height", "100%")
        console.log("12am bro wake up")
        
    }






    // Night Time
    if(night=="7am" && hrs==8){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("7am bro wake up")
    }else if(night=="8am" && hrs==8){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("8am bro wake up")
    }else if(night=="9am" && hrs==9){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("9am bro wake up")

    }else if(night=="10am" && hrs==10){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("10am bro wake up")
        
    }else if(night=="11am" && hrs==11){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("11am bro wake up")
        
    }else if(night=="12pm" && hrs==12){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("12pm bro wake up")
        
    }else if(night=="1pm" && hrs==13){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("1pm bro wake up")
        
    }else if(night=="2pm" && hrs==14){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("2pm bro wake up")
        
    }else if(night=="3pm" && hrs==15){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("3pm bro wake up")
        
    }else if(night=="4pm" && hrs==16){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("4pm bro wake up")
        
    }else if(night=="5pm" && hrs==17){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("5pm bro wake up")
        
    }else if(night=="6pm" && hrs==18){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("6pm bro wake up")
        
    }else if(night=="7pm" && hrs==19){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("7pm bro wake up")
        
    }else if(night=="8pm" && hrs==20){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("8pm bro wake up")
        
    }else if(night=="9pm" && hrs==21){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("9pm bro wake up")
        
    }else if(night=="10pm" && hrs==22){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("10pm bro wake up")
        
    }else if(night=="11pm" && hrs==23){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("11pm bro wake up")
        
    }else if(night=="12am" && hrs==24){
        dummyText.innerHTML = "Go to Sweet Sleep😴🥱"
        changeImg.src=   changeImg.src = "./Digital-clock-img/good-night.svg"
        changeImg.setAttribute("height", "100%")
        console.log("12am bro wake up")
        
    }



});


