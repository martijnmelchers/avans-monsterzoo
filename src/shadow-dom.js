var header = document.createElement("header");
var shadowRoot = header.attachShadow({mode: 'open'});

// Base custom element class that handles shadow dom.
export class CustomElement extends HTMLElement {

        // Define template name with super("<template_name>")
        constructor(templateName){
            super();

            let template = document.getElementById(templateName);
            let templateContent = template.content;
            const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(templateContent.cloneNode(true));
        }
}


// Example custom element implementation.
export class SausElement extends CustomElement {
    get open(){
        return this.hasAttribute('open');    
    }
    constructor(){
        super("saus-template");   

        this.a
    }
}