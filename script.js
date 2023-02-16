const inputLink = document.getElementById('link')
const inputName = document.getElementById('name')
const addButton = document.getElementById('add')
const bookmarks = document.querySelector('ul')
let bookArray = []

addButton.addEventListener('click', () => {
    let holder = {}
    holder[inputLink.value] = inputName.value
    bookArray.push(holder)
    console.log(bookArray)
})
