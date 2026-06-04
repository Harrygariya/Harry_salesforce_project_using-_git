import { LightningElement,track,api} from 'lwc';
import {loadScript, loadStyle } from 'lightning/platformResourceLoader';
// import resourcefile from '@salesforce/resourceUrl/google';
import translateResource from '@salesforce/resourceUrl/translateResource';



export default class Amitsirparentcomp extends LightningElement {
  @track myBtnlabel;
  @track isrendred = true;

  showchild = false;
  myBtnlabelhide;
  paasdataonchild= "i child passing data";
//    @track sentiment ='positive';

//      get barClass (){
//         console.log('sentiment');
//         if (this.sentiment == 'positive'){
//             return 'bar positive'
//         }
//         else if(this.sentiment == 'negetive'){
//              return 'bar negetive'
//         }
//         else{
//             return 'bar netural'
//         }
//     } 

//  haary today task
@api result; // expects result = { sentiment: 'positive' | 'neutral' | 'negative' }

result = { sentiment : 'positive' }



 get orderedBars() {
    const allBars = [
      { label: 'positive', class: 'bar positive', style: 'width: 10%;opacity:0.4' },
      { label: 'neutral', class: 'bar neutral', style: 'width: 10%;opacity:0.4' },
      { label: 'negative', class: 'bar negative', style: 'width: 10%;opacity:0.4' }
    ];

    // find matching sentiment
    const matchIndex = allBars.findIndex(bar => bar.label === this.result?.sentiment);
    
    if (matchIndex !== -1) {
      const matched = allBars.splice(matchIndex, 1)[0];
      matched.style = 'width: 80%;opacity:1';
      allBars.push(matched); // move matched to end
    }

    return allBars;
  }



    // constructor(){
    //     super();
    //     console.log('constructor is call')
    // }

    connectedCallback(){
       // this.myBtnlabel= 'hello LWC ' ;
        
        Promise.all([
            loadScript(this, translateResource + '/translateResource/translate.js'),
        ])
        .then(() => {
            console.log("SUCCESS: Script loaded.");
        })
        .catch(error => {
            console.error("ERROR: Failed to load script.", error);
        });
    


       
     
       // this.myBtnlabelhide= 'hide child Element '
        //  requestAnimationFrame(() => {
        //      this.myBtnlabel= 'hello LWC ' 
        //     // DOM manipulation or actions that should happen after the DOM is fully rendered
        //     console.log("sdsdsdsdsdsd",this.template.querySelector('lightning-button').label)
        // });
        console.log("resourcefile",translateResource);
        console.log('connectedCallback is call');
          

    }
    renderedCallback(){
      //  this.myBtnlabel= 'hello LWC '  // never use renderedcallback like this .bcoz yhat is change after button click
        console.log('renderedCallback is call')
        // if(this.isrendred){
        //     this.myBtnlabel= 'hello LWC in rendredcall back ' 
        // }
        // this.isrendred = false;
       
    }

   @track user_data= {
    "address":{
        street : "A 45 enclave",
        city : "noida",
        state:"UP"
    },
    name: "subrata sinha",
    age: '28',
    occupation:"softwareEngineer"
   
    }

    inputonchange(value){
        this.user_data.address.city = value.target.value;
        // this.address = {...this.address,"city":value.target.value }


        //  this.user_data = {
        //     ...this.user_data,address:{
        //         ...this.user_data.address,city:value.target.value
        //     }
        //  }
         console.log(JSON.stringify( this.user_data),'harry');
        }

    handleClick(){
    // this.myBtnlabel= 'show child Element '
     this.showchild = !this.showchild;
     console.log('handleClick is call', this.myBtnlabel);
     this.myBtnlabel = this.showchild !== true ? 'show child Element' : 'hide child Element';
    }


    

    disconnectedCallback(){
        console.log('disconnected call back is call')
    }
    
    errorCallback(error,stack){
        console.log(error,'errorCallback is call');
        console.log(stack,'stack');
        throw error;
    }


  

   


}