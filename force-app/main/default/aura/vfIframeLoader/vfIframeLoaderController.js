({
    handleMessage : function(component, event, helper) {
        alert(11111111);
        var message = event.getParam("message");
        console.log("Message from VF Wrapper:", message);
    }
    
    
})