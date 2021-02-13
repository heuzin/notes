import { remove } from 'lodash'
import { getNotes, createNote, removeNote, updateNote } from './notes'

// console.log(getNotes())
// createNote()
updateNote('43cde408-cd31-4175-9e95-d3e279858c82', {
    title: 'new title'
})
console.log(getNotes())