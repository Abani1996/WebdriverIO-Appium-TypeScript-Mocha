import { ChainablePromiseElement } from 'webdriverio';

/**
 * OS Module designed based on POM pattern,
 * And also define selectors using getter methods.
 * 
*/
class OsPage {
    
     public get osField (): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//*[@content-desc="OS"]');
    }

    public get smsMessaging (): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//*[@content-desc="SMS Messaging"]');
    }

    /**
     * a method to encapsule automation code to interact with the page.
     * e.g. to click on OS field.
     */
     public async clickOnOS () {
        await this.osField.click();
    }

    /**
     * a method to encapsule automation code to interact with the page.
     * e.g. to click on SMS Messaging field.
     */
    public async clickOnSmsMessaging () {
        await (await this.smsMessaging).click();
    }
}

export default new OsPage();