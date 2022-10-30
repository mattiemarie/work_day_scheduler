
//Current Day Display
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd MMMM Do, YYYY"));

//Saving to Local Storage
const eventInput = document.querySelector('.event-9hr');
const text = document.querySelector('.event-9hr');
const button = document.querySelector('.button-9hr');

storageInput.addEventListener('input', letter =>{
    text.textContent = letter.target.value
});