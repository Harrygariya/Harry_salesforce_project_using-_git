import { LightningElement , wire,track } from 'lwc';

import getAccountsList from '@salesforce/apex/Comboboxdemo.getAccounts'
// row actions
 let  actions = [
    { label: 'show_details', name: 'show_details'}, 
    { label: 'Edit', name: 'edit'}, 
    { label: 'Delete', name: 'delete'}
];


export default class WireDemobyharry extends LightningElement {
    


     @track columns = [
        { label: 'Label', fieldName: 'Name' , typeAttributes: { tooltip: { fieldName: 'Phone' } }},
        { label: 'Account record id', fieldName: 'Id' },
        { label:'Phone number', fieldName: 'Phone', type: 'phone' , iconName:'standard:log_a_call',cellAttributes:{ 
                iconName :'standard:log_a_call',
                iconPosition:'left'
            },typeAttributes:{tooltip:{ 
                        fieldName: 'phone' }
                    },
                },{
                    type: 'action',
                    typeAttributes: {
                        rowActions: actions,
                        menuAlignment: 'right'
                    }
                }
            ];
    @track data = [];
    @wire(getAccountsList)
    wiredAccount({data,error}){
        if(data){
            console.log('data',data);
            this.data = data;

        }
        else if(error){
            console.log('error',error);
        }
     }

     getSelectedName(event){
       // console.log('getSelecte--->>',JSON.parse(JSON.stringify(event.detail.row)));
        console.log('getSelecte--->>',event.detail.selectedRows);
       // console.log('getSelecte--3->>',event.detail.row);
     }

     handleRowAction(event) {
        const action = event.detail.action;
        const row = event.detail.row;
        console.log('row--->>',JSON.stringify(action));
        // console.log('row--->>',JSON.parse(JSON.stringify(row)));
        switch (action.name) {
            case 'show_details':
                alert('Showing Details: ' + JSON.stringify(row));
                break;
            case 'delete':
                const rows = this.data;
                const rowIndex = rows.indexOf(row);
                console.log('row--->>',JSON.parse(JSON.stringify(row)));
                console.log('rowindex--->>',JSON.parse(rowIndex));
                //rows.splice(rowIndex, 1);
                console.log('data-->>',JSON.parse(JSON.stringify(rows)));
                // this.data = rows;
                break;
             }
       }
}