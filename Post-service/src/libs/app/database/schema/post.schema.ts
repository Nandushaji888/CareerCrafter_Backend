import mongoose, { Schema, ObjectId } from "mongoose";
import {
  IPost,
  WorkArrangementType,
  employmentType,
} from "../../../../utils/interfaces/interfaces";
import { Category } from "./category.schema";

const postSchema: Schema<IPost> = new Schema<IPost>({
  postName: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  responsabilities: {
    type: String,
    required: true,

  },
  jobDescription: {
    type: String,
    required: true,
  },
  skillsRequired: {
    type: String,
  },
  qualification: {
    type: String,
  },
  salary: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
  },
  questions: [
    {
      type: String,
    },
  ],

  recruiterEmail: {
    type: String,
    required: true,
  },
  recruitingPlace: {
    type: String,
    required: true,
  },

  closingDate: {
    type: Date,
  },
  workArrangementType: {
    type: String,
    enum: Object.values(WorkArrangementType),
  },
  employmentType: {
    type: String,
    enum: Object.values(employmentType),
  },
  isPremium: {
    type: Boolean,
    required: true,
    default:false
  },

  isListed: {
    type: Boolean,
    required: true,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model<IPost>("Post", postSchema);
export { Post };
