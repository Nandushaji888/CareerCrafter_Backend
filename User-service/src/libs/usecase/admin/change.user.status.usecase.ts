
export const change_userStatus_useCase = (dependencies : any)=> {
    const {repository:{userRepository}} = dependencies
    const executeFunction = async(userId:string,status:boolean)=> {
        const res = await userRepository?.changeStatus(userId,status)
        if(res?.status){
            // console.log('in usecase');
            // console.log(res?.user);
            
            return {status:res?.status,users:res?.users,message:res?.message}
        }else{
            return {status:res?.status,message:res?.message}
        }
    }
    return {executeFunction}
}

