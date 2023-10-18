import { dbContext } from "../db/DbContext.js"

class LibrariesService {
  async getLibraries() {
    // NOTE .populate tells our virtual to run, the argument that we pass through specifies which virtual to run
    const libraries = await dbContext.Libraries.find().populate('creator')
    return libraries
  }
  async createLibrary(libraryData) {
    const library = await dbContext.Libraries.create(libraryData)
    // NOTE you can not populate on the same line when creating something in the database
    await library.populate('creator')
    return library
  }
}

export const librariesService = new LibrariesService()