import { LightningElement , track } from 'lwc';
export default class Aidash extends LightningElement {
  @track iTextOptions = [
        { label: 'iText Option 1', value: 'iText1' },
        { label: 'iText Option 2', value: 'iText2' }
    ];

    @track channelOptions = [
        { label: 'Website Chat', value: 'website' },
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Messenger', value: 'messenger' },
        { label: 'Telegram', value: 'telegram' }
    ];

    @track numberOptions = [
        { label: '+91 1234567890', value: 'num1' },
        { label: '+91 9876543210', value: 'num2' }
    ];

    handleSave() {
        // Placeholder for Save logic
        console.log('Bot settings saved!');
    }

}