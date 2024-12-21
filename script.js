
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
  
  Book.prototype.info = function() {
      return this.title + ' by ' + this.author + ', ' + this.pages + ' pages ' + this.status;
  };
  
  // const book = new Book('title', 'author', 302, 'not read yet');
  // console.log(newBook().info());
  
  function newBook (title, author, pages, status) {
      return { title, author, pages, status };
  }
  
  const alida  = newBook("Advendtures of Alida", "Myers Brig", 600, "read");
  const dingchilling  = newBook("Very Polite and Humble", "Ding Lerin", 200, "unread");
  
  const library = [];
  
  function addToLibrary(obj) {
      return library.push(obj);
  }
  
  function matchTitle (titleName) {
      if (titleName) {
          library.forEach(book => {
              if (book.title === titleName) {
                console.log(`"${book.title}" is the book's title name.`);
              }
            });
        }
    }
    

// students.forEach(student => {
//   if (student.grade === 'A') {
//     console.log(`${student.name} passed with distinction!`);
//   } else if (student.grade === 'B') {
//     console.log(`${student.name} passed.`);
//   } else {
//     console.log(`${student.name} failed.`);
//   }
// });
    
    // works
    addToLibrary(alida);
    addToLibrary(dingchilling);
    console.log(library);
    // console.log(library[1]["title"]);
  
    // returns undefined... I read that you can get the nested obj value... somewhere in the programming notes prolly
matchTitle("Advendtures of Alida");
    
//   function addBookToLibrary() {
//       // takes user's input
//       // store the new book objects to myLibrary array
//       // propose: call the constructor
//   }
