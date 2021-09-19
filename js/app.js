const API_KEY = `f9241be3f29a4f7d2463bc474c60413a`;
const searchTemprature = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemprature(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemprature = temprature => {
    setInnerText('city', temprature.name);
    setInnerText('temprature', temprature.main.temp);
    setInnerText('condition', temprature.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temprature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}