import { ChainablePromiseElement } from 'webdriverio';

/**
 * Contacts page module designed based on POM pattern,
 * And also define selectors using getter methods.
 * 
*/
class ContactsPage {
    
     public get createNewContactButton (): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//*[@content-desc="Create new contact"]');
    }

    public get cancelButton (): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//*//android.widget.Button[1]');
    }

    public get unknownPopup (): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.LinearLayout//android.widget.TextView');
    }

    public get savedContacts (): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@resource-id='com.android.contacts:id/header']");
    }

    /**
     * a method to encapsule automation code to interact with the page.
     * e.g. to click on OS field.
     */
    public async clickOnCreateNewContactButton () {
        await this.createNewContactButton.click();
    }

    /**
     * a method to encapsule automation code to interact with the page.
     * e.g. to click on SMS Messaging field.
     */
    public async clickOnCancelButton () {
        await (await this.cancelButton).click();
    }
}

export default new ContactsPage();