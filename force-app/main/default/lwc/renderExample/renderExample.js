import { LightningElement } from 'lwc';
import tempOne from './templateOne.html'
import tempTwo from './TemplateTwo.html'
import defaultTemp from './renderExample.html'


export default class RenderExample extends LightningElement {
    showTemplate;

    connectedCallback(){
        console.log('connectedCallback  call ')
    }

    renderedCallback(){
        console.log('renderedCallback call')
    }

    render(){
        console.log('when render is call');
        return  this.showTemplate === 'one' ? tempOne : this.showTemplate==='two' ? tempTwo : this.showTemplate === 'prev' ? defaultTemp : defaultTemp;
    }

    handleButtonClick(event){
        console.log('when click button',event.target.label);
        this.showTemplate = event.target.label;

    }


}