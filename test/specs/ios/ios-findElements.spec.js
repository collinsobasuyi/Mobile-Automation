describe('iOS Find Element', () => {
    it('Find element by accessibility id', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    });

    it('Find element by tag name', async () => {
        // Single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        // Multiple element
        const textEls = await $$('XCUIElementTypeStaticText');

        for (const element of textEls) {
            console.log(await element.getText());
        }
    });

    it('Find element by XPath', async () => {

        //xpath - (//tagname[@attribute=value])
        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        // await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

        await $('//*[@name="Alert Views"]').click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    });

    it('Find element by Class chain', async () => {
        // const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    });

    it('Find element by predicate string', async () => {
        // const alertText = 'label == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "alert" AND visible == 1';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    });

    it.only('Solution: Search Input Field', async () => {
        await $('~Search').click();
        await $('~Default').click();
        await $('//XCUIElementTypeSearchField').addValue("I love this course");
        await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value")
        await $('~Clear text').click(); 
        await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value")
        // const searchBox = 'type == "XCUIElementTypeSearchField"';
        // await $(`-ios predicate string:${searchBox}`).click();
        // await searchBox.addValue("I love this course");
        // const x = await searchBox.getText();
    });
});