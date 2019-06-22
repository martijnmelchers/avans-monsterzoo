import { View } from "./View";

export class WeatherView extends View {
    render(model){

        console.log(model);
        this.element.innerHTML = model.temperature;
    }
}