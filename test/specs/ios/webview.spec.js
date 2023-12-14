describe('IOS Web Browser Access', () => {

    xit('Working with dynamic webview', async () => {
        await $('~Webview').click()

        // get current context
        await driver.getContext()

        await driver.pause(5000)
        // get all the contexts
        await driver.getContexts()

        await driver.pause(5000)

        const contexts = await driver.getContexts()
        // [ "NATIVE_APP", "WEBVIEW_94990.3"]

        // switch to the webview context
        await driver.switchContext(contexts[1])

        // assertion
        const subtitleTxt = await $('.hero__subtitle');
        await expect(subtitleTxt).toHaveTextContaining('automation')

    });

    xit('Working with dynamic webview', async () => {
        await $('~Webview').click()

        // wait until you get multiple context
        await driver.waitUntil(async () => {
            const contexts = await driver.getContexts();
            return contexts.length > 1;
        },
            {
                timeout: 300000, timeoutMsg: 'Timed out awaiting for another context'
            }
            
        );

        // get all the contexts
        driver.pause(50000)
        const contexts = await driver.getContexts()
        driver.pause(50000)
        // switch to the webview context
        await driver.switchContext(contexts[1])
        driver.pause(50000)

        // assertion
        const subtitleTxt = await $('.hero__subtitle');
        await expect(subtitleTxt).toHaveTextContaining('automation')

        // switch back to native app
        await driver.switchContext('NATIVE_APP');
        await $('~Home').click()

        // assertion
        const webdriverTxt = await $('//*[@name="WEBDRIVER"]')
        await expect(webdriverTxt).toBeDisplayed()


    });

    it('Working with dynamic webview', async () => {
        await $('~Webview').click();
    
        // Wait until you get multiple contexts
        await driver.waitUntil(async () => {
            const contexts = await driver.getContexts();
            return contexts.length > 1;
        }, {
            timeout: 300000, timeoutMsg: 'Timed out awaiting for another context'
        });
    
        // Get all the contexts
        const contexts = await driver.getContexts();
    
        // Switch to the webview context
        await driver.switchContext(contexts[1]);
    
        // Wait for the element to be present
        await driver.waitUntil(async () => {
            const elements = await $$('.hero__subtitle');
            return elements.length > 0;
        }, {
            timeout: 100000, timeoutMsg: 'Element .hero__subtitle not found'
        });
    
        // Assertion
        const subtitleTxt = await $('.hero__subtitle');
        await expect(subtitleTxt).toHaveTextContaining('automation');
    
        // Switch back to native app
        await driver.switchContext('NATIVE_APP');
        await $('~Home').click();
    
        // Assertion for native element
        const webdriverTxt = await $('//*[@name="WEBDRIVER"]');
        await expect(webdriverTxt).toBeDisplayed();
    });
    
});