"use strict";

var EditNoteScreen = require("../../screenObjects/android/edit-note.screen");

describe('Delete Notes', function () {
  before('Edit Notes', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(EditNoteScreen.skipTutorial());

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(EditNoteScreen.addAndSaveNote("Names Of Noise Makers", "Dereck\nChiamaka\nWhales\nItohan\nAll Arsenal Fans"));

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap(driver.back());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it('Delete a note and check note in trash can', function _callee2() {
    var note, trashCanitem;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(EditNoteScreen.firstNote.getText());

          case 2:
            note = _context2.sent;
            _context2.next = 5;
            return regeneratorRuntime.awrap(EditNoteScreen.firstNote.click());

          case 5:
            _context2.next = 7;
            return regeneratorRuntime.awrap(EditNoteScreen.moreIcon.click());

          case 7:
            _context2.next = 9;
            return regeneratorRuntime.awrap(EditNoteScreen.deleteIcon.click());

          case 9:
            //Accepte alert
            driver.acceptAlert(); //click on Nav icon

            _context2.next = 12;
            return regeneratorRuntime.awrap(EditNoteScreen.navIcon.click());

          case 12:
            _context2.next = 14;
            return regeneratorRuntime.awrap(EditNoteScreen.trashCanItem.click());

          case 14:
            _context2.next = 16;
            return regeneratorRuntime.awrap(EditNoteScreen.firstNote);

          case 16:
            trashCanitem = _context2.sent;
            _context2.next = 19;
            return regeneratorRuntime.awrap(expect(trashCanitem).toHaveText(note));

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});