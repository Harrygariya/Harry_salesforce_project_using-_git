public class MYCLASS {
    
    // constructor define 
   // public apexBasics(){
     //		system.debug ('fffffffffffffff') ;
    //}
    
//public static void dataTypes(){ 
       // system.debug('ddddddddddddddd');
         //datatype varName = 'your data <string>'  
       /* String firstName = 'sssssssssssssssssssssssssss' ;
       	Integer rollNo = 1012152015;
        Boolean isTrue = true;
      	system.debug('////////////1\\\\\\\\\\\\'+firstName);
        system.debug('////////////2\\\\\\\\\\\\'+rollNo);
        system.debug('////////////3\\\\\\\\\\\\'+isTrue);
        
        
    } */
    
   // public static void sobjectDataTypes(){
        // how to standard and custom object datatype
       // Account acc = new Account();
       // system.debug('////////////acc55521\\\\\\\\\\\\'+acc.Name);
       
      // 	acc.VirendraK__c = 'Virendra singh is great teacher';
       // insert acc;
        // apne aap salesforce ek record ID generate kar dega.
      // ApnabhaiJavascript__c JS =  new ApnabhaiJavascript__c();
       // JS.Name	 = 'im standrad object';
        //JS.text__c = 'hii im new deatsils about';
         //system.debug('////////////acc55521\\\\\\\\\\\\'+JS);
        //insert JS;
        
        
        //system.debug('////////////acc55521\\\\\\\\\\\\');
       // details.NumberofLocations__c = 89786220;
   // }
    
   /*  public static void collectionDataType(){
       list<Account> accList = new List<Account>();
         system.debug('accList'+accList);
    }*/
    
        /*public static void names (){
            List<string> names =  new List<string> ();
            names.add('rahul');
            names.add('kamal');
            names.add('akay');
            names.add('harry');
            system.debug('name are in list'+names);
            
        } */
    
    // set 
    // 
     public static void namesunique (){
         Set<string> namesunique =  new Set<String> ();
         namesunique.add('akay22');
         namesunique.add('rahul');
         namesunique.add('rahul');
         namesunique.add('rahul');
         namesunique.add('rahula');
         namesunique.add('rahul');
         namesunique.add('kamal');
         namesunique.add('akay');
         namesunique.add('harry');
         system.debug('name are in 2222222'+namesunique);
            
        } 
 
    
    /*public static void fetchContactWithId(String id){
        system.debug('id is '+id);
        Contact conList = [SELECT lastName,LastModifiedById FROM Contact WHERE id = :id LIMIT 1];
        System.debug(conList+'333333333333333');
    }*/

    public static void fetchMobileno(String id){
        
      //  Car.getSessionId();
        Contact mobileCon = [SELECT MobilePhone FROM contact WHERE id = :id limit 1];
         if (String.isBlank(mobileCon.MobilePhone)) {
            System.debug(' Mobile number is empty for this contact.');
				mobileCon.MobilePhone = '9560338994';
         } else {
            System.debug(' Mobile number is: ' + mobileCon.MobilePhone);
            mobileCon.MobilePhone = '';
         }
        UPDATE mobileCon;   
        
    }
    public static void deleteContactWithId(String Id){
		  if(String.isNotBlank(id))
          {
				Contact dltCon = [select id FROM contact where id = :id limit 1];
				 Delete dltCon;             
          }
    }
    
    //upsert
    
    public static void upsertContact(){
        List<Contact> conList = new List<Contact>();
        
        Contact con1 = new Contact(lastName = 'harinandan 1');
        Contact con2 = new Contact(lastName = 'harinandan 2');
        Contact con3 = new Contact(lastName = 'harinandan 1', id='003J100000Ahsi3IAB');
        conList.add(con1);
        conList.add(con2);
        conList.add(con3);
        upsert conList;
    }
    
    public static void updatedata(list<string> ids){
        system.debug('test'+ids);
        list<contact> newCon = new list<contact>();  
        for(integer i = 0; i<ids.size(); i++ ){
           contact  abc =  new Contact(MobilePhone = '95603389994', id= ids[i]);
           newCon.add(abc);
            
            
        }
        for(integer i = 0; i < 7; i++ ){
            contact name = new Contact(lastName	= 'harry'+(11+i));
            newCon.add(name);
        }
        upsert newCon;
           
    }
    
    //LiKe keyword
     
    public static void SQOLLike(List<Id> ids){
       // list<contact> con = [SELECT id,lastName,mobilePhone FROM Contact WHERE lastName LIKE '%harry%' AND mobilePhone = '60' ];
       list<contact> con2 = [select id,lastname,mobilePhone FROM Contact WHERE id IN :ids];
       system.debug(con2);
        
        /*for(Contact c : con)
        {
            system.debug(c.lastName); max , min, count();
        }*/
    }
    
    public static Contact callAnotherClass(String name){
       //List<string> NameArr = new List<string>();
        //NameArr.add('subrata after return');
        Contact con = new Contact();
       con.lastname = name;
        con.AssistantPhone = '552551515510';
       // con.Industry = 'Agriculture';
        con.Languages__c = 'harry bhain is a great Textarea master.';
        Insert con;
        return con;
    }
    
    // map 
    public static void MyMap(){
       Map<String , String> cityCode =  new Map<String,String>();
        // map method put 
        cityCode.put('DEL','Delhi');
       	cityCode.put('MUM', 'Mumbai');
        cityCode.put('BLR','bangalore');
        
        //system.debug('CityCode--------'+cityCode.get('MUM')  );
        //system.debug('CityCOde keyset'+ cityCode.keySet());
        for(String code : cityCode.keySet()){
       // system.debug('CITYcode : ' + code + '=>'+ CityCode.get(code));
        System.debug('City Code: ' + code + ' => ' + cityCode.get(code));

   	 }
    }
        
    
      public static void k(){
        Map<integer,String> rollNoToName = new Map<integer,String>();
        rollNoToName.put(1 ,'neeraj');
        rollNoToName.put(2,'hero');
        rollNoToName.put(3,'subrata');
        rollNoToName.put(4,'shivam');
     
        system.debug('rollNoToName' + rollNoToName.keySet());
        
        for(Integer rollno : rollNoToName.keySet()){
          //  rollNoToName.get(rollno);
            system.debug('rollNoToName' + rollNoToName.get(rollno));
        }
      }
        
        
        
        
   
    
   
      
    
    
        
        
        
        
        
    
    }