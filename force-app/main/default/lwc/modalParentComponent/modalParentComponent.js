import { LightningElement, api } from 'lwc';

export default class ModalParentComponent extends LightningElement {

    showModal = false;
    openModal() {
        this.showModal = true;
    }
    closeDispatchEvt() {
        this.showModal = false;
    }
}