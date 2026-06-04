import { LightningElement, track } from 'lwc';

export default class ThreadQuotedMsg extends LightningElement {
    @track msgId;
    @track message = Array.from({ length: 1500 }, (v, i) => ({
        id: `msg${i + 1}`,
        text: `This is message number ${i + 1}`
    }));


  

    getmethod(event){
       this.msgId =  event.target.value > 1500  ?  'msg1' :  'msg'+event.target.value 
       console.log('msgId', this.msgId);
    }

    handleQuoteMessage(event) {
        // Use msgId to scroll to the correct message element
        const messageElement = this.template.querySelector(`[data-id="${this.msgId}"]`);

        console.log('Message Elementddddddddddddddddddddddddd:', messageElement);
        
        if (messageElement) {
            messageElement.scrollIntoView(); // Scroll to the element if it exists
            console.log('Scrolled to Message Element:', messageElement); // Log the actual element
            messageElement.style.backgroundColor = "#b7f19c";
        } else {
            console.warn(`Element with ID ${msgId} not found.`);
        }
    }
}