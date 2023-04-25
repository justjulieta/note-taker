const router = require('express').Router();
const path = require('path');
const notesRouter = require('./notes');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

router.use('/api', notesRouter);

module.exports = router;
