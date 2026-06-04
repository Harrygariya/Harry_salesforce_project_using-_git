import { LightningElement,track,wire,api } from 'lwc';
import getOpportunityList from '@salesforce/apex/OpportunityData.getOpportunityData';
import { NavigationMixin } from 'lightning/navigation';


export default class Navtaarcomp extends LightningElement {

    @track lblvalue ='show table';
    @track dtshow = false;
    @track dt = [];
    @api recordId; // it store curent page record ID;
    @api searchKey = '';

   col=[
        {
            label:'name',
            fieldName:'Name',
            type:'url',
            iconName: 'utility:trending',

        },
        {
            label:'AccountId',
            fieldName:'AccountId',
            iconName:'utility:add',
          
            
        },
        {
            label:'Phone',
            fieldName:'Phone',
            iconName:'utility:add',
           
        },
        {
            label:'StageName',
            fieldName:'StageName',
            iconName:'utility:add',
            type:'url',
            typeAttributes: {
                 iconName: 'utility:trending',
                
            },
            
        },
        {
            label:'OppId',
            fieldName:'Id',
            iconName:'utility:add',
            type:'button',
            typeAttributes: {
                label:{fieldName:'Id'}
               
               
           },
        }
    ]

    
    //@wire(getOpportunityList, { lwcRecordId: $recordId })
    // @wire(getOpportunityList)
    // wiredOpp({data,error}){
        
    //     if(data){
    //         console.log('dataharry',data);
    //         this.dt = data;
    //     }
    //     else if(error){
    //         console.log('error',error);
    //     }
    //  }

   

    connectedCallback() {
      setTimeout(() => {
        // let inputElement = this.template.querySelector('.myinput');
        // console.log(JSON.parse(JSON.stringify(inputElement)));
        // inputElement.focus();
    
        // Retrieve opportunity data after setting the focus
        getOpportunityList({ lwcRecordId: this.recordId })
          .then((data) => {
            console.log(this.recordId, 'data78');
            this.dt = data;
          })
          .catch((error) => {
            console.error(error);
          });
      }, 2000); // Wait 2 seconds
    }
    

  // connectedCallback(){
  
  //   setTimeout(()=>{
  //     let inputElement = this.template.querySelector('.myinput');
  //     console.log(JSON.parse(JSON.stringify(inputElement)));
  //     inputElement.focus();
  //     // console.log('inputElement',inputElement)
  //   }, 2000);//wait 2 seconds
  //   getOpportunityList({ lwcRecordId: this.recordId }).then((data)=>{
  //       console.log(this.recordId,'data78');
  //       this.dt = data;
  //   })
    
   
    //inputElement.focus();
   
 // }

    renderedCallback() {
    
        setTimeout(() => {
          let inputElement = this.template.querySelector('.myinput');
          console.log('testing----------->>>',JSON.parse(JSON.stringify(inputElement)));
          inputElement.focus();
        }, 500); // Wait 2 seconds
      
      

      const style = document.createElement('style');

        style.innerText = `
        .mybtunx .slds-button {
                background:red;
               }
         
    `;
    
        try {
          this.template.querySelector('.mycls').appendChild(style);
          let btn = this.template.querySelector('.mybtunx');
        }
        catch (err) {
          console.log("sss", err)
        }
      }


      chagelbl(event){
        this.dtshow = !this.dtshow;
      
        this.lblvalue == 'show table' ? this.lblvalue ='Hide table': this.lblvalue ='show table';
      }
      handleRowActions(event){
          // alert(1);
          // const actionName = event.detail.action.name;
          const row = event.detail.selectedRows;
          console.log('row--->>',JSON.parse(JSON.stringify(row)));
          //  this[NavigationMixin.Navigate]({
          //      type: 'standard__recordPage',
          //      attributes: {
          //          recordId: row.Id,
          //          actionName: 'view'
          //      }
          //  });
          
        }
       
       handleChange(event){
        this.searchKey = event.detail.value;
        console.log(event.detail.value);
        // send search key and record id apex
        getOpportunityList({searchKeys : this.searchKey , lwcRecordId :this.recordId}).then(res => {
          this.dt = res;
          console.log(res,'insidesearch')
        })
        .catch(error=>{
          console.log(error)
        })

       }
 
       


      
}