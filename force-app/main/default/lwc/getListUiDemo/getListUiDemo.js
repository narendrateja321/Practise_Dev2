import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetListUiDemo extends LightningElement {
    AccountList;
    error;
    showListView;
    nextPageToken;
    previousPageToken;
    @wire(getListUi, {
        objectApiName: ACCOUNT_OBJECT,
        listViewApiName: 'AllAccounts'
    }) wiredListUI({ error, data }) {
        if (data) {
            this.AccountList = data.records.records;
            this.error = undefined;

        }
    }


    renderedCallback() {
        console.log('rendered callback ');
    }
    connectedCallback() {
        console.log('connected call back   ');
    }

}