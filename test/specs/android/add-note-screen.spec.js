const EditNoteScreen = require("../../screenObjects/android/edit-note.screen");

describe('Delete Notes', () => {

    before('Edit Notes', async () => {
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("Names Of Noise Makers", "Dereck\nChiamaka\nWhales\nItohan\nAll Arsenal Fans")
        await driver.back()
    });

    it('Delete a note and check note in trash can', async () => {
        const note = await EditNoteScreen.firstNote.getText();

        // click on the note 
        await EditNoteScreen.firstNote.click();

        //click on more icon
        await EditNoteScreen.moreIcon.click();

        //click on delete item
        await EditNoteScreen.deleteIcon.click();

        //Accepte alert
        driver.acceptAlert();

        //click on Nav icon
        await EditNoteScreen.navIcon.click();

        //Click on trash can item
        await EditNoteScreen.trashCanItem.click();

        //assertion
        const trashCanitem = await EditNoteScreen.firstNote

        await expect(trashCanitem).toHaveText(note);

    });
});