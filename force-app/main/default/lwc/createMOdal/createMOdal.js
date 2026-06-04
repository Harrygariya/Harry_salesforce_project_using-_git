import { LightningElement,track } from 'lwc';

export default class CreateMOdal extends LightningElement {
    @track showmodal = false;
    @track show     = false;
    @track shoemydiv= true;
    @track showmyTitle = 'Click To Show' ;  
    handleClick(event){
        this.showmodal = true;
    }
    hidemodal(event){
        this.showmodal = false;
    }

    showme(event){
        console.log('getbtn', event.target.label);
        this.show == true ? this.showmyTitle = 'Click To Show ': this.showmyTitle = 'Hide To Show';
        this.show = !this.show;
       // this.shoemydiv = !this.shoemydiv;
        // if(this.show){
        //     this.showmyTitle = 'Click To Show'
        // }
        // else{
        //     this.showmyTitle = 'Hide To Show'
        // }
        
    }

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
    
}