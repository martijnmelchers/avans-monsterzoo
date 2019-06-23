export class View {
    constructor(element) {
        this.element = element;
        this.display = true;
    }

    set display(setDisplay) {

    }

    static scrollToTop() {
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    render(model) {
        //
    }
}