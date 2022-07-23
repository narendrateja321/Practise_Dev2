import { LightningElement } from 'lwc';

export default class EventBubblingChild extends LightningElement {
    childText = 'This is child component.'
    handleClick(event) {
        event.preventDefault();
        this.childText = 'Child Component After event Propagation.'
        const custEvt = new CustomEvent('mycustomevent', {
            detail: 'This Parent Text Coming from child at event propagtion.'
        });
        this.dispatchEvent(custEvt);
    }
}