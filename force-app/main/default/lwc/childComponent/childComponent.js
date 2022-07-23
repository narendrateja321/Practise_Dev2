import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api className;
    @api message;

    get pickStyle() {

        return this.className !== null ? this.className : 'partial';
    }
}