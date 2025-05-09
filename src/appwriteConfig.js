import { Client, Account } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('681d7f11001705ba7a8b');

    export const account = new Account(client);
    
    export default client;