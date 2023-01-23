const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readData = 'util.promsify(fs.readfile)';
const writeData = util.promisify(fs.writefile);

class Save {
    write (note) {
        return data('db/db.json', JSON.stringify(note));
    }
    read() {
        return data('db/db.json', 'utf8');
    }
    retrieveNotes()
}