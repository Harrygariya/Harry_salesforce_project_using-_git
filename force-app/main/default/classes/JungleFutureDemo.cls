public with sharing class JungleFutureDemo {
//    public class JungleFutureDemo {

    // Main transaction
    public static void createAntWork() {

        // Normal work (Non-setup object)
        Account antFoodStore = new Account(
            Name = 'Ant Food Storage'
        );
        insert antFoodStore;

        System.debug('Account created successfully');

        // Special work in future (Setup object)
        createForestGuardUser(
            'forestguard' + System.currentTimeMillis() + '@jungle.com'
        );
    }

    // Future Method
    @future
    public static void createForestGuardUser(String emailId) {

            Profile p = [
                SELECT Id
                FROM Profile
                WHERE Name = 'Standard User'
                LIMIT 1
            ];

            User u = new User(
                Alias = 'fguard',
                Email = emailId,
                Username = emailId,
                LastName = 'Guard',
                TimeZoneSidKey = 'Asia/Kolkata',
                LocaleSidKey = 'en_US',
                EmailEncodingKey = 'UTF-8',
                LanguageLocaleKey = 'en_US',
                ProfileId = p.Id
            );

            insert u;

            System.debug('User created in future transaction');
        }
//   }
}