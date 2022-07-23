import { LightningElement } from 'lwc';

export default class BarParentComponent extends LightningElement {
    changeColor() {
        console.log('button clicked');
        this.template.querySelector('c-bar-child-component').changeBackColor();
    }
}