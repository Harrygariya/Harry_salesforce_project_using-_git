import { LightningElement } from 'lwc';

export default class DataTableLwct extends LightningElement {
     columns = [
        { label: 'Label', fieldName: 'name' },
        { label: 'Website', fieldName: 'website', type: 'url',iconPosition: 'left',iconName: 'standard:avatar',displayreadonly: true, typeAttributes:{tooltip: { fieldName: 'website'}},
        },
        { label: 'Phone', fieldName: 'phone', type: 'phone',  cellAttributes: {iconName: 'standard:avatar', iconPosition: 'left'} },
        { label: 'Balance', fieldName: 'amount', type: 'currency' },
        { label: 'CloseAt',iconName: 'utility:adduser', fieldName: 'closeAt', type: 'date' },
        {
                type: "button", fixedWidth: 34, typeAttributes: {
                label: 'action',
                name: 'Delete',
                title: 'Delete',
                disabled: false,
                variant: 'base',
                value: 'delete',
                iconPosition: 'left',
                iconName: 'utility:delete'
            }
        }

    ];

   data =[
        {   
            id:1,
            name:'harry',
            website:'google.com',
            phone:'123123123',
            amount:'1111111',
            closeAt:new Date(
                Date.now() + 86400000 * Math.ceil(Math.random() * 20)
            ),
        },
        {   
            id:2,
            name:'harry2',
            website:'google.com',
            phone:'123123123',
            amount:'1111111',
            closeAt:new Date(
                Date.now() + 86400000 * Math.ceil(Math.random() * 20)
            ),
        },
        {   
            id:3,
            name:'harry3',
            website:'google.com',
            phone:'123123123',
            amount:'1111111',
            closeAt:new Date(
                Date.now() + 86400000 * Math.ceil(Math.random() * 20)
            ),
        },
        {   
            id:4,
            name:'harry4',
            website:'google.com',
            phone:'123123123',
            amount:'1111111',
            closeAt:new Date(
                Date.now() + 86400000 * Math.ceil(Math.random() * 20)
            ),
        },




   ]
    
}