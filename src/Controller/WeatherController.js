import { Controller } from "./Controller";

export class WeatherController extends Controller {
    initialize() {

    }


    showWeather(place) {
        let dataModel = {
            temperature: "",
            main: "",
        };
        this.model.getWeather(place, (res) => {
            dataModel.temperature = res.main.temp;
            dataModel.main = res.weather[0].main;
            this.view.render(dataModel);
        });
    }
}