export class WeatherModel {
    getWeather(loc, callback){
        let xmlHttp = new XMLHttpRequest();
        let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=93c1bff2d02ce75777a3fcc1bdf35da7&units=metric`;
        fetch(requestUrl).then(function(response){
            return response.json();
        }).then(function(json){
            callback(json);
        })
    }
}