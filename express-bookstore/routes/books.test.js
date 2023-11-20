process.env.NODE_ENV = 'test';

const app = require('../app');
const request = require('supertest');
const Book = require('../models/book');
const db = require('../db');

describe('Bookstore Routes', () => {
  let createdBook;

  beforeAll(async () => {
    // Create a book before running tests
    createdBook = await createTestBook();
  });

  afterAll(async () => {
    // delete all books created during tests
    await deleteAllTestBooks();
    
    if (db) {
        await db.end();
      }
    
  });

  test('GET /books should return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('books');
    expect(Array.isArray(res.body.books)).toBe(true);
  });

  test('PUT /books/:isbn should update an existing book', async () => {
    // Generate a unique ISBN for the test
  
    // Create a test book
    const testBookData = {
      isbn: "0987654321",
      amazon_url: 'http://example.com/book',
      author: 'Test Author',
      language: 'english',
      pages: 200,
      publisher: 'Test Publisher',
      title: 'Test Book',
      year: 2022,
    };
  
    const createdBook = await Book.create(testBookData);
  
    // Update the test book
    const updatedBookData = {
      isbn: '0987654321',
      amazon_url: 'http://example.com/updated-book',
      author: 'Updated Author',
      language: 'spanish',
      pages: 250,
      publisher: 'Updated Publisher',
      title: 'Updated Book',
      year: 2023,
    };
  
    const res = await request(app)
      .put(`/books/${createdBook.isbn}`)
      .send(updatedBookData);
  
    console.log('Response:', res.body); // Add this line for logging
  
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('book');
    expect(res.body.book).toMatchObject(updatedBookData);
  });
  


  // Helper function to create a test book
  async function createTestBook() {
    const testBookData = {
      isbn: '1234567890',
      amazon_url: 'http://example.com/book',
      author: 'Test Author',
      language: 'english',
      pages: 200,
      publisher: 'Test Publisher',
      title: 'Test Book',
      year: 2022,
    };

    return await Book.create(testBookData);
  }

  // Helper function to delete all books created during tests
  async function deleteAllTestBooks() {
    try {
      await Book.deleteAll();
    } catch (error) {
      console.error('Error deleting test books:', error.message);
    }
  
  }
});
