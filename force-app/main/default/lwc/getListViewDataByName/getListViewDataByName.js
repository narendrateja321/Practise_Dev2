// wireListInfoByName.js
import { LightningElement, wire } from 'lwc';
import { getListInfoByName } from 'lightning/uiListsApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetListViewDataByName extends LightningElement {
    showDiv = false;
    columns = [
        { label: 'FieldApiName', fieldName: 'fieldApiName' },
        { label: 'Label', fieldName: 'label' },
        { label: 'Soratable', fieldName: 'sortable' }
    ];
    selectedColumns = [];
    error;
    displayColumns;
    @wire(getListInfoByName, {
        objectApiName: ACCOUNT_OBJECT.objectApiName,
        listViewApiName: 'AllAccounts'
    }) listInfo({ error, data }) {
        if (data) {
            console.log('data>>>  ' + JSON.stringify(data));
            this.displayColumns = data.displayColumns;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.displayColumns = undefined;
        }
    }
    get getColumns() {
        return this.columns;
    }
    changeHandler(event) {
        const selectedRows = event.detail.selectedRows;
        for (let i = 0; i < selectedRows.length; i++) {
            this.selectedColumns = [...this.selectedColumns, ...selectedRows[i]];
            alert('@@:::NEW DATA:::' + JSON.stringify(selectedRows[i]));
        }
    }
    handleClick(event) {
        this.showDiv = true;
    }
}