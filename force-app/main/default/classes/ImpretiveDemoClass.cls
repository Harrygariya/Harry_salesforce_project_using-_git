public class ImpretiveDemoClass {
     @AuraEnabled
     public static List<Account> ImpretiveAccounts(){
            try {
                List<Account> ImpretiveGetList = [select Id,Name,Rating,CreatedById From Account LIMIT 1];
                return ImpretiveGetList;
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }

    

}