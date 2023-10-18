import { dbContext } from "../db/DbContext.js"

class LibrariesService {
  async createLibrary(libraryData) {
    const library = await dbContext.Libraries.create(libraryData)
    await library.populate('creator')
    return library
  }
  async getLibraries() {
    const libraries = await dbContext.Libraries.find().populate('creator')
    return libraries
  }
}

export const librariesService = new LibrariesService()