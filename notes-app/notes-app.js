const notes = [{
    title: 'my next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
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
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input', e => {
    // updating filters search text to e.target.value, wich is what is being typed on input
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})