describe('Todo Item', () => {
    it('Create a Todo Item', async () => {
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue('Things to do today');
        await $('~Create').click();
        await expect($("~Things to do today")).toBeExisting()

        // Create Todo Item
        await $('~Things to do today').click();
        await $('//*[@name="Create item"]').click();
        await $('//*[@value="Title"]').addValue('Buy Groceries');
        await $('//*[@value="Due"]').click();
        await $('~Date Picker').click();
        await driver.pause(3000)
 

    });
});