import { LightningElement, api } from 'lwc';

export default class BarChildComponent extends LightningElement {

    className = 'background change by the parent.';
    @api changeBackColor() {
        this.className = 'Changed Value By Parent';
    }

}