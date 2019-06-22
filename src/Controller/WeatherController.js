import { Controller } from "./Controller";

export class WeatherController extends Controller {
    initialize(){

    }
    showWeather(place){
        let dataModel = {
            temperature: "",
        }
        this.model.getWeather(place, (res) => {
            dataModel.temperature = res.main.temp;
            this.view.render(dataModel);     
        });
    }
}