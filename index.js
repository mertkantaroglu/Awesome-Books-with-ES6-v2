import BookList from './modules/bookList.js';
import { DateTime } from './modules/luxon.js';
import {
  listSection, listButton, addSection, bookAddButton, contactSection, contactButton,
} from './modules/navbar.js';

// Connect the classes
const bookListObj = new BookList();

// Event listener to Add Book
bookListObj.form.addEventListener('submit', bookListObj.addBook.bind(bookListObj));

// Load book list
bookListObj.showList();

// Show the current time
const showDate = () => {
  const dateTime = document.querySelector('#date-time');
  dateTime.innerHTML = DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

showDate();
setInterval(showDate, 1000);

// Navbar Item Display
listButton.addEventListener('click', () => {
  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
});

bookAddButton.addEventListener('click', () => {
  addSection.style.display = 'block';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
});

contactButton.addEventListener('click', () => {
  addSection.style.display = 'none';
  listSection.style.display = 'none';
  contactSection.style.display = 'block';
});
