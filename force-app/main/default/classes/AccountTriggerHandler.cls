public class AccountTriggerHandler {
    public static void handleBeforeInsert(List<Account> newAcc, List<Account> oldAcc){
        system.debug('newAcc'+newAcc);
        system.debug('oldAcc'+oldAcc);
        List<String> nameList = new List<String>();
        List<String> Phoneno = new List<String>();
        for(Account acc : newAcc ){
            if( acc.Phone == null || acc.phone.trim() == ''){
                acc.Phone.addError('Account with this name is not existes.');
            	system.debug('Phoneno ME BUG HAI'+Phoneno);
            }else{
                nameList.add(acc.name);
                Phoneno.add(acc.Phone);
                system.debug('nameList '+nameList);
                system.debug('Phoneno'+Phoneno);
            }
        }

        
        
        List<Account> existing = [SELECT Name FROM Account WHERE Name IN :nameList];
        system.debug('existing'+ existing);
       
        Set<String> existingNames = new Set<String>();
        for (Account acc : existing) {
            if (acc.Name != null) {
                 system.debug('if existing'+acc.Name);
                existingNames.add(acc.Name.trim().toLowerCase(
                ));
            }
        }
        List<Account> accToInsert = new List<Account>();
		for(Account acc : newAcc ){
             system.debug('33333'+existingNames.contains(acc.Name.trim().toLowerCase()));
             if (acc.Name != null && existingNames.contains(acc.Name.trim().toLowerCase())) {
                acc.Name.addError('Account with this name already exists');
                 system.debug('already exists'+existingNames);
            }
            else
            {
                system.debug('already exists nahi krta hai phle se.'+acc.Name);
                accToInsert.add(acc);
            }

        }
        
    }
    public static void handleAfterInsert(list<account> newAcc){
        List<Contact> Conlist = new List<Contact>();
        for(Account Acc : newAcc){
            Contact NewCon =  new Contact();
            NewCon.LastName = Acc.Name;
            NewCon.MobilePhone = Acc.Phone;
            NewCon.AccountId = Acc.Id ;
            Conlist.add(NewCon);
        }
        insert Conlist;
        
    }
    
    public static void handleBeforeUpdate(List<Account> newAcc, List<Account> oldAcc){
    }
}