class BookCollection {
  constructor() {
    this.books = [];
  }

  saveBooksToStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  addBookToCollection(title, author) {
    const book = {
      id: Math.floor(Math.random() * 1000),
      title,
      author,
    };
    this.books.push(book);
    this.saveBooksToStorage();
  }

  addBook(event) {
    event.preventDefault(); // Prevent form submission and page refresh

    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title && author) {
      this.getBooksFromStorage(); // Retrieve existing books
      this.addBookToCollection(title, author);
      titleInput.value = '';
      authorInput.value = '';
    }
  }

  getBooksFromStorage() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    }
  }
}

// Book Collection
const bookCollection = new BookCollection();

// Add button listener
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', (event) => bookCollection.addBook(event));