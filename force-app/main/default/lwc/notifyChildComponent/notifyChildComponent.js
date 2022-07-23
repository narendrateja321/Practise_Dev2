import { LightningElement } from 'lwc';

export default class NotifyChildComponent extends LightningElement {
    showChildNotification = false
    bubbleClick() {
        this.showChildNotification = true
    }
    clickHandler() {
        const customEvt = new CustomEvent('selection', {
            bubbles: true
        })
        this.dispatchEvent(customEvt)
    }
}