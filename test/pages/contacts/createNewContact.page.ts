import { ChainablePromiseElement } from 'webdriverio';

/**
 * Contacts page module designed based on POM pattern,
 * And also define selectors using getter methods.
 * 
*/
class CreateNewContactPage {
    
    public get firstName (): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@content-desc='Name']/..//android.widget.EditText[1]");
    }

    public get lastName (): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@content-desc='Name']/..//android.widget.EditText[2]");
    }

    public get phoneNumberField (): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@content-desc='Phone']/..//android.widget.EditText[1]");
    }

    public get unknownPopup (): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.LinearLayout//android.widget.TextView');
    }

    public get saveButton (): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@resource-id='com.android.contacts:id/editor_menu_save_button']");
    }

    /**
     * a method to encapsule automation code to interact with the page.
     * e.g. to click on OS field.
     */
    public async enterFirstName (firstName: string) {
        await (await this.firstName).setValue(firstName);
    }

    public async enterLastName (lastName: string) {
        await (await this.lastName).setValue(lastName);
    }

    public async enterPhoneNumber (number: string) {
        await (await this.phoneNumberField).setValue(number);
    }

    /**
     * a method to encapsule automation code to interact with the page.
     * e.g. to click on SMS Messaging field.
     */
    public async clickOnSaveButton () {
        await (await this.saveButton).click();
    }
}

export default new CreateNewContactPage();