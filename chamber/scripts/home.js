const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const LAT = '12.0464', LON = '-77.0428';

const currentEl = document.getElementById('current-weather');
const forecastEl = document.getElementById('forecast');
const spotlightEl = document.getElementById('spotlight-cards');
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

// Toggle mobile nav
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCurrent(data.current);
  displayForecast(data.daily.slice(1, 4));
}

function displayCurrent(cur) {
  currentEl.innerHTML = `
    <h3>${cur.temp.toFixed(1)}°C</h3>
    <p>${cur.weather[0].description}</p>
  `;
}

function displayForecast(days) {
  forecastEl.innerHTML = '';
  days.forEach(d => {
    const date = new Date(d.dt * 1000).toLocaleDateString(undefined, { weekday:'short', day:'numeric', month:'short' });
    const card = document.createElement('div');
    card.className = 'member-card';
    card.innerHTML = `
      <h4>${date}</h4>
      <p>${d.temp.day.toFixed(1)}°C</p>
      <p>${d.weather[0].description}</p>
    `;
    forecastEl.appendChild(card);
  });
}

async function fetchSpotlights() {
  const resp = await fetch('data/members.json');
  const members = await resp.json();
  const pool = members.filter(m => m.membership >= 2);
  pool.sort(() => Math.random() - 0.5);
  pool.slice(0, 3).forEach(m => {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.innerHTML = `
      <h3>${m.name}</h3>
      <img src="images/${m.image}" alt="${m.name}" />
      <p>${m.address}</p>
      <p>${m.phone}</p>
      <p>Level: ${m.membership === 3 ? 'Gold' : 'Silver'}</p>
      <a href="${m.website}" target="_blank">Visit Site</a>
    `;
    spotlightEl.appendChild(card);
  });
}

window.addEventListener('load', () => {
  fetchWeather();
  fetchSpotlights();
});
