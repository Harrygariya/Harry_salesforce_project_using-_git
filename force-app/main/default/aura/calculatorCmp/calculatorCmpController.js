({
	Calculate : function(component, event, helper) {
        let numval_1 = component.find('num1').get('v.value');
        let numval_2 = component.find('num2').get('v.value');
        let Sum = numval_1 + numval_2 ;
        alert(Sum);
        
		
	}
})