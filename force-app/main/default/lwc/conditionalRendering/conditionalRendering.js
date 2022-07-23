import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track inputText = null;
    get checkVal() {
        return this.inputText === 'gems';
    }
    keyHandler(event) {
        this.inputText = event.target.value;
    }
}