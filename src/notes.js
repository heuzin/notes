import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

let notes = []

// Read existing notes from localStorage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    } 
}

// Expose notes frmo module
const getNotes = () => notes

const createNote = () => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
}

notes = loadNotes()

export { getNotes, createNote }