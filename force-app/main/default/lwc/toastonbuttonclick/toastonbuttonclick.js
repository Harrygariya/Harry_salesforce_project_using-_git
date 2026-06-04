import { LightningElement, track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Toastonbuttonclick extends LightningElement {
     mytitle = 'Salesforce by harry';
    _title = 'Sample Title';
    message = 'Sample Message';
    variant = 'success';
    variantOptions = [
        { label: 'error', value: 'error' },
        { label: 'warning', value: 'warning' },
        { label: 'success', value: 'success' },
        { label: 'info', value: 'info' }
    ];

    handleclick() {
        this.showToastFunction();
    }

    showToastFunction(){
        console.log('variant');
        const evt = new ShowToastEvent({
            title: 'Toast Info',
            message: 'Operation will run in background',
            variant: this.variant,
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
        
    }
}