const apiUrl = 'http://localhost:3000/books';

function fetchBooks() {
  axios.get(apiUrl)
    .then(response => {
      displayBooks(response.data.books);
    })
    .catch(error => {
      console.error('Error fetching books:', error.message);
    });
}

function displayBooks(books) {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';

    listItem.innerHTML = `
      <h5 class="mb-1">${book.title}</h5>
      <p class="mb-1">Author: ${book.author}</p>
      <p class="mb-1">Year: ${book.year}</p>
      <p class="mb-1">ISBN: ${book.isbn}</p>
      <a href="${book.amazon_url}" target="_blank" class="btn btn-primary btn-sm">Amazon Link</a>
    `;

    bookList.appendChild(listItem);
  });
}

function openAddBookModal() {
  const isbn = prompt('Enter ISBN:');
  const amazon_url = prompt('Enter Amazon URL:');
  const author = prompt('Enter Author:');
  const language = prompt('Enter Language:');
  const pages = prompt('Enter Pages:');
  const publisher = prompt('Enter Publisher:');
  const title = prompt('Enter Title:');
  const year = prompt('Enter Year:');

  const bookData = {
    "isbn": `${isbn}`,
    "amazon_url": `${amazon_url}`,
    "author": `${author}`,
    "language": `${language}`,
    "pages": Number(pages),
    "publisher": `${publisher}`,
    "title": `${title}`,
    "year": Number(year)
  };

  // Validate required fields
  const requiredFields = ["isbn", "author", "language", "pages", "publisher", "title", "year"];
  const missingFields = requiredFields.filter(field => !bookData[field]);

  if (missingFields.length > 0) {
    alert(`Please enter values for the following required fields: ${missingFields.join(', ')}`);
    return;
  }

  addBook(bookData);
}

async function addBook(bookData) {
  console.log('Sending request with payload:', JSON.stringify(bookData));
  try {
    const response = await axios.post(apiUrl, bookData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 201) {
      console.log('Book added successfully:', response.data.book);
      // Optionally, you can refresh the book list after adding a book
      fetchBooks();
    } else {
      console.error('Unexpected response:', response.status, response.data);
    }
  } catch (error) {
    console.error('Error adding book:', error.message);
  }

}

// Event listener for "Get Books" button
document.getElementById('getBooksBtn').addEventListener('click', function () {
  fetchBooks();
});

// Event listener for "Add Book" button
document.getElementById('addBookBtn').addEventListener('click', function () {
  openAddBookModal();
});

// Event listener for "Delete All" button
document.getElementById('deleteAllBtn').addEventListener('click', async function () {
  try {
    const response = await axios.delete(apiUrl);
    if (response.status === 200) {
      console.log('All books deleted successfully:', response.data.message);
      // Optionally, you can refresh the book list after deleting all books
      fetchBooks();
    } else {
      console.error('Unexpected response:', response.status, response.data);
    }
  } catch (error) {
    console.error('Error deleting all books:', error.message);
  }
});

document.addEventListener('DOMContentLoaded', fetchBooks);
