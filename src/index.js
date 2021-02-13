import { getNotes, createNote, removeNote, updateNote } from './notes'
import { getFilters, setFilters } from './filters'
// console.log(getNotes())
// createNote()
// updateNote('43cde408-cd31-4175-9e95-d3e279858c82', {
//     title: 'new title'
// })
console.log(getFilters())
setFilters({
    searchText: 'office',
    sortBy: 'byCreated'
})
console.log(getFilters())