import { dbContext } from "../db/DbContext.js"

class BooksService {
  async getBooksByLibraryId(libraryIdFromParameters) {
    const books = await dbContext.Books.find({ libraryId: libraryIdFromParameters })
    // const books = await dbContext.Books.findOne({ title: 'Twilight' })
    return books
  }
  async createBook(bookData) {
    const book = await dbContext.Books.create(bookData)
    return book
  }
}

export const booksService = new BooksService()