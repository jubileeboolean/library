const myLibrary = ["campi0", "subdued art", "written"];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.info = function() {
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages ' + this.status;
};

const book = new Book('title name', 'author jubilee', 302, 'not read yet');
// console.log(book.info());

function booksInLibrary(arr) {
    const shelf = document.querySelector('.shelf');
    const p = document.createElement('p');
    arr.forEach(book => {
        // display the book in the DOM
        // suggestion: refer back to javascript
        // https://www.javascripttutorial.net/javascript-dom/
        // to recall inserting elements in the DOM
        // console.log(book);
        p.textContent = book;
        shelf.appendChild(p);
    });
}
// booksInLibrary(myLibrary);

function addBookToLibrary() {
    // takes user's input
    // store the new book objects to myLibrary array
    // propose: call the constructor
}
