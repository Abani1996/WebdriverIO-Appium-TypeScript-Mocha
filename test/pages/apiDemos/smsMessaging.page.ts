import { ChainablePromiseElement } from 'webdriverio';

/**
 * SMS Messaging Module designed based on POM pattern,
 * And also define selectors using getter methods.
 * 
*/
class smsMessagingPage {

    public get recipientSection(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.TableRow[1]//*[@*="android.widget.EditText"]');
    }

    public get messageBody(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.TableRow[2]//*[@*="android.widget.EditText"]');
    }

    public get recipientValue(){
        return $('//*//android.widget.TableRow[1]//android.widget.EditText');
    }

    public get messageValue(){
        return $('//*//android.widget.TableRow[2]//android.widget.EditText');
    }

    /**
     * a method to encapsule automation code to interact with the page.
     * e.g. to enter recipient name.
     */
     public async enterRecipientName (recipientName: string) {
        await (await this.recipientSection).setValue(recipientName);
    }

    /**
     * a method to encapsule automation code to interact with the page.
     * e.g. to enter message.
     */
    public async enterMessage (message: string) {
        await (await this.messageBody).setValue(message);
    }
}

export default new smsMessagingPage();