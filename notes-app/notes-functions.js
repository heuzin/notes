// Read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// save notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('p')

        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unamed note'
        }

        return noteEl
}

// Render application notes
const renderNotes = (notes, filters) => {
    // filtering notes based on search text
    // if notes title includes filters search text
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    // showing each note on screen based on filtered notes
    filteredNotes.forEach((note) => {   
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}