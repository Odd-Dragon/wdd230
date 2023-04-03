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
const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Idaho%20Falls?unitGroup=us&key=MS52QN8HY4859X2EBHJXYAMGW&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#temp').textContent = t;
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#speed').textContent = data.currentConditions.windspeed;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#weathericon').src = image;
    document.querySelector('#weathericon').alt= data.currentConditions.conditions + ' icon';

/*--Wind Chill Calculation--*/
    let notapplicapble = " N/A"
    let temp = parseFloat(document.getElementById('temp').textContent);
    let windspeed = parseFloat(document.getElementById('speed').textContent);
    let windchill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

    if (temp <= 50.00 && windspeed >= 3.00) {
      document.getElementById('chill').innerHTML = " " + windchill + "&#176;F";}
    else{
      document.getElementById('chill').innerHTML = notapplicapble;};};
getWeather();

/*--Storage local--*/
if (!localStorage.getItem('lastvist')) {
  localStorage.getItem('lastvisit', Date.now())};