describe('Smoke Free App E2E Tests', () => {
    it('Should load splash screen successfully', async () => {
        const splashScreen = await $('android.view.ViewGroup')
        await expect(splashScreen).toExist();
    });

    it('Should load "Quit Smoking in 28 days" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/title"]')
        await expect(textTitle).toHaveText("Quit Smoking in 28 days");
        await $('//*[@resource-id="com.doh.smokefree:id/onboarding_slide_continue_button"]').click();
    });

    it('Should load "Beat the cravings" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/title"]')
        await expect(textTitle).toHaveText("Beat the cravings");
        await $('//*[@resource-id="com.doh.smokefree:id/onboarding_slide_continue_button"]').click();
    });

    it('Should load "Get weekly support" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/title"]')
        await expect(textTitle).toHaveText("Get weekly support");
        await $('//android.widget.Button[@text="Continue"]').click();
    });

    it('Should load "Ready to get started?" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/title"]')
        await expect(textTitle).toHaveText("Ready to get started?");
        await $('//android.widget.CheckBox[@text="I have read and agree to the terms and conditions."]').click();
        await $('//android.widget.Button[@text="Continue"]').click();
    });

    it('Should load "Do you smoke cigarettes or roll ups?" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/title"]')
        await expect(textTitle).toHaveText("Do you smoke cigarettes or roll ups?");
        await $('//android.widget.RadioButton[@text="Cigarettes"]').click();
        await $('//android.widget.Button[@text="Continue"]').click();
    });

    it('Should load "Your smoking habits:  Cigarettes" screen successfully', async () => {
        const textAmountTitle = await $('//*[@resource-id="com.doh.smokefree:id/onboarding_amount_title"]')
        await expect(textAmountTitle).toHaveText("Your smoking habits:  Cigarettes");

        await $('//*[@resource-id="com.doh.smokefree:id/cigarettes_how_many_field"]').addValue('20');
        await $('//*[@resource-id="com.doh.smokefree:id/cigarettes_cost_field"]').addValue('46');
        await $('//android.widget.Button[@text="Continue"]').click();
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/title"]')
        await expect(textTitle).toHaveText("Would you like to receive notifications?");

    });

    it('Should load "Would you like to receive notifications?" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/title"]')
        await expect(textTitle).toHaveText("Would you like to receive notifications?");
        await $('//android.widget.Button[@text="Turn on notifications"]').click();
    });

    it('Should load "What’s motivating you to quit?" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/onboarding_motivation_title"]')
        await expect(textTitle).toExist();
        await $('//*[@text="I want to save money"]').click();
        await $('//*[@text="I want to be around for loved ones"]').click();
        await $('//android.widget.Button[@text="Continue"]').click();
    });

    it('Should load "Are you going to use nicotine replacement products to quit?" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/onboarding_ecigs_title"]')
        await expect(textTitle).toExist();
        await $('//*[@text="No - I\'m going cold turkey"]').click();
        await $('//android.widget.Button[@text="Continue"]').click();
    });

    it('Should load "Vape to quit" screen successfully" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/onboarding_success_title"]')
        await expect(textTitle).toExist();
        await $('//android.widget.Button[@text="OK"]').click();
    });

    it('Should load "Improve your health and your savings!" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/onboarding_success_title"]')
        await expect(textTitle).toExist();
        await $('//android.widget.Button[@text="Let’s go"]').click();
    });

    it('Should load "Have you smoked today?" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/interview_have_you_smoked_title"]')
        await expect(textTitle).toExist();

        const noBtn = await $('//*[@resource-id="com.doh.smokefree:id/no_button"]')
        await expect(noBtn).toExist();

        const yesBtn = await $('//*[@resource-id="com.doh.smokefree:id/yes_button"]')
        await expect(yesBtn).toExist();

        await noBtn.click();
    });

    it('Should load "When did you start your quitting journey?" screen successfully', async () => {
        const textTitle = await $('//*[@resource-id="com.doh.smokefree:id/header"]')
        await expect(textTitle).toExist();
        await $('//android.widget.Button[@text="Continue"]').click();
    });

    it('Should load "Complete your profile" screen successfully', async () => {
        const profileBtn = await $('//*[@text="Complete your profile"]');
        await expect(profileBtn).toExist();
        await profileBtn.click();

        await $('//*[@text="About you"]').click();
        await $('//*[@text="Your Name"]').addValue('John Doe');
        await $('//*[@text="Male"]').click();
        await $('//*[@text="Your Age"]').addValue('80');
        await $('//android.widget.Button[@text="Update"]').click();


    });
});