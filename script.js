// Event listeners for adding book, new book to the page, and closing the pop up card
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

const newBookBtn = document.querySelector('#new-book-button');


//Book constructor 
class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value + 'pg';
        this.read = form.read.checked;
    }
}

//Array of books whenever someone adds a new book
let libraryOfBooks = [];
let newBook;

function addBookToLibrary () {
  
}

