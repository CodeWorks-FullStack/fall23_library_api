import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { booksService } from "../services/BooksService.js";

export class BooksController extends BaseController {
  constructor () {
    super('api/books')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBook)
    // .get('/library')
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