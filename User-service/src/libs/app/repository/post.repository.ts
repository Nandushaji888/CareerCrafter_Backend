import { IPost } from "../../../utils/interface/interface";
import {Schema} from '../databse'
const {Post} = Schema
export default{
    storePost:async(data:IPost)=> {
        // console.log('data');
        // console.log(data);
        
        const postData={
            _id:data?._id||"",
            postName:data?.postName||"",
            company:data?.company||"",
            recruitingPlace:data?.recruitingPlace||"",
            createdAt:data?.createdAt||Date.now()||"",
            employmentType:data?.employmentType||"",
            isPremium:data?.isPremium||false,
            isListed:data?.isListed||true,
            // category:data?.category||"",
        }

        const response = await Post.create(postData)
        console.log(response);
        if (response) {
            return {status:true,message:'post created',response}
        }else{
            return {status:false,message:'error in creating post'}
        }
    },
  
}