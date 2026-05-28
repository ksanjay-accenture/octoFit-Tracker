import mongoose, { Schema, Document } from 'mongoose';

interface IExercise extends Document {
  name: string;
  description: string;
  duration: number;
  calories: number;
  date: Date;
}

const exerciseSchema = new Schema<IExercise>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export const Exercise = mongoose.model<IExercise>('Exercise', exerciseSchema);
