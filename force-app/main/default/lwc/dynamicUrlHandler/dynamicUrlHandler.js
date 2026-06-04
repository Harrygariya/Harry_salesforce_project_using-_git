import { LightningElement, track } from 'lwc';
import fetchExternalData from '@salesforce/apex/ProxyController.fetchExternalData';

export default class DynamicUrlHandler extends LightningElement {
    @track data;
    @track error;

    // url = 'https://jsonplaceholder.typicode.com/posts/1'; // Replace with your dynamic URL
    //url = 'https://360degree-e-dev-ed.my.salesforce.com'
    relativePath = '/posts';
    

    connectedCallback() {
        this.loadExternalData();

    }

    loadExternalData() {
        fetchExternalData({ dynamicUrl: this.relativePath })
            .then((result) => {
                this.data = JSON.parse(result); // Parse JSON if required
                console.log('Data fetched:', this.data);
            })
            .catch((error) => {
                this.error = error;
                console.error('Error fetching data:', this.error );
                this.error = JSON.stringify(error); 
            console.error('Error fetching data:', this.error); 
            });
    }
}