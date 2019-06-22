import { Config } from "./config";


export class WeatherModel {

    constructor(){
        this.override = null;
    }

    // Override allows for the ascessor to change the weather when testing.
    setOverride(status){
        this.override = status;        
    }

    getWeather(loc, callback){
        let xmlHttp = new XMLHttpRequest();
        let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${Config.weather.apiKey}&units=${Config.weather.units}`;
        console.log(requestUrl);
        fetch(requestUrl).then((response) =>{
            return response.json();
        }).then((json) => {
            if(this.override !== null){
                json.weather[0].main = this.override;
            }

            callback(json);
        })
    }
}