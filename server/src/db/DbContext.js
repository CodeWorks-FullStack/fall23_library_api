import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { LibrarySchema } from '../models/Library.js';
import { BookSchema } from '../models/Book.js';
import { AccountBookSchema } from '../models/AccountBook.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Libraries = mongoose.model('Library', LibrarySchema);

  Books = mongoose.model('Book', BookSchema);

  AccountBooks = mongoose.model('AccountBook', AccountBookSchema);
}

export const dbContext = new DbContext()
