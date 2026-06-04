({
    toggleHighlight: function (component, event, helper) {
        // Try to get the utilityAPI
        const utilityAPI = component.find("utilitybar");
        
         const msg = {
            type: "HIGHLIGHT_ICON",
            payload: "User clicked button inside VF"
        };
        	window.parent.postMessage(msg, "*"); 
        
        
        
        
        

        if (utilityAPI) {
             console.log('222222222222222222222,',utilityAPI);
            // Toggle the highlight status
            const currentStatus = component.get("v.highlighted");
            component.set("v.highlighted", !currentStatus);

            // Highlight or un-highlight the Utility Bar icon
            utilityAPI.setUtilityHighlighted({
                highlighted: !currentStatus
            });
        } else {
            console.log('utilityAPI is undefined. Ensure the component is added to the Utility Bar.');
        }
    }
})