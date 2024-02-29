import mongoose,{Schema} from "mongoose";
import { IPost, employmentType } from "../../../../utils/interface/interface";

const postSchema :Schema<IPost> = new Schema<IPost>({
    _id:String,
    postName:String,
    company:String,
    recruitingPlace:String,
    createdAt:Date,
    employmentType:{
        type: String,
        enum: Object.values(employmentType),
      },
    isPremium:Boolean,
    isListed:Boolean,
    // category: [{ type: Schema.Types.ObjectId, ref: "Category" }],

})

const Post = mongoose.model<IPost>("Post",postSchema)
export {Post,employmentType}