import { LightningElement, api, wire } from 'lwc';
import GET_ACCOUNTS from '@salesforce/apex/lwcApplication1_Controller.getAccounts';

export default class LwcSearchComp extends LightningElement {
    inputText;
    @api AccountRecords;
    @api errorText;

    @wire(GET_ACCOUNTS) AccountRecords
    handleClick(event) {
        this.inputText = event.target.value;
        GET_ACCOUNTS({ inputText: this.inputText })
            .then(result => {

                this.AccountRecords = result;
                this.errorText = undefined;
                console.log('records>>> ', this.AccountRecords);
                const custEvt = new CustomEvent('searchcompevent', {
                    detail: this.AccountRecords

                });
                this.dispatchEvent(custEvt);
            })
            .catch(error => {
                this.errorText = error;
                this.AccountRecords = undefined;
            });
    }
    inputChangeHandler(event) {
        this.inputText = event.target.value;
    }
}