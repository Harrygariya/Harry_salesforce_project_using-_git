public class OlderAccountsUtility {
      String myName= '15' ;
      Integer Age = 56 ;
   	  public static final DECIMAL PI_VALUE = 3.144444111;
      Integer sum ;
   	   public static Integer substatic;
  	  // this is static method 
 	  // public static void updateolderAccounts(String N){
       
      // get the five older accounts
      //  List<Account> oldAccounts = [SELECT ID, Description,name FROM Account ORDER BY CreatedDate ASC LIMIT 5];
      // loop through them and update the Description field
      //  for( Account acct : oldAccounts){
      //   acct.Description = 'Heritage Account';
      // }
      // system.debug('testing' + N);
      // update oldAccounts;
   // }
    
    // this is non static method 
    public void helloWorld(){
        system.debug('hello world'+myName); 
        system.debug('hello world 222'+Age);
    }
    
    public void add(Integer number1, Integer Number2){
         Integer sum = number1 + Number2 ;
         system.debug('sum'+sum);
    }
    
     public void add(Integer number1,Integer Number2,Integer Number3){
         Integer sum = number1 + Number2 + Number3 ;
         system.debug('sum three param'+sum);
    }
    
      public Integer add(Integer number1,Integer Number2,Integer Number3,Integer Number4,Integer Number5){
         return sum = number1 + Number2 + Number3 + Number4 + Number5 ;
        
    }
    
    public String SayHello(String name){
        system.debug('sayhello');
        return 'Hello my name is '+name;
    }
    
    public static void sub( Integer a, Integer b ,integer c, integer d ){
            Integer sub =  a -  b - c - d;
            system.debug('sub three param'+sub);
    }
    
    public static integer sub( Integer a, Integer b){
         system.debug('testing---------------------->>'+a);
         return substatic =  a -  b;
    }
    
    public static void multiply(integer a,integer b,integer c){
        integer mul = a*b*c;
            system.debug('this is multiply of two no is '+mul);
    }
    
    public static void devided (integer a , integer b){
        integer div = a/b ;
       	system.debug('this is devide and answer is'+div);
    }
    
    public static void remainder (integer a , integer b){
        integer rem = Math.mod(a, b);
        system.debug('reminder is '+rem);
    }
    
    
   
}