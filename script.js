  function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
  
  Book.prototype.info = function() {
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages ' + this.status;
  };
  
  const myLibrary = [];
 
  const alida  = new Book("Adventures of Alida", "Myers Brig", 600, "read");
  const dingchilling  = new Book("Very Polite and Humble", "Ding Lerin", 200, "unread");
  
  function addBookToLibrary(obj) {
    return myLibrary.push(obj);
  }
  
  function loopThroughArray (arr) {
    arr.forEach(element => {
      console.log(element.title);
    });
  }
     
  addBookToLibrary(alida);
  addBookToLibrary(dingchilling);
  console.log(myLibrary);
  
  loopThroughArray(myLibrary);