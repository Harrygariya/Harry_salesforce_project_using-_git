public class Car {
    private string Name;
    private string Type;
    private string Model;
    private string Company;
    private integer Year;
    
    /* important -> Constructor overloading ho ya method overloading, dono ka logic same hai:
				"Naam same ho sakta hai, par parameter signature unique honi chahiye."
     * 
     * 
     * public class Car {
            public Car() {
		Name = This. 
                System.debug('Default constructor');
            }
        
            public Car(String name) {
                System.debug('1 param constructor: ' + name);
            }
        
            public Car(String name, String model) {
                System.debug('2 param constructor: ' + name + ', ' + model);
            }
        }


notes -> Java (ya Apex) mein constructor tab call hota hai jab aap new keyword ke saath object banate ho. Aur jitne parameters aap new Car(...) 
ke andar pass karte ho, system usi parameters ke combination wale constructor ko dhoondta hai.
*/
  
    
    public Car (String Name){
        system.debug('this is constructor car name is1 '+ Name);
        this.Name = Name; 
   	    this.name = '';
        this.model = '';
        this.company = '';
        this.type = '';
    }
    
    public Car (String Name, String Type){
       this.Name = Name;
   	    this.name = '';
        this.model = '';
        this.company = '';
        this.type = Type;
        system.debug('this is constructor car name and Type  is2 '+ Name+Type);
    }
     public Car (String Name, String Type, string model, string Company, integer Year ){
       	this.Name = Name;
   	    this.Type =Type;
        this.model =model;
        this.company=company;
        this.Year = Year;
         system.debug('this is constructor car name and Type  is3 '+ Name+Type+model+company+year);
    }
    public Car(Integer year){
        this.Year = Year;
   	    this.Name = '';
        this.model = '';
        this.company = '';
        this.type = '';
       system.debug('this is constructor car name and Type  is4 '+ Name+Type+model+company+Type);

        
    }
    
    
    public void printCarInformation (String Name, String Type, string model, string Company, integer Year){
          system.debug('car information is  '+ Name +'  '+ Type+'  '+model+'  '+company);
    }
     public void printCarName (String Name){
          system.debug('car name is  '+ Name );
    }
     public void printCarYear ( integer Year){
          system.debug('car year is  '+ Year);
    }
     public void printCarNameType (String Type){
          system.debug('car information is '+ Type); 
    }

    
     public static void getSessionId() {
			system.debug('1232264'); 
         contact namess =  MYCLASS.callAnotherClass('Im harry');
         system.debug('12344'+namess);
       //return UserInfo.getSessionId(); 
    }
    
    
    
    
    
    

}