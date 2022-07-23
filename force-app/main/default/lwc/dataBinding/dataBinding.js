import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    fullName = "Narendra Teja";
    onkeyupd(event) {
        this.fullName = event.target.value;
    }
}