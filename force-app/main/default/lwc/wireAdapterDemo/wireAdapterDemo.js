import { LightningElement, api } from 'lwc';
import USER_ID from '@salesforce/user/Id';

export default class WireAdapterDemo extends LightningElement {
    UserId = USER_ID;
    @api recordId;
    @api objectApiName;

}