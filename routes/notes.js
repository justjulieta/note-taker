const router = require('express').Router();
const SavedNotes = require('./savedNotes.js');

router.get('/notes', (req, res) => {
  SavedNotes
  .getAllNotes().then((data) => res.json(data));
});

router.post('/notes', (req, res) => {
  SavedNotes
  .addNewNote(req.body).then((note) => res.json(note))
  .catch((err) => res.status(500).json(err));
});

router.delete('/notes/:id', (req, res) => {
  SavedNotes
  .removeNoteId(req.params.id).then(() => res.json({ok: true}))
  .catch((err) => res.status(500).json(err));
})

module.exports = router;