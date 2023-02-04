export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = (event) => {
    event.preventDefault();
    const {id} = this;
    const title = document.querySelector('.title').value;
    const author = document.querySelector('author').value;
    if (books !== null) {
      books.push(id, title, author);
      localStorage.setItem('books', JSON.stringify(books));
      title.value = '';
      author.value = '';
    }
  }

  removeBook = (id) => {
    const remainingBooks = this.books.filter((book) => (book.id !== id));
    localStorage.setItem('books', JSON.stringify(remainingBooks));
  }
}