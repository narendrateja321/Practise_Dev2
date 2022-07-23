import { LightningElement, api } from 'lwc';

export default class NavBarChild extends LightningElement {
    @api navList
    clickHandler(event) {
        let val = event.target.text;

        console.log('val>>>  ', val);
        const customEvt = new CustomEvent('selection', {
            detail: event.target.text
        })
        this.dispatchEvent(customEvt);
    }

}