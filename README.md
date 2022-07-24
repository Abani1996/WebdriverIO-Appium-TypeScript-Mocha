# WebdriverIO_Appium_TypeScript_Mocha

## What is this repository for? ###
* A demonstration project to start mobile app automation with Typescript, WebdriverIO and Appium using POM.
* Here I've taken the example of two individual application.
1. Contacts (Internal app)
2. DemoApp (External app: added in project)
* Framework Version 1.0.0
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

## Use case: 
### Scenario-1:
Validate the new contact should be saved in the contact list.

### Steps:
1. Lunch contact manager in the device.
2. Click to add a contact number.
3. Fill in all the details and save the contacts.

### Scenario-2:
Validate the text in the recipient field should be equal to the text present in the message body.

### Steps:

1. Lunch the app on the device. (APK file).
2. Click on OS> SMS Messaging.
3. There are two input filed, type hello in the first input field then copy the text and paste it in the second input field.

Note: I’ve commented a few lines of code in some file (configurations), since we’re trying to automate multiple applications.

### Installation ###
* Download VS-code: https://code.visualstudio.com/
* Install node.js : https://nodejs.dev/download
* Add aplication to your project.
* Deployment instructions: git

### How do I get start? ###
* Create a project directory.
* Run(CLI): npm init [To generate package.json]
* Add required depedancies in your package.json file.
* Run: npm install (to install all the mentioned dependancies.)

### How to run test? ###
Add bellow command in your package.json file.
* wdio ./config/android.config.js

### Tools ###

* Tyoescript
* Webdriver.io
* Appium
* Mocha
* Chai

### Who do I talk to? ###
* Repo owner or admin: Abani Maharana