// apexWireMethodToProperty.js
import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/lwcApplication1_Controller.getContactList';

export default class WireCheck extends LightningElement {
    accountRecords;
    error;

    @wire(getContactList) contacts({ error, data }) {
        console.log('wire');
        if (data) {
            console.log('wire ');
            console.log('success block entered1');
            this.accountRecords = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }

    testmethod() {
        console.log('testmethod');
    }
    constructor() {
        super();
        console.log('constriu...> ', this.testmethod());
    }
    connectedCallback() {

        console.log('connected...> ', this.accountRecords);
    }
    renderedCallback() {

        console.log('rendered...> ', this.x);
    }

}