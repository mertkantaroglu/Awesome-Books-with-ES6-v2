import Book from './book.js';

// Booklist class
export default class BookList {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem('bookList')) || [];
    this.form = document.getElementById('book-form');
  }

  // addBook(title, author) {
  addBook(event) {
    event.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const book = new Book(title.value, author.value);
    this.bookList.push(book);
    this.save();
    this.showList();
    title.value = '';
    author.value = '';
  }

  deleteBook(event) {
    this.bookList.splice(event.target.id, 1);
    this.save();
    this.showList();
  }

  showList() {
    const list = document.querySelector('#book-list');
    list.innerHTML = '';
    this.bookList.forEach((book, i) => {
      const newBook = document.createElement('li');
      newBook.innerHTML = `
        <p>${book.title} by ${book.author}</p>
        <button type="submit" class='remove-btn' id="${i}">Remove</button>
      `;
      list.appendChild(newBook);
    });
    // Event listener to Remove Book
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach((item) => {
      item.addEventListener('click', this.deleteBook.bind(this));
    });
  }

  save() {
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }
}