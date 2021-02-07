let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', e => {
    notes.push({
        id: uuidv4(),
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', e => {
    // updating filters search text to e.target.value, wich is what is being typed on input
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})