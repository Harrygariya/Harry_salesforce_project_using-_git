public class Laptops {
	public string companyName; // intance ya object var hai
    // class var ya static var banane honge agr class ya static mehtod hai to
   public static string name;
   public string processor ;
   public integer ramSize;
    
    public laptops(string companyName){
        //system.debug('constructor =>'+ companyName);
      	this.companyName = companyName;
    }
    
     public laptops(string companyName,string processor){
        system.debug('constructor =>'+ companyName);
         system.debug('constructor =>'+ processor);
      	this.companyName = companyName;
         this.processor = processor;
        
    }

 	public laptops(string companyName,string processor,integer ramSize){
        system.debug('constructor =>'+ companyName);
      	this.companyName = companyName;
         this.processor = processor;
         this.ramSize = ramSize;
    }
    
    // object bante hi constructor call ho jayega. private
    // is case me  public void printCompanyName() ye companyName null aayega ;
    // kisi var ki default value null hoti hai
    // agr var name same hai contractor me to this.companyName = companyName; aise sue krna hoga
    
    public void printCompanyName(){
       System.debug('company Name withing printcompanyName methos is =>'+companyName);
       system.debug('print method----9999------>'+name);

    }
    
    // agr private ho to static var bhi use krna ha
    public static void printName(){
        system.debug('print method'+name);
    }
}