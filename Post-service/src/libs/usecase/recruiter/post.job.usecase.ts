import { IPost } from "../../../utils/interfaces/interfaces";

export const createPost_useCase = (dependencies: any) => {
  const {
    repository: { postRepository },
  } = dependencies;


  const executeFunction = async(data:IPost)=> {
    const postData = await postRepository?.createPost(data)

    if(postData.status){
        return { status: true, user: postData, message:'Job Post created successfully' };
        
    }else{
        return { status: false, message:'Error in creating Job post' };

    }

  }
  return {executeFunction}
};
