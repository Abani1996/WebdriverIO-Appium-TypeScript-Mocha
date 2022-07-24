import osPage from '../pages/apiDemos/os.page'
import smsMessagingPage from '../pages/apiDemos/smsMessaging.page'


describe('test sms messaging functionality', () => {
    it('should validate the copied content pated successfully.', async () => {
        await osPage.clickOnOS();
        await osPage.clickOnSmsMessaging();
        await smsMessagingPage.enterRecipientName('hello');
        let actualValue = await (await smsMessagingPage.recipientValue).getText();
        await smsMessagingPage.enterMessage(actualValue);
        let expectedValue = await (await smsMessagingPage.messageValue).getText();
        
        expect(actualValue).toEqual(expectedValue)
    });
});