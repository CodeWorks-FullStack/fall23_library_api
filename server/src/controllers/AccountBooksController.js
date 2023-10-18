import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { accountBooksService } from "../services/AccountBooksService.js";

export class AccountBooksController extends BaseController {
  constructor () {
    super('api/accountBooks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createAccountBook)
  }
  async createAccountBook(request, response, next) {
    try {
      const accountBookData = request.body
      const userInfo = request.userInfo
      accountBookData.accountId = userInfo.id
      const accountBook = await accountBooksService.createAccountBook(accountBookData)
      return response.send(accountBook)
    } catch (error) {
      next(error)
    }
  }
}