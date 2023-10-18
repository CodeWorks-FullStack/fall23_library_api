import { Auth0Provider } from "@bcwdev/auth0provider";
import { librariesService } from "../services/LibrariesService.js";
import BaseController from "../utils/BaseController.js";
import { booksService } from "../services/BooksService.js";

export class LibrariesController extends BaseController {
  constructor () {
    super('api/libraries')
    this.router
      .get('', this.getLibraries)
      .get('/:libraryId/books', this.getBooksByLibraryId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createLibrary)
  }

  async getLibraries(request, response, next) {
    try {
      // TODO show off query
      const libraries = await librariesService.getLibraries()
      return response.send(libraries)
    } catch (error) {
      next(error)
    }
  }

  async getBooksByLibraryId(request, response, next) {
    try {
      const libraryId = request.params.libraryId
      const books = await booksService.getBooksByLibraryId(libraryId)
      return response.send(books)
    } catch (error) {
      next(error)
    }
  }

  async createLibrary(request, response, next) {
    try {
      const libraryData = request.body
      const userInfo = request.userInfo
      libraryData.creatorId = userInfo.id
      const library = await librariesService.createLibrary(libraryData)
      response.send(library)
    } catch (error) {
      next(error)
    }
  }
}