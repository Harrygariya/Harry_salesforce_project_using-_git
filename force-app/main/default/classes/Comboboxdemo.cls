public class Comboboxdemo {
 @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        list<Account> accList = [select Id,Name,Phone From Account];
        return acclist;
    }
}