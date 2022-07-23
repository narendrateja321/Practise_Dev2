import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';

export default class LwcAccountsDisplay extends NavigationMixin(LightningElement) {
    @api accountRecords;

    viewContacts(event) {
        const recId = event.target.title;
        console.log('recId>> ', recId);
        const custEvt = new CustomEvent('sendaccount', {
            detail: event.target.title
        });
        this.dispatchEvent(custEvt);
    }
}