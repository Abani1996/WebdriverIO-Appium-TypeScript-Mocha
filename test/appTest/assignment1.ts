import ContactsPage from '../pages/contacts/contacts.page'
import CreateNewContactPage from '../pages/contacts/createNewContact.page'


describe('test adding contacts functionality', () => {
    it('should allow to add a contact member.', async () => {
        await ContactsPage.clickOnCreateNewContactButton();
        if(await (await ContactsPage.unknownPopup).isDisplayed()){
            await ContactsPage.clickOnCancelButton();
        }
        await CreateNewContactPage.enterFirstName('Abani');
        await CreateNewContactPage.enterLastName('Maharana');
        await CreateNewContactPage.enterPhoneNumber('123456789');
        await CreateNewContactPage.clickOnSaveButton();
        let createdUsers = (await ContactsPage.savedContacts).getText();
        
        expect('123456789').toEqual(createdUsers)
    });
});