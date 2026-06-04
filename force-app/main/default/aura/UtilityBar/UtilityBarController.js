({
    toggleHighlight : function(component, event, helper) {
        const utilityAPI = component.find("utilityAPI");

        // Toggle the highlight status on button click
        const currentStatus = component.get("v.highlighted");
        component.set("v.highlighted", !currentStatus);

        if (utilityAPI) {
            utilityAPI.setUtilityHighlighted({
                highlighted: !currentStatus  // Set the opposite of the current highlight state
            });
        }
    }
})