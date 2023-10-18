import { Schema } from "mongoose";

export const LibrarySchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 100 },
    location: { type: String, required: true, maxLength: 100 },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

// NOTE we can use a virtual here to grab another piece of data from another collection in our database
// NOTE the first argument passed to the virtual method is the name of your virtual
LibrarySchema.virtual('creator', {
  localField: 'creatorId', // this is the property we are using on this object
  ref: 'Account', // this is the collection we are looking through
  foreignField: '_id', // this is what should match our local field
  justOne: true // this will return one object instead of an array of objects
})