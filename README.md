# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

- I believe we fit our automated tests within a Github action, which wiull run whenver the code's pushed. 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- I don't think using a unit test would be the proper method to test a messaging system. As a sole unit test would not be able to cover the test cases required to cover something like a messaging system.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

- Yes! Utilizing a unit test would work in this case as there is a clear limit to test for and is testable for every push.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

- If we ran the headless field as true, then the puppeteer test wouldn't run our tests without a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

- The beforeAll callback tells the puppeteer to access the setttings prior to every test case. 

