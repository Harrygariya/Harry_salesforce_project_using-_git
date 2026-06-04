import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class Lightningformcllback extends LightningElement {
    @track emailvalue = 'neel2112212@gmail.com';
    @track mobilevalue = '9560338994';
    namevalue = '';
    mytitle = '';
    _title = '';
    message = '';
    variant = '';
    @track show = false;
    @track ClickToAge = 'clickToAge';


    //    connectedCallback(){
    //     alert(1);

    //    }

    renderedCallback() {
        const style = document.createElement('style');
        style.innerText = `
        .testfrm .slds-form-element__label{
            color:green;
            
        }
        .testfrm .slds-input{
        padding:15px;
            ont-size: 16px;
            
        }
        .testfrm .slds-card{
            margin-top: 16px;
        }

        .slidein {
            border-radius: 15px;
            padding:20px;
            animation-duration: 6s;
            animation-name: slidein;
            animation-iteration-count: 6;
            animation-direction: alternate;
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
            shadow-2xl	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
            shadow-inner	box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
            shadow-none	box-shadow: 0 0 #0000;
            background-image: linear-gradient(to left bottom, #22f40d, #dcc500, #ff830e, #ff4783, #f05ad6);

          }
          
          @keyframes slidein {
            from {
              margin-right: 30%;
              width: 100%;
              text-shadow: -1px 1px 0 #red, -6px 6px 0 #blue,-7px 7px 0 #green;
            }
          
            to {
              margin-left: 30%;
              width: 100%;
                  text-shadow: 
      
            }
          }
        `;

        try {
            this.template.querySelector('.myconatiner').appendChild(style);

        }
        catch (err) {
            console.log("rendererror", err)
        }


    }




    handleEmailChange(event) {
        console.log(event.detail.value);
        console.log(event.target.value);
        this.emailvalue = event.detail.value;
    }
    handleMobileChange(event) {
        this.mobilevalue = event.detail.value;
    }
    handlenameChange(event) {
        this.namevalue = event.detail.value;
    }
    handleCancel() {
        this._title = 'this is empty';
        this.message = 'Plese Fill all Fields'
        this.variant = 'error'

        this.emailvalue = '';
        this.namevalue = '';
        this.mobilevalue = '';

        this.showToastFunction()
    }

    handleNext() {
        // this.show = !this.show;
        this.show = !this.show; // you are hero
        // const userDisplayMessage = this.show == true ? this.show = false : this.show = true;
        if (this.show = false) {
            this.show = true;

        } else {
            this.show = false
        }




        if (this.show == true) {
            this.ClickToAge = 'hideAgebox'
        }
        else {
            this.ClickToAge = 'openAgebox'
        }
        console.log(110, this.show)
        // this.show == false ? this.clickToAge ='hideAgebox' : this.clickToAge ='openAgebox';
        console.log(111, this.show)
        if (this.emailvalue != '' && this.namevalue != '' && this.mobilevalue != '') {
            // alert('email'+this.emailvalue);
            // alert('name'+this.namevalue);
            // alert('phoneno'+this.mobilevalue);
            this._title = 'great';
            this.message = 'all Fields are filled'
            this.variant = 'success'
            this.showToastFunction();
        }
        else {
            this._title = 'this is empty';
            this.message = 'Plese Fill all Fields'
            this.variant = 'error'
            this.showToastFunction()
        }

    }

    showToastFunction() {
        console.log('variant');
        const evt = new ShowToastEvent({
            title: this._title,
            message: this.message,
            variant: this.variant,
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);

    }



    @track fullname = {
        firstname: "",
        lastname: ""
    };

     first = '';


    //error = variant
    obj;
    handleChange(event) {
        // this solution need track decorator in arry and object type.
        const field = event.target.name;
        // if (field === 'firstname') {
        //     this.fullname.firstname = event.target.value;
        // } else if (field === 'lastname') {
        //     this.fullname.lastname = event.target.value;
        // }
            // other solution without track
            // this.fullname["firstname"] = event.target.value;
            // this.fullname["lastname"] = event.target.value;
           

          
            this.fullname = { 
                ...this.fullname, 
                [event.target.name]: event.target.value 
            };
            // if(field== 'firstname'){
            //     console.log( '184',this.fullname)
            //     this.fullname = {...this.fullname,"firstname":event.target.value}
            // }else{
            //     this.fullname = {...this.fullname,"lastname":event.target.value   }    
            // }
            
           
            
        //  this.fullname = {...this.fullname,"firstname":event.target.value ,"lastname":event.target.value}
        console.log( '186',this.fullname)






    }

    handleChangetoSetter(event) {
        console.log('setter--------------->>>',)
        this.myname = event.target.value;
    }

    get fullnameDisplay() {
        console.log('get firstname', this.fullname.firstname)
        console.log('get last name', this.fullname.lastname)

        return `${this.fullname.firstname.toUpperCase()} ${this.fullname.lastname.toUpperCase()}`.trim();
    }

    set myname(val) {
        console.log('val inside setter', val);
        this.first = val;
    }







}