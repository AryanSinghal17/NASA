const form = document.getElementById("search-form");
const dateInput = document.getElementById("date");
const searchHistory = document.getElementById("search-history");

const API = "NsnoT3LxzvfiF1ATUDN73GZ0HW6jLNhcxVU3UxVf";
const today = new Date().toISOString().split("T")[0];
const section = document.getElementById("current-image-container");
const heading = document.getElementById("heading");
const search = document.getElementById('search');


const arr = [];


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedDate = dateInput.value;

  if (!selectedDate) {
    alert("Please select a date");
    return;
  }

  const li = document.createElement("li");
  li.textContent = selectedDate;
  searchHistory.appendChild(li);

  const URL = `https://api.nasa.gov/planetary/apod?date=${selectedDate}&api_key=${API}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      heading.innerHTML = ` <h4>Nasa Picture of the day ${selectedDate}`;
      section.innerHTML = `
      <img src="${data.hdurl}">
      <p>${data.explanation}</p>
    `;
    arr.push(selectedDate);
    localStorage.setItem('dates',"dates : "+ JSON.stringify(arr));
    })
    .catch((error) => {
      console.log(error);
    });
});








const URL = `https://api.nasa.gov/planetary/apod?date=${dateInput.value}&api_key=${API}`;

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    section.innerHTML = `
      <img src="${data.hdurl}">
      <p>${data.explanation}</p>
    `;
    search.innerHTML = `<h3>${data.title}</h3>`
  })
  .catch((error) => {
    console.log(error);
  });

heading.innerHTML = ` <h4>Nasa Picture of the day ${today}`;

