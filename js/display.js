class BookCollection {
  constructor() {
    this.books = [];
  }

  getBooksFromStorage() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    }
  }

  removeBookFromCollection(id) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      this.saveBooksToStorage();
    }
  }

  displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    this.getBooksFromStorage(); // Retrieve books from storage

    this.books.forEach((book) => {
      const bookItem = document.createElement('tr');
      const bookTitle = document.createElement('td');
      const bookAuthor = document.createElement('td');
      const removeButton = document.createElement('button');

      bookTitle.textContent = `Title: ${book.title}`;
      bookAuthor.textContent = `Author: ${book.author}`;
      removeButton.textContent = 'Remove';

      removeButton.addEventListener('click', () => {
        this.removeBookFromCollection(book.id);
        this.displayBooks();
      });

      bookItem.appendChild(bookTitle);
      bookItem.appendChild(bookAuthor);
      bookItem.appendChild(removeButton);

      bookList.appendChild(bookItem);
    });
  }
}

// Book Collection
const bookCollection = new BookCollection();

// Display books
bookCollection.displayBooks();