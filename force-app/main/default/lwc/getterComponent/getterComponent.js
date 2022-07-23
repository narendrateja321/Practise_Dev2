import UserPreferencesHideSecondChatterOnboardingSplash from '@salesforce/schema/User.UserPreferencesHideSecondChatterOnboardingSplash';
import { LightningElement } from 'lwc';

export default class GetterComponent extends LightningElement {
    selectedBtn = null;
    title = 'uppercase text1';
    get getTitle() {
        return this.title.toUpperCase();
    }
    get colorPick() {
        return this.selectedBtn !== null ? (this.selectedBtn === 'ON' ? 'container green' : 'container red') : 'container yellow';
    }
    changeHandler(event) {
        console.log('selected value>>>  ' + event.currentTarget.innerText);
        this.selectedBtn = event.currentTarget.innerText;

    }

}