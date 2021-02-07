// Gets id from location hash (browsers link) startind from index 1, index 0 is the hash #
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find((note) => {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
} 