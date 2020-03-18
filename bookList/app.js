// Book Constructor
// handles creating the actual book object

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
// set of prototype methods to do things like add the book to the list, delete the book, show the alert, things that have to do with the UI

function UI() {

}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  console.log('test');
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
    
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const UI = new UI();

    // Add book to list
    ui.addBookToList(book);
    
    e.preventDefault();
})