import { LightningElement, api } from 'lwc';

export default class EventBubblingParent extends LightningElement {
    showParentText = false;
    @api parentText;
    customEvtHandler(event) {
        this.parentText = event.detail;
        this.showParentText = true;
        // parentbackground = 'chocolate';
        document.documentElement.style.setProperty('--parentbackground', 'coral');
    }
}