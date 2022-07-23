import { LightningElement, api } from 'lwc';

export default class SetColourToChild extends LightningElement {
    @api pickColour = 'blue';

    userDetails = [
        {
            name: 'John Doe',
            title: 'CEO & Founder',
            company: 'Harvard University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team1.jpg'
        },
        {
            name: 'Steve Smith',
            title: 'CEO & Founder',
            company: 'Standford University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team2.jpg'
        },
        {
            name: 'David Warner',
            title: 'CEO & Founder',
            company: 'Sydney University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team3.jpg'
        },
        {
            name: 'Peter Parker',
            title: 'CEO & Founder',
            company: 'Melbourne University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team4.jpg'
        }

    ]

    constructor() {
        super();
        console.log('this is child constructor ');
    }

    renderedCallback() {
        console.log('this is child rendered call back');
    }
    connectedCallback() {
        console.log('this is child connected call back');
    }
    get getStyle() {
        return `background-color: {this.pickColour}`
    }
}