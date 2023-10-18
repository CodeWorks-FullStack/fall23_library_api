import { dbContext } from "../db/DbContext.js"

class BooksService {
  async getBooksByLibraryId(libraryIdFromParameters) {
    // const books = await dbContext.Books.find({ title: 'Twilight' })
    const books = await dbContext.Books.find({ libraryId: libraryIdFromParameters })
    return books
  }
  async createBook(bookData) {
    const book = await dbContext.Books.create(bookData)
    return book
  }
}

export const booksService = new BooksService()