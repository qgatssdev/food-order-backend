import mongoose, { Schema, Document, Model, Mongoose } from 'mongoose';

interface FoodDoc extends Document {
  vendorId: string;
  name: string;
  description: string;
  foodType: string;
  category: string;
  readyTime: string;
  price: number;
  rating: number;
  images: [string];
}

const FoodSchema = new Schema(
  {
    vendorId: { type: String, required: true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    foodType: { type: String, required: true },
    category: { type: String },
    readyTime: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: Number},
    images: { type: [String], required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
        delete ret.createdAt, delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

const Food = mongoose.model<FoodDoc>('food', FoodSchema);

export { Food };
