let notes = []

const filters = {
    searchText: ''
}

// check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const renderNotes = (notes, filters) => {
    // filtering notes based on search text
    // if notes title includes filters search text
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    // showing each note on screen based on filtered notes
    filteredNotes.forEach((note) => {
        const noteEl = document.createElement('p')

        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unamed note'
        }
        
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', e => {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', e => {
    // updating filters search text to e.target.value, wich is what is being typed on input
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})