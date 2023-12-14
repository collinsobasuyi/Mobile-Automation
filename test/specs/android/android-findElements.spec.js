const { ElementFlags, isThrowStatement } = require("typescript");


describe('Android Elements Tests', () => {
    xit('Find element by accessibility id', async () => {
        //find element by accesibility id
        const appOption = await $('~App');

        //click on elemnt
        await appOption.click();

        //assertion
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting();
    })

    xit('Find element by class name', async () => {
        //find element by class name
        const className = await $('android.widget.TextView');
        console.log(await className.getText())

        //assertion
        await expect(className).toHaveText("API Demos")
    })

    xit('Find element by XPath', async () => {
        //find element by xpath - xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //find by resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //by class - assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");

    });

    xit('Find element by UIAutomator', async () => {
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    xit('Find multiple elements', async () => {
        const expectedList = [
            "API Demos",
            "Access'ibility",
            "Accessibility",
            "Animation",
            "App",
            "Content",
            "Graphics",
            "Media",
            "NFC",
            "OS",
            "Preference",
            "Text",
            "Views"
        ];
        const actualList = []
        //  find multiple Element
        const textList = await $$('android.widget.TextView');

        //  loop through them
        for (const element of textList) {
            actualList.push(await element.getText());
        }

        //  assert the list
        await expect(actualList).toEqual(expectedList);

    });

    it('Exercise Text Field', async () => {
        const viewsCTA = await $('~Views');
        await viewsCTA.click();

        const autoCompleteCTA = await $('~Auto Complete');
        await autoCompleteCTA.click();

        const screenTopCTA = await $('~1. Screen Top');
        await screenTopCTA.click();

        const inputCountry = await $('android.widget.EditText');
        await inputCountry.addValue('Canada');

        await expect(inputCountry).toHaveText('Canada')
    })
});