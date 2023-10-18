import { dbContext } from "../db/DbContext.js"

class AccountBooksService {
  async createAccountBook(accountBookData) {
    const accountBook = await dbContext.AccountBooks.create(accountBookData)
    await accountBook.populate('book')
    await accountBook.populate('profile')
    return accountBook
  }
  async getAccountBooksByBookId(bookId) {
    const accountBooks = await dbContext.AccountBooks.find({ bookId: bookId }).populate('profile')
    return accountBooks
  }
  async getUserAccountBooks(userId) {
    const accountBooks = await dbContext.AccountBooks.find({ accountId: userId }).populate('book')
    return accountBooks
  }
}

export const accountBooksService = new AccountBooksService()