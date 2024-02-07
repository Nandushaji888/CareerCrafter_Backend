import { schema } from "../database";
const {  User} = schema;


export default {
  userEmailExist: async (email: string) => {
    try {      
      let response = await User.findOne({ email: email });      
      return response;
    } catch (error) {
      console.log("error in authentication.repository userEmailExist", error);
    }
  },

  createUser: async (data: any) => {
    let userData = {
      name: data.name,
      email: data.email,
      phone:data.phone,
      password: data.password,
    };
    let response = await User.create(userData);
    if (response) {
        return {status:true,message:'user created',response}
    }else{
        return {status:false,message:'error in creating user'}
    }
  },
  findUser :async(email:string)=>{
    try {
      const user = await User.findOne({email:email})
      if(user){
        return {status:true,user:user}
      }else{
        return {status:false}
      }
    } catch (error) {
      console.log(error,'Error while finding a user');
      
    }
  }
};