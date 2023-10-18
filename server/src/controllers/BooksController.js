import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { booksService } from "../services/BooksService.js";
import { accountBooksService } from "../services/AccountBooksService.js";

export class BooksController extends BaseController {
  constructor () {
    super('api/books')
    this.router
      .get('/:bookId/accountBooks', this.getAccountBooksByBookId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBook)
    // .get('/library')
  }
  async getAccountBooksByBookId(request, response, next) {
    try {
      const bookId = request.params.bookId
      const accountBooks = await accountBooksService.getAccountBooksByBookId(bookId)
      return response.send(accountBooks)
    } catch (error) {
      next(error)
    }
  }
  async createBook(request, response, next) {
    try {
      const bookData = request.body
      const userInfo = request.userInfo
      bookData.creatorId = userInfo.id
      const book = await booksService.createBook(bookData)
      return response.send(book)
    } catch (error) {
      next(error)
    }
  }
}