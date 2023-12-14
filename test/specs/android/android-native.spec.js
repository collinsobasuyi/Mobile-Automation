describe('Android Native Feature Tests', () => {
    xit('Access an Activity directly', async () => {
        //using app activities
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")

        //pause
        await driver.pause(3000);

        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    xit('Working with dialog boxes', async () => {
        // access Activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")

        // click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        // accept alert
        // await driver.acceptAlert();

        // dismiss alert
        // await driver.dismissAlert();

        // get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText());

        // click on OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        // assert alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();

    });

    xit('Vertical scrolling', async () => {
        await $('~App').click();
        await $('//android.widget.TextView[@content-desc="Activity"]').click();

        //Scroll to the end (not so stable if elemnts gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //scrollTextIntoView - More Stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        // await $('~Secure Surfaces').click();

        //assertion
        await expect($('~Secure Dialog')).toExist();

    });

    xit('Horizontal scrolling', async () => {
        //using app activities
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1"
        );

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
        //pause
        await driver.pause(3000);

    });

    xit('Scrollins Exercise', async () => {
        await $('~Views').click();
        await $('~Date Widgets').click();
        await $('~1. Dialog').click();
        await $('~change the date').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        //pause
        await driver.pause(3000);
        await $('~10 December 2023').click();
        await driver.pause(3000);

        // accept alert
        await driver.acceptAlert();

        //await $('//*[@resource-id="android:id/button1"]').click();

        const date = await '//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'
        await expect(date).toHaveText("11-6-2023 01:02")


    });

    it('Scrollins Exercise Demo', async () => {

        // access the date picker
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.DateWidgets1"
        );

        // get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        // click on change the date picker
        await $('~change the date').click();

        // scroll right to the next month

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

        // select the 10th month
        await $('//*[@text="10"]').click();

        // click on Ok button
        await $('//*[@resource-id="android:id/button1"]').click();

        //  verify the updated date
        await expect(await date.getText()).not.toEqual(currentDate)

    });
})