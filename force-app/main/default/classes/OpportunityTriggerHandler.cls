public class OpportunityTriggerHandler {
    public static void handleAfterInsert(Map<Id,Opportunity>OppMap){
        
        Set<String> OppOwnIds = new Set<String>();
        Map<String,String> oppVsAcc = new Map<String,String>();
        for(String oppId : OppMap.keySet())
        {
            if(OppMap.get(oppId).stageName == 'Closed Own')
            {
                OppOwnIds.add(oppId);
                if(OppMap.get(oppId).AccountId != null)
                {
                    oppVsAcc.put(oppId,OppMap.get(oppId).AccountId);
                } 
            }
        }
        List<Project__c> projectList = new List<Project__c>();
        for(String oppId : OppOwnIds)
        {
            Project__c project = new Project__c();
            project.Opportunity__c = oppId;
            project.Name = OppMap.get(oppId).Name;
            project.Status__c = 'In Progress';
            projectList.add(project);
        }
        insert projectList;
        
        List<Account> accList = [SELECT Last_Won_Opportunity_Date__c ,Total_Won_Opportunities__c FROM Account WHERE Id =:oppVsAcc.values()];
        Map<Id, Account> accMap = new Map<Id, Account>(accList);
        for(String oppId : oppVsAcc.KeySet())
        {
            accMap.get(oppVsAcc.get(oppId)).Last_Won_Opportunity_Date__c = System.today();
            accMap.get(oppVsAcc.get(oppId)).Total_Won_Opportunities__c += 1;
        }
        update accMap.values();
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        /*system.debug('OppList'+OppList);
        List<Project__c> projectsToCreateList = new List<Project__c>();
        for(Opportunity currentOpp : OppList){
            system.debug('currentOpp'+currentOpp.StageName);
            if(currentOpp.StageName == 'Closed Won'){
                Project__c projectsToCreate = new Project__c();
                projectsToCreate.Name = currentOpp.name;
                projectsToCreate.Status__c = 'In Progress';
                projectsToCreate.Opportunity__c = currentOpp.Id;
                projectsToCreateList.add(projectsToCreate);
                
                if(currentOpp.AccountId != null){
                	system.debug('currentOpp.AccountId'+currentOpp.AccountId);
                    Account acc=  [Select Last_Won_Opportunity_Date__c ,Total_Won_Opportunities__c From Account Where Id = :currentOpp.AccountId limit 1];
                    system.debug('acc' +acc);
                    acc.Last_Won_Opportunity_Date__c = system.today() ;
                    if(acc.Total_Won_Opportunities__c == null)
                    {
                        acc.Total_Won_Opportunities__c =1;
                    }	
                    else
                    {
                       acc.Total_Won_Opportunities__c += 1; 
                    }
					update acc;                    
                }
            }
            
        }
        system.debug('projectsToCreate'+projectsToCreateList);
        insert projectsToCreateList ;
*/
        
        //Opportunity currentOpp = OppList[0];
        
        
        
        
        
        
    /*    Opportunity currentOppNew = OppList[0];
        if(currentOppNew.StageName == 'Closed Won')
        {
        	/*Project__c projectsToCreate = new Project__c();
     	 	projectsToCreate.Name = currentOppNew.name;
           	projectsToCreate.Status__c = 'In Progress';
            projectsToCreate.Opportunity__c = currentOppNew.Id;
            insert projectsToCreate;
            system.debug(currentOppNew.AccountId+'currentOppNew.AccountId'); 
            
            if(currentOppNew.AccountId != null){
                try{
                    Account acc=  [Select Last_Won_Opportunity_Date__c ,Total_Won_Opportunities__c From Account Where Id = :currentOppNew.AccountId limit 1];
                    system.debug('acc' +acc);
                    acc.Last_Won_Opportunity_Date__c = system.today() ;
                    if(acc.Total_Won_Opportunities__c == null)
                    {
                        acc.Total_Won_Opportunities__c =1;
                    }	
                    else
                    {
                       acc.Total_Won_Opportunities__c += 1; 
                    }
					update acc;                    
                }
                catch(Exception ex)
                {
                    system.debug('error dd'+ex);
                }
                

                    
            }
        }*/
        
        
        
        
        
     	 
        									
        
    }

}