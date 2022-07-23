import { LightningElement } from 'lwc';

export default class NotifyParentComponent extends LightningElement {
    showParentNotification = false
    parentClickHandle() {
        this.showParentNotification = true

    }
}