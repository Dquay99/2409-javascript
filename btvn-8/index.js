const boxweather = document.getElementsByClassName('box-weather')[0];


(async function getdataweather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric')
    const data = await response.json();

    boxweather.innerHTML = data.list.map((weather,idx) => {
        return `
            <h1> stt: ${idx +1}</h1>
            <h1 class="day-time">${new Date(weather.dt_txt)}</h1>
            <h1 class="nhietdo">${weather.main.temp}</h1>
            <h1 class="decription">${weather.weather.description}</h1>
            <img class="img-weather" src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" >
        `;
    });
})();

