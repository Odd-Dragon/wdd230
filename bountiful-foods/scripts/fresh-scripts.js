/*--Fruit--*/
fetch('https://andejuli.github.io/wdd230/fruit.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject){
    console.table(jsonObject);
    const index = (jsonObject);
    index.forEach(populateFruit);
    fruits.forEach(function(item) {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
  });

const fruits = []

function populateFruit(index){
    fruitName = `${index.name}`;
    fruits.push(fruitName);
  }

  var dataList = document.getElementById('fruitList');
  var input = document.getElementById('fruit-choice');

/*--Thank you Pop-up--*/
  function popUp(){
    window.alert("Thank you!")
  }