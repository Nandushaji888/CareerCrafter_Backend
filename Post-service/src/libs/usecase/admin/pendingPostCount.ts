
export const pending_post_count_usecase = (dependencies:any)=> {
    const {repository:{postRepository}} = dependencies

    const executeFunction = async()=> {
        const response = await postRepository?.pendingPostCount()

        if(response?.status){
            return {status:response?.status,count:response?.count}
        }else{
            return {status:response?.status,message:response?.message}

        }
    }
    return {executeFunction}
}