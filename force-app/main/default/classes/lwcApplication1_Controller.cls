public with sharing class lwcApplication1_Controller {
  
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String inputText){
        try {
            String key = '%' + inputText + '%';
            System.debug('git check in git');
            return [select id, Name, industry, Rating from Account Where Name like:key ];
           // return new List<Account>();
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
           
        }
    }
    @AuraEnabled
    public static list<Contact> getContacts(String accountId){
        try {
            return [select Id, FirstName, LastName from Contact WHERE accountId=:accountId WITH SECURITY_ENFORCED];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


        @AuraEnabled(cacheable=true)
        public static List<Contact> getContactList() {
            return [
                SELECT Id, Name, Title, Phone, Email
                FROM Contact
                
                WITH SECURITY_ENFORCED
                LIMIT 10
            ];
        }
  
   
}
