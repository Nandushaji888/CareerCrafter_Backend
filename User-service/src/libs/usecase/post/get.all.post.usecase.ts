
export const get_All_Posts_useCase=(dependencies:any)=> {
    const {repository:{postRepository}}=dependencies

    const executeFunction =async()=> {
        const response = await postRepository?.getAllPosts()
        console.log(response);

        if(response.status){
            return {status:response?.status, postDatas:response?.postDatas}
        }else{
            return {status:response?.status,message:response?.message}
        }
        
    }
    return {executeFunction}
}