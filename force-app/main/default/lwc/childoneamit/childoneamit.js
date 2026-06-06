import { LightningElement,api } from 'lwc';

export default class Childoneamit extends LightningElement {
    @api sendtochild;
    constructor(){
        super();
        console.log(' first call is -----when class call --constructor is call automatic----> child constructor is call')
    }
    connectedCallback(){

        console.log(' child connectedCallback is call',console.log(JSON.stringify(this.sendtochild)));
        
    }
    renderedCallback(){
        console.log('child renderedCallback is call',console.log(JSON.stringify(this.sendtochild)))
    //throw new Error('Faild Component not loaded IN CHILD')
    }
    disconnectedCallback(){
        console.log('child disconnected call back is call',console.log(JSON.stringify(this.sendtochild)))
    }
    errorCallback(error,stack){
        console.log(error,'child errorCallback is call',);
        console.log(stack,'child errorCallback is call');
    }



}