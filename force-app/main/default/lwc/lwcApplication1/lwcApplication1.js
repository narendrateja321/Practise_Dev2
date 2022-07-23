import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/lwcApplication1_Controller.getContacts';

export default class LwcApplication1 extends LightningElement {
    showAccountsBlock = false;
    showContactsBlock = false;
    @api accountRecords;
    contactsToDisplay;

    onSearchCompEvent(event) {
        this.accountRecords = event.detail;
        this.showAccountsBlock = true;
        this.showContactsBlock = false;
        console.log('accounts>>> ' + JSON.stringify(this.accountRecords));
    }
    onAccountClick(event) {
        console.log('detail>>> ' + event.detail);

        getContacts({ accountId: event.detail })
            .then(result => {

                this.contactsToDisplay = result;
                this.showContactsBlock = true;
                console.log('contacts>>> ', this.contactsToDisplay);
            }).catch(error => {
                console.log('error block');
            })

    }
}