({
    doinit: function(component, event, helper) {
         alert(1111111111);
        window.addEventListener("message", function(event) {
           
            if (event.data && event.data.type === "HIGHLIGHT_ICON") {
                const utilityAPI = component.find("utilitybar");
                if (utilityAPI) {
                    utilityAPI.setUtilityHighlighted({
                        highlighted: true,
                        reason: "User clicked button inside VF"
                    });
                    alert("Highlight triggered by VF button.");
                }
            }
        }, false);
    }
})