describe('Add Notes', () => {
    it('skip tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        // assert text to be displayed
        await expect($('//*[@text="Add note"]'))
            .toBeDisplayed();
    });

    it('add  not, save changes & verify note', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]'))
            .toBeDisplayed();

        //  add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .addValue("Favourite food")

        //  add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .addValue("Eba\nRice\nSuya")

        //  save save changes
        await driver.back();
        await driver.back();

        //assert
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
            .toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("Eba\nRice\nSuya");
    });

    xit('Delete Note', async () => {
        await $('~More').click();
        await $('//*[@text="Delete"]').click();
        await $('//*[@text="OK"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Trash Can"]').click();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'))
            .toBeDisplayed();
    });

    it('Delete a note and check note in trash can', async () => {

        await driver.back()

        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        // click on the note 
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        //click on more icon
        await $('~More').click();

        //click on delete item
        await $('//*[@text="Delete"]').click();

        //Accepte alert
        driver.acceptAlert();

        //click on Nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //Click on trash can item
        await $('//*[@text="Trash Can"]').click();

        //assertion
        const trashCanitem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');

        await expect(trashCanitem).toHaveText(note);

    });
});