class ListScreen {
    get CreateList() {
        return $('//*[@name="Create list"]');
    }

    get ListNameInput() {
        return $('//*[@value="List Name"]');
    }

    get CreateBtn() {
        return $('~Create');
    }

    listNameField(name) {
        return $(`~${name}`);
    }

}
// module.exports = new ListScreen();
export default new ListScreen();


