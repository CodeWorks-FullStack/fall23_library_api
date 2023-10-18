import { Schema } from "mongoose";

export const AccountBookSchema = new Schema(
  {
    accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    bookId: { type: Schema.Types.ObjectId, required: true, ref: 'Book' },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

AccountBookSchema.virtual('book', {
  localField: 'bookId',
  ref: 'Book',
  foreignField: '_id',
  justOne: true
})

AccountBookSchema.virtual('profile', {
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})