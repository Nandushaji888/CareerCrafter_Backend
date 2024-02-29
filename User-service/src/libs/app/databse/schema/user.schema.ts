import mongoose, { Schema, ObjectId } from "mongoose";
import { IUser, AuthType } from "../../../../utils/interface/interface";

const userSchema: Schema<IUser> = new Schema<IUser>({
  _id: String,
  name: { type: String},
  email: { type: String, 
    // required: true, unique: true
   },
  phone: { type: String,
    //  required: true
   },
  type: {
    type: String,
    enum: Object.values(AuthType),
    default: AuthType.User,
  },
  status: { type: Boolean },
  isGoogle: {
    type: Boolean
  },
  aboutYou: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  appliedJobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
  savedJobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
  createdOn: { type: Date},
  editedOn: { type: Date, default: Date.now() },
  resume: { type: String },
  qualification: { type: String },
  skills: { type: String },
  profilePic: { type: String },
});

const User = mongoose.model<IUser>("User", userSchema);
export { User, AuthType };
