var input = document.querySelector('.input_text');
var main = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var feel = document.querySelector('.feel');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=eda323d67a10c230e5cbdcee2b71e7f7&units=metric')


.then(response => response.json())
.then(data => {
  var country = data['sys']['country'];
  var nameValue = data['name'];
  var tempValue = data['main']['temp'];
  var feels_like = data['main']['feels_like'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = country + ", " + nameValue;
  temp.innerHTML = tempValue + " &#x2103;";
  feel.innerHTML = "Feels like " + feels_like + " &#x2103;";
  desc.innerHTML = descValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})