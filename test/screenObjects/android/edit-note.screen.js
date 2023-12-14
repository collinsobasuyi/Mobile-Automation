const AddNoteScreen = require("./add-note.screen")

class EditNoteScreen {

    get firstNote(){
       return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }

    get moreIcon(){
        return $('~More')
    }

    get deleteIcon(){
        return $('//*[@text="Delete"]')
    }

    get navIcon(){
        return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }

    get trashCanItem(){
        return $('//*[@text="Trash Can"]')
    }
async skipTutorial(){
    await AddNoteScreen.skipBtn.click();

    // assert text to be displayed
    await expect(AddNoteScreen.addNoteTxt)
        .toBeDisplayed();
}

async addAndSaveNote(noteHeading, noteBody){
    await AddNoteScreen.addNoteTxt.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing)
        .toBeDisplayed();

    //  add note title
    await AddNoteScreen.noteHeading.addValue(noteHeading)

    //  add note body
    await AddNoteScreen.noteBody.addValue(noteBody)

    //  save save changes
    await AddNoteScreen.saveNote();

    //assert
    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText("Dereck\nChiamaka\nWhales\nItohan\nAll Arsenal Fans");
}
}
module.exports = new EditNoteScreen();


