public with sharing class ProxyController {
    @AuraEnabled
    public static String fetchExternalData(String dynamicUrl) {
        try {
            System.debug('fetchExternalData called with URL: ' + dynamicUrl);

            // Validate URL
            if (String.isEmpty(dynamicUrl)) {
                throw new AuraHandledException('URL is required.');
            }

            Http http = new Http();
            HttpRequest request = new HttpRequest();
            // Use the Named Credential in the endpoint
            String namedCredentialUrl = 'callout:JsonPlaceholderAPI' + dynamicUrl.replace('https://jsonplaceholder.typicode.com', '');
            request.setEndpoint(namedCredentialUrl);
            request.setMethod('GET');

            System.debug('Sending HTTP request to: ' + namedCredentialUrl);
            HttpResponse response = http.send(request);
            System.debug('HTTP response status: ' + response.getStatusCode());

            // Handle HTTP redirects
            if (response.getStatusCode() == 302) {
                String newLocation = response.getHeader('Location');
                System.debug('Redirecting to new location: ' + newLocation);
                if (newLocation != null) {
                    request.setEndpoint(newLocation);
                    response = http.send(request);
                    System.debug('HTTP response status after redirect: ' + response.getStatusCode());
                } else {
                    throw new AuraHandledException('Redirection URL not found.');
                }
            }

            if (response.getStatusCode() == 200) {
                String contentType = response.getHeader('Content-Type');
                System.debug('HTTP response content type: ' + contentType);
                
                if (contentType != null && contentType.contains('application/json')) {
                    return response.getBody();
                } else if (contentType != null && contentType.contains('text/html')) {
                    throw new AuraHandledException('Unexpected response content type: HTML not supported.');
                } else {
                    throw new AuraHandledException('Unexpected content type: ' + contentType);
                }
            } else {
                throw new AuraHandledException('Error: ' + response.getStatus());
            }
        } catch (Exception e) {
            System.debug('Exception: ' + e.getMessage());
            throw new AuraHandledException('Error: ' + e.getMessage());
        }
    }
}