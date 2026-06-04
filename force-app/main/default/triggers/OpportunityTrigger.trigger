trigger OpportunityTrigger on Opportunity (After insert , After Update) {
	OpportunityTriggerHandler.handleAfterInsert(Trigger.newMap);
}