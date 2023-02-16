const inputLink = document.getElementById('link')
const inputName = document.getElementById('name')
const addButton = document.getElementById('add')
const bookmarks = document.querySelector('ul')
let bookArray = []

addButton.addEventListener('click', () => {
    addBookmark2Array()
})

// Adds link and name to object, then adds object to array
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
    listItem.append(link)
    link.target = '_blank'
    link.href = Object.keys(bookArray[0])
    link.textContent = Object.values(bookArray[0])
    bookmarks.prepend(listItem)
}