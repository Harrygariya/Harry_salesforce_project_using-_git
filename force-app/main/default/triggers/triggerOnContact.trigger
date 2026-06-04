trigger triggerOnContact on Contact (before insert ) {
    List<Contact> conList = new List<Contact>();
    for(Contact con : Trigger.new){
                   if(trigger.isBefore)
                   {
                       con.Department = 'Testing';
                   }
                    if(trigger.isAfter)
                    {
                         con.Department = 'Testing 1';
                        conList.add(con);
                    }
                    
               
            }
     		if(trigger.isAfter)
                    {
                         update conList;
                    }
     //System.debug(Trigger.new +'************************************Contact is being inserted!***************************'+Trigger.old);
            
      
}