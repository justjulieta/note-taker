const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readData = util.promisify(fs.readFile);
const writeData = util.promisify(fs.writeFile);
class Save {
    write(note) {
        return writeData('db/db.json', JSON.stringify(note));
    }

    read() {
        return readData('db/db.json', 'utf8');
    }

    retrieveNotes() {
        return this.read().then(notes => {
            let dataNotes;
            try {
                dataNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                dataNotes = [];
            }
            return dataNotes;
        });
    }

    addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error('Enter in a value');
        }

        const newNote = { title, text, id: uuidv4() };

        return this.retrieveNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
    }

    deleteNote(id) {
        return this.retrieveNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(filteredNotes => this.write(filteredNotes));
    }
}

module.exports = new Save();