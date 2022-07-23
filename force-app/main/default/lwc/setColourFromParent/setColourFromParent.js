import { LightningElement } from 'lwc';

export default class lwc2 extends LightningElement {
    pickColour = 'blue';
    changeColour(event) {
        console.log('evt>>>>>> ', event.target.value);
        this.pickColour = event.target.value;
    }
    constructor() {
        super();
        console.log('this is parent constructor ');
    }

    renderedCallback() {
        console.log('this is paret rendered call back');
    }
    connectedCallback() {
        console.log('this is parent connected call back');
    }
}