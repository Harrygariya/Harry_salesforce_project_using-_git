import { LightningElement ,track } from 'lwc';
import ImpretiveDemoClassList from '@salesforce/apex/ImpretiveDemoClass.ImpretiveAccounts'

const coloums =[
                    {label:'Account name',fieldName:'Name',name:'Account Name'},
                    {label:'Account Id',fieldName:'Id'},
                    {label:'Rating',fieldName:'Rating'},
                    {label:'Date',fieldName:'Date'}
               ]

export default class ImperativeMethodDemoHarry extends LightningElement {
    @track coloums = coloums;
    @track data = []
    
    connectedCallback(){
        ImpretiveDemoClassList().then(result=>{
            console.log(result,result);
            this.data = result;
        })
        .catch(error=>{
            console.log(error,'error');  
        })

    }
}