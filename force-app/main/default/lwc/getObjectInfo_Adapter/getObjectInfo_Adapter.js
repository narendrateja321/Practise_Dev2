import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_lightning_ui_api_object_info */

export default class GetObjectInfo_Adapter extends LightningElement {
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT }) ObjectInfo({ data, error }) {
        if (data) {
            console.log('data>>> ', data);
        }
        if (error) {
            console.log('error >>>>  ', error);
        }
    }
}