let date = new date();
let year = date.getFullYear();

document.querySelector("h1").innerHTML = "&copy" + year;

let currentDate = document.lastModified;

document.querySelector("div").textContent = `Last Updated: ${currentDate}`;