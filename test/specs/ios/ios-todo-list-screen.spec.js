// const ListScreen = require('../../screenObjects/ios/todo-list.screen')
import ListScreen from '../../screenObjects/ios/todo-list.screen'

describe('Todo List', () => {
    it('Create a Todo List', async () => {
        await ListScreen.CreateList.click();
        await ListScreen.ListNameInput.addValue('Things to do today');
        await ListScreen.CreateBtn.click();

        await expect(await ListScreen.listNameField("Things to do today")).toBeExisting()
    });
});
