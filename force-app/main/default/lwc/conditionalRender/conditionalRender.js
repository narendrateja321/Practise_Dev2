import { LightningElement } from 'lwc';

export default class ConditionalRender extends LightningElement {
    textDisplay = false;

    btnClick() {
        this.textDisplay = !this.textDisplay;
    }
}