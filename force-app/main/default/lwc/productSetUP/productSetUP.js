import { LightningElement } from 'lwc';
export default class ProductSetUP extends LightningElement {

    submitHandler(event) {
        event.preventDefault();
        let frm = event.target;
        let frmdata = new FormData(frm);
        console.log("asdfghjkl",event)
        frmdata.forEach((val, key) => {
            console.log(key+'--'+val);
        })
    }
    

    onInputChange(event){
        console.log("test inputchange")
    }




    



}