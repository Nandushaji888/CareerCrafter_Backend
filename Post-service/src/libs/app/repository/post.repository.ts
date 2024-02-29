import { IPost } from "../../../utils/interfaces/interfaces";
import { schema } from "../database";
const { Category, Post } = schema;

export default {
  createPost: async (data: IPost) => {
    try {
      const postData = {
        postName: data?.postName,
        company: data?.company,
        responsibilities: data?.responsibilities,
        jobDescription: data?.jobDescription,
        skills: data?.skills,
        qualification: data?.qualification,
        salary: data?.salary,
        category: data?.category,
        questions: data?.questions,
        recruiterEmail: data?.recruiterEmail,
        recruitingPlace: data?.recruitingPlace,
        closingDate: data?.closingDate,
        workArrangementType: data?.workArrangementType,
        employmentType: data.employmentType,
        isPremium: data.isPremium,
        isListed: data.isListed,
      };

      let response = await Post.create(postData);
      if (response) {
        return { status: true, message: "post created", response };
      } else {
        return { status: false, message: "error in creating post" };
      }
    } catch (error) {
      console.log("error in post.repository create post", error);
    }
  },
  findJobPost: async(id:string)=> {
    try {
      const jobDetails = await Post.findById(id) 
      if(jobDetails){
        return {status:true,jobDetails}
      }else{
        return {status:false,message:"Error in fetching the job details"}

      }
      
      
    } catch (error) {
      console.log('error in finding job in post service',error);
      
    }
  },
  pendingPostCount:async()=> {
    try {
      const count = await Post.find({ isListed: false });
      return{status:true,count}
    } catch (error) {
      console.log('error in finding pending post',error);
      
    }
  }

};
