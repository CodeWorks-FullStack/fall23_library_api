import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { accountBooksService } from '../services/AccountBooksService.js'

export class AccountController extends BaseController {
  constructor () {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/accountBooks', this.getUserAccountBooks)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getUserAccountBooks(request, response, next) {
    try {
      const userId = request.userInfo.id
      const accountBooks = await accountBooksService.getUserAccountBooks(userId)
      return response.send(accountBooks)
    } catch (error) {
      next(error)
    }
  }
}
