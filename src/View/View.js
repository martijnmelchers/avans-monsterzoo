export class View {
    constructor(element){
        this.element = element;
        this.display = true;
    }
    render(model){
        //
    }
    set display(setDisplay){
        if(setDisplay){
            this.element.style.display = "block"
        }
        else{
            this.element.style.display = "none";
        }
    }
}