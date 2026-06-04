import { LightningElement,track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class Mydatatable extends LightningElement {
    @track myopenbox = false;
    @track soo = false;
    coldt = [
        {
            label:'name',
            fieldName:'name',
            iconName:'utility:trending',
            cellAttributes: {
                iconName:  'utility:trending',
                iconPosition: 'right',
            }
        },
        {
            label:'emial',
            fieldName:'email'
        },
        {
            type: 'button-icon',
            typeAttributes:
            {
                iconName: 'utility:delete',
                name: 'delete',
                iconClass: 'slds-icon-text-error'
            }
        },
        {
            type: 'button-icon',
            typeAttributes:
            {
                iconName: 'utility:edit',
                name: 'edit',
                iconClass: 'slds-icon-text-error'
            }
        },
    ]

    rowdt =[
        {
            name:'harry',
            email:'abcd@gmail.com'
        },
        {
            name:'priya',
            email:'priya@gmail.com'
        }
    ]

    renderedCallback(event){
        const style = document.createElement('style');
        style.innerText = `
        .mybutton .slds-icon-action-close{
                background: transparent !important;
            }
            
        `;
        try {
            this.template.querySelector('.mainContainer').appendChild(style);
        }
        catch (err) {
            console.log("sss", err)
        }

        
    }

    renderedCallback(event){
        const style = document.createElement('style');
        style.innerText =`
        p{
            background-color:red;
        }`
        try{

             this.template.querySelector('.slds-modal').appendChild(style);
        }
        catch(err){
            
        }
    };
   


    myboxopen(event){
        const evt = new ShowToastEvent({
            title: 'Toast Info',
            message: 'Operation will run in background',
            variant: success,
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
        this.myopenbox =true

    }
    closemybox(event){
        this.myopenbox =false
    }

    handleClick(event){
        this.soo = !this.soo;
    }


}