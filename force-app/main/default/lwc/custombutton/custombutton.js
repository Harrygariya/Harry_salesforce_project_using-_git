import { LightningElement, track } from 'lwc';

export default class LoopupLwc extends LightningElement {
    @track tempOptions;
    @track finalOption = [];
    @track value;
    @track selectedItems = [];
    @track islistvisible = false;
    @track isPills = true;
    /* @save */
    @track options = [
        {
            value: 'Account',
            label: 'Account',
            isSelected: false,
            iconName: "standard:account"
        },
        {
            value: 'Business',
            label: 'Business',
            isSelected: false,
            iconName: "standard:account"
        },
        {
            value: 'Counters',
            label: 'Counters',
            isSelected: false,
            iconName: "standard:account"
        },
        {
            value: 'Development',
            label: 'Development',
            isSelected: false,
            iconName: "standard:account"
        },
        {
            value: 'Industry',
            label: 'Industry',
            isSelected: false,
            iconName: "standard:account"
        },
        {
            value: 'Agency',
            label: 'Agency',
            isSelected: false,
            iconName: "standard:account"
        }
    ];


    connectedCallback() {
        this.tempOptions = this.options;
        this.finalOption =  [...this.tempOptions]
    }
    handleKeyUp(event) {
        this.value = event.target.value;
        let value = event.target.value;
        this.islistvisible = true;
        if (value.length > 1) {
            let arr = this.options.filter(e => e.value.toLocaleLowerCase().match(value.toLocaleLowerCase()));
            console.log("search item", arr)
            this.finalOption = [...arr]
        }
        else {
            this.finalOption = [...this.options]
        }
    }

    itemSelect(event) {
        let iselectedItem = event.target.textContent;
        console.log("iselectedItem", iselectedItem);
        if (this.selectedItems.includes(iselectedItem)) {

            this.selectedItems = this.selectedItems.filter(item => item !== iselectedItem);
            this.tempOptions.forEach((item, i) => {
                if (item.value == iselectedItem) {
                    this.tempOptions[i].isSelected = false;
                }
            })

        }
        else {
            this.selectedItems.push(iselectedItem)
            this.tempOptions.forEach((item, i) => {
                if (item.value == iselectedItem) {
                    this.tempOptions[i].isSelected = true;
                }
            })
        }
        console.log("get selected item", JSON.parse(JSON.stringify(this.tempOptions)))
        this.finalOption = [...this.tempOptions]
        this.islistvisible = false
    }
    handleChange(event) {
        setTimeout(() => {
            this.islistvisible = false;
            this.value = "";
        }, 200)
        console.log("listvisble@@@@@@@@@@@");
    }
    handleRemoveOnly(event) {
        console.log("sss")
        console.log(JSON.parse(JSON.stringify(event)))
        let clickedItem = event.target.getAttribute("data-value")
        console.log(clickedItem)
        this.selectedItems = this.selectedItems.filter(item => item !== clickedItem);
        this.tempOptions.forEach((item, i) => {
            if (item.value == clickedItem) {
                this.tempOptions[i].isSelected = false;
            }
        })
        this.finalOption = [...this.tempOptions]
    }
}