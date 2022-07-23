import { LightningElement, api } from 'lwc';

export default class ModalChildComponent extends LightningElement {
    @api showHeader
    @api showBody
    closeModal() {
        this.dispatchEvent(new CustomEvent('close'));

    }
}