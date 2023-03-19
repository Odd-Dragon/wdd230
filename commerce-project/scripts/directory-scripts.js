fetch('./scripts/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const directory = jsonObject['directory'];
    directory.forEach(showBusinesses);
    
 });

  function showBusinesses(directory) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let img = document.createElement('img');
    h2.textContent = `${directory.name}`;
    address.textContent = `${directory.address}`;
    phone.textContent = `${directory.phone}`;
    website.textContent = `${directory.website}`;
    img.setAttribute('src', directory.imageurl);
    img.setAttribute('alt', `${directory.name}`);
    img.classList.add("directory");
    h2.classList.add("directory")
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(img);
    document.querySelector('div.cards').appendChild(card);
  }
  const listView = document.querySelector('#listview');
  const cardView = document.querySelector('#cardview');
  listView.addEventListener('click', clearCards);
  cardView.addEventListener('click', clearList);
function clearCards() {
  let div = document.createElement('div');
  div.classList.add('directoryTable');
 document.querySelector('main').appendChild(div);
 let table = document.createElement('table');
  div.appendChild(table);
  table.classList.add('tableDirectory');
  let cards = document.querySelectorAll('.cards');
  cards.forEach((item)=>{
      item.remove();
  });
  fetch('./scripts/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const directory = jsonObject['directory'];
    directory.forEach(populateTable);
    
 });
};
function populateTable(directory) {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + directory.name + '</td>' +
        '<td>' + directory.address + '</td>' +
        '<td>' + directory.phone + '</td>' +
        '<td>' + directory.website + '</td>';
        document.querySelector('.tableDirectory').appendChild(tr);

};
function clearList() {
  let cards = document.createElement('div');
  cards.classList.add('cards');
  document.querySelector('main').appendChild(cards);
  tableIdToRemove = document.querySelector(".directoryTable");
  tableIdToRemove.parentNode.removeChild(tableIdToRemove);
  
  
  fetch('./scripts/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const directory = jsonObject['directory'];
    directory.forEach(displayCards);
    
 });

  function displayCards(directory) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let img = document.createElement('img');
    h2.textContent = `${directory.name}`;
    address.textContent = `${directory.address}`;
    phone.textContent = `${directory.phone}`;
    website.textContent = `${directory.website}`;
    img.setAttribute('src', directory.imageurl);
    img.setAttribute('alt', `${directory.name}`);
    img.classList.add("directory");
    h2.classList.add("directory")
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(img);
    document.querySelector('div.cards').appendChild(card);
  }
};

function changeStyles() {
if((window.innerWidth > 798 && window.innerWidth < 802) || (window.innerWidth > 1178 && window.innerWidth < 1182)){
  let div = document.createElement('div');
  div.classList.add('.directoryTable');
 document.querySelector('main').appendChild(div);
  let cards = document.querySelectorAll('.cards');
  cards.forEach((item)=>{
      item.remove();
  });
  fetch('./scripts/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const directory = jsonObject['directory'];
    directory.forEach(populateTable);
    
 });
};
    };
window.addEventListener('resize', changeStyles);