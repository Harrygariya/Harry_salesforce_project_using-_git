public class OpportunityData {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getOpportunityData (Id lwcRecordId , string searchKeys){
      //  try {
            // if search key is avilable
            if(searchKeys != null && searchKeys != ''){
                String key = '%'+ searchKeys +'%' ;
                  List<Contact> getOpportunitySearchlist = [select Id, name,AccountId,phone from Contact Where AccountId =:lwcRecordId AND Name Like :key ];
                	return getOpportunitySearchlist ;
            }// if search key is not avilable
            else{
                 List<Contact> getOpportunityDatalist = [select Id,name,AccountId,Phone from Contact Where AccountId = :lwcRecordId ];
                // null check
               
                if(!getOpportunityDatalist.isEmpty()){
                      return getOpportunityDatalist;
                }
                return null;
            }
            
            
               
          //  } catch (Exception e) {
           //     throw new AuraHandledException(e.getMessage());
           // }
        
       
       
    }

}