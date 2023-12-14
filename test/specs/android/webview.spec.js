describe('Web Browser Access', () => {

    before(async () => {

    });

    it('Access external link and verify content in browser', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        // click on facebook link
        await $('//*[@text="Like us on Facebook"]').click();

        // get all the context
        console.log(await driver.getContexts())

        //switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome')

        // assert the url
        const url = await driver.getUrl();
        expect(url).toContain('ColorNote');

        // assert the cover image 
        // const coverImg = await $('.img.coverPhoto')
        // await expect(coverImg).toBeDisplayed()

        // Switch back to application
        await driver.switchContext('NATIVE_APP')
        await driver.back()

        // continue with app stuff
        await $('//*[@text="Notes"]').click();

        const addNoteText =  await $('//*[@text="Add note"]');
        await expect(addNoteText).toBeDisplayed()


    });
});