import { LightningElement,api, track } from 'lwc';

export default class Childcomp extends LightningElement {
    @api pAttr 

    constructor(){
        super();
        console.log(' child two 2 constructor is call')
    }
    connectedCallback(){
        console.log(' child two 2 connectedCallback is call');
    }
    renderedCallback(){
        console.log('child two 2 renderedCallback is call')
    }
    disconnectedCallback(){
        console.log('child two 2 disconnected call back is call')
    }
    errorCallback(){
        console.log('child two 2 errorCallback is call');
    }
}