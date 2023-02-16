const inputLink = document.getElementById('link')
const inputName = document.getElementById('name')
const addButton = document.getElementById('add')
const bookmarks = document.querySelector('ul')
let bookArray = []

addButton.addEventListener('click', () => {
    addBookmark2Array()
    inputLink.value = ""
    inputName.value = ""
})

// Adds link and name to object, then adds object to array, and clears input
function addBookmark2Array() {
    let holder = {}
    holder[inputLink.value] = inputName.value
    bookArray.unshift(holder)
    return add2List()
}

// Adds link to list
function add2List() {
    const listItem = document.createElement('li')
    const link = document.createElement('a')
    const removeButton = document.createElement('button')
    removeButton.classList.add('remove')
    removeButton.textContent = "-"
    listItem.append(link)
    listItem.append(removeButton)
    link.target = '_blank'
    link.href = Object.keys(bookArray[0])
    link.textContent = Object.values(bookArray[0])
    bookmarks.append(listItem)
}




// add remove buttons
// re render whenever a bookmark is removed
// use map at some point
