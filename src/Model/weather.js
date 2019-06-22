import { Config } from "./config";


export class WeatherModel {
    getWeather(loc, callback){
        let xmlHttp = new XMLHttpRequest();
        let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${Config.weather.apiKey}&units=${Config.weather.units}`;
        fetch(requestUrl).then(function(response){
            return response.json();
        }).then(function(json){
            callback(json);
        })
    }
}