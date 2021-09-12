import axios from "axios"

const API_KEY = '6c07a11b247dcf2301d0b1e7ed4b70f3';
const URL = 'https://api.openweathermap.org/data/2.5/weather';


export const getWeatherData = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}