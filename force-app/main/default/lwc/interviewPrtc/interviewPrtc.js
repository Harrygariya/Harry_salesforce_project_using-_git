import { LightningElement, track } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import intlJS from '@salesforce/resourceUrl/IntLJS';
import intlc from '@salesforce/resourceUrl/intlc';

export default class InterviewPrtc extends LightningElement {
    @track phoneNumber = "+91 9876543210"; // Default phone number
    libsLoaded = false;
    isInitialized = false;

    connectedCallback() {
        Promise.all([
            loadScript(this, intlJS),
            loadStyle(this, intlc)
        ])
        .then(() => {
            console.log('intlTelInput loaded in connectedCallback');
            this.libsLoaded = true;
        })
        .catch(error => {
            console.error('Error loading intlTelInput:', error);
        });
    }

    renderedCallback() {
          const input = this.template.querySelector('[data-id="phoneInput"]');
            console.log('Initializing intlTelInput on input', input);

        if (this.libsLoaded && !this.isInitialized) {
            const input = this.template.querySelector('[data-id="phoneInput"]');
            if (input && window.intlTelInput) {
                console.log('Initializing intlTelInput on input', input);
                window.intlTelInput(input, {
                    initialCountry: 'in',
                    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
                });
                this.isInitialized = true; // Mark as initialized
            }
        }
    }
}