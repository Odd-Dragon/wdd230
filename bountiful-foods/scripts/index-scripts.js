/*--Footer Date--*/
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let weekday = weekdays[d.getDay()];
let month = months[d.getMonth()];
let day = d.getDate();
let year =d.getFullYear();
let hour =d.getHours();
let minute =d.getMinutes();
let second =d.getSeconds();
document.getElementById("day").innerHTML = weekday + ", " + day + " " + month + " " + year;
document.getElementById("time").innerHTML = hour + ":" + minute;

/*--Update Note--*/
let currentdate = document.lastModified;
      document.querySelector(".modified").textContent =
        "Last Updated: " + currentdate;

/*--Clock Hand Functionality--*/
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setClock(){
    const secondsDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minsDegrees = ((minute / 60) * 360) + ((second/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setClock();

/*--Hamburger menu--*/
const nav1 = document.querySelector('.navigation');
nav1.addEventListener('click', ()=>
{nav1.classList.toggle('shown')});

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');})

/*--weather API--*/
const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Carlsbad%2C%20California?unitGroup=us&key=MS52QN8HY4859X2EBHJXYAMGW&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t1 = data.days[0].temp;
    let h1 = data.days[0].humidity;    
    document.querySelector('#temp').textContent = t1;
    let image1 = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.days[0].icon}.svg`;
    document.querySelector('#condition').textContent =  data.days[0].conditions;
    document.querySelector('#weathericon').src = image1;
    document.querySelector('#weathericon').alt= data.days[0].conditions + ' icon';
    document.querySelector('#humidity').textContent = h1;
    let t2 = data.days[1].temp;
    let h2 = data.days[1].humidity;    
    document.querySelector('#temp2').textContent = t2;
    let image2 = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.days[1].icon}.svg`;
    document.querySelector('#condition2').textContent =  data.days[1].conditions;
    document.querySelector('#weathericon2').src = image2;
    document.querySelector('#weathericon2').alt= data.days[1].conditions + ' icon';
    document.querySelector('#humidity2').textContent = h2;
    let w2 = data.days[2].DateTime;
    let t3 = data.days[2].temp;
    let h3 = data.days[2].humidity;    
    document.querySelector('#temp3').textContent = t3;
    let image3 = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.days[2].icon}.svg`;
    document.querySelector('#condition3').textContent =  data.days[2].conditions;
    document.querySelector('#weathericon3').src = image3;
    document.querySelector('#weathericon3').alt= data.days[2].conditions + ' icon';
    document.querySelector('#humidity3').textContent = h3;
    document.querySelector('#date3').textContent = w2;
    let t4 = data.days[3].temp;
    let h4 = data.days[3].humidity;    
    document.querySelector('#temp4').textContent = t4;
    let image4 = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.days[3].icon}.svg`;
    document.querySelector('#condition4').textContent =  data.days[3].conditions;
    document.querySelector('#weathericon4').src = image4;
    document.querySelector('#weathericon4').alt= data.days[3].conditions + ' icon';
    document.querySelector('#humidity4').textContent = h4;
}

getWeather();

/*--Storage local--*/
if (!localStorage.getItem('lastvist')) {
  localStorage.getItem('lastvisit', Date.now())};

/*--Local Storage of Drinks Made--*/
function increaseCounter() {
  var count = Number(window.localStorage.getItem("drinks"));
  count += 1;
  window.localStorage.setItem("drinks", count);
  }

document.getElementById(".drink-count").innerHTML = "You have designed" + count + "unique drink recipes!";


