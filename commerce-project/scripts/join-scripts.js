const date = Date.now()

if(!localStorage.getItem('lastLogin')) {populateStorage();} 
else {loginTime();}

function populateStorage() {
    localStorage.setItem('lastLogin', date);
    loginTime();}

function loginTime() {
    let lastLogin = localStorage.getItem('lastLogin');
    let daysPassed = (parseFloat(date) - parseFloat(lastLogin)) / 1000 / 60 / 60 / 24;
    let displayTime = Math.round(daysPassed);
    document.getElementById('day1').innerHTML = "It has been " + displayTime + " days since your last visit!";
    localStorage.setItem('lastLogin', date);};