import { IPost } from '../../../utils/interfaces/interfaces'
import {schema} from '../database'
const {Category,Post} =schema


export default {
    createPost :async(data:IPost)=> {
        try {
            const postData = {
                postName:data?.postName,
                company:data?.company,
                responsabilities:data?.responsabilities,
                jobDescription:data?.jobDescription,
                skillsRequired:data?.skillsRequired,
                qualification:data?.qualification,
                salary:data?.salary,
                category:data?.category,
                recruiterEmail :data?.recruiterEmail,
                recruitingPlace:data?.recruitingPlace,
                closingDate:data?.closingDate,
                workArrangementType:data?.workArrangementType,
                employmentType:data.employmentType,
                isPremium:data.isPremium,
                isListed:data.isListed,
                

            }

            let response = await Post.create(postData)
            if (response) {
                return {status:true,message:'post created',response}
            }else{
                return {status:false,message:'error in creating post'}
            }
        } catch (error) {
            console.log("error in post.repository create post", error);

        }
    }
}