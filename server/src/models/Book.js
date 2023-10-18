import { Schema } from "mongoose";

export const BookSchema = new Schema(
  {
    title: { type: String, required: true, maxLength: 100 },
    author: { type: String, required: true, maxLength: 50 },
    libraryId: { type: Schema.Types.ObjectId, required: true, ref: 'Library' },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true,
    // toJSON: {}
  }
)