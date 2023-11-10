var boxDate = document.querySelector("#box-date")
var boxTime = document.querySelector("#box-time")
var headingDate = document.querySelector("#heading-date")
var headingTime = document.querySelector("#heading-time")
var date = document.querySelector("#date")
var time = document.querySelector("#time")



// effects logic 

// date box 
var countD = true;
boxDate.addEventListener("mouseenter",function(event){
    if (countD == true) {
        headingDate.style.transform = `translateY(${-100}%)`;
    date.style.transform = `translateY(${-100}%)`;
    }
})
boxDate.addEventListener("mouseleave",function(event){
        if(countD == true){
            headingDate.style.transform = `translateY(${0}%)`;
            date.style.transform = `translateY(${100}%)`;
        }
})

boxDate.addEventListener("click",function(){
   if(countD == true){
    countD = false;
   }
   else{
    countD = true
   }
})


// time box 
boxTime.addEventListener("mouseenter",function(event){
    if (countT == true) {
    headingTime.style.transform = `translateY(${-100}%)`;
    time.style.transform = `translateY(${-100}%)`;
    }
})
boxTime.addEventListener("mouseleave",function(event){
        if (countT == true) {
        headingTime.style.transform = `translateY(${0}%)`;
        time.style.transform = `translateY(${100}%)`;
        }
})

var countT = true;
boxTime.addEventListener("click",function(){
    if(countT == true){
     countT = false;
    }
    else{
     countT = true
    }
 })

// date and time update logic
var d = new Date();
var currentDate = d.toLocaleDateString();
var dateval = document.querySelector("#date-val");
dateval.textContent = currentDate;
var timeval = document.querySelector("#time-val");
setInterval(()=>{
    var d = new Date();
    var currentTime = d.toLocaleTimeString();
    timeval.textContent = currentTime;
},1000)
