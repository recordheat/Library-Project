// Event listeners for adding book, new book to the page, and closing the pop up card

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

const newBookBtn = document.querySelector('#new-book-button');
newBookBtn.addEventListener('click', () => {
 popUpForm.style.display = 'flex'});

const popUpForm = document.getElementById('popUpCard');

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    popUpForm.style.display = 'none'; 
  });


//Book constructor 
class Book {
    constructor() {
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
    event.preventDefault();
    popUpForm.style.display = 'none';
    
    newBook = new Book(title, author, pages, read);
    libraryOfBooks.push(newBook);
    renderBooks();
    form.reset();

}
 
function renderBooks () {

    const display = document.getElementById('booksArray');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book)); 
    for (let i=0; i<libraryOfBooks.length; i++){
        createBook(libraryOfBooks[i]); // create and append new book elements to the DOM
    }
}
//creats book DOM elements, to use in renderBooks();

function createBook(item) {
    const library = document.querySelector('#booksArray');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');

    console.log(library)

    bookDiv.classList.add('book');
   
    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = item.pages;
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);
    
    readButton.classList.add('readBtn');
    bookDiv.appendChild(readButton);
    if(item.read===false) {
        readButton.textContent = 'Not Read';
        readButton.style.backgroundColor = '#e04f63';
    } else {
       readButton.textContent = 'Read';
       readButton.style.backgroundColor = '#63da63';
    }

    removeButton.textContent = 'Remove';
    removeButton.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeButton);

    library.appendChild(bookDiv);

    readButton.addEventListener('click', () => { 
        item.read = !item.read;
        renderBooks();
    });

    removeButton.addEventListener('click', () => {
    libraryOfBooks.splice(libraryOfBooks.indexOf(item),1);
    renderBooks();
    });
}


