import { IUser } from "../../../utils/interface/interface";
import { Schema } from "../databse";

const { User } = Schema;

export default {
  userEmailExist: async (email: string) => {
    try {
      const response = await User.findOne({ email: email });
      return response;
    } catch (error) {
      console.log("error in authentication.repository userEmailExist", error);
    }
  },
  userPhoneExist : async(phone:string)=> {
    try {
      const response = await User.findOne({phone:phone})
      return response;
    } catch (error) {
      console.log("error in authentication.repository userEmailExist", error);

    }
  },
  storeUser: async (data: IUser) => {
    console.log('data');
    console.log(data);
    

    const userData = {
        _id:data?._id ||"",
      name: data?.name||"" ,
      email: data?.email||"",
      phone:data?.phone||"",
      isGoogle:data?.isGoogle?true:false,
      type:data?.type||"",
      status:data?.status||"",
      aboutYou:data?.aboutYou||"",
      dateOfBirth:data?.dateOfBirth ||"",
      appliedJobs:data?.appliedJobs||[],
      savedJobs:data?.savedJobs||[],
      createdOn:data?.createdOn||Date.now(),
      editedOn:Date.now(),
      resume:data?.resume||"",
      qualification:data?.qualification||'',
      skills:data?.skills||'',
      profilePic:data?.profilePic||"User-Profile-PNG-Download-Image.png"
      
    };
    // console.log('userData');
    // console.log(userData);
    
    const response = await User.create(userData);
    console.log(response);
    
    if (response) {
        return {status:true,message:'user created',response}
    }else{
        return {status:false,message:'error in creating user'}
    }
  },

  updateUser:async(data:IUser)=> {
    // console.log('data');
    // console.log(data);
    
    const response= await User.updateOne({email:data?.email},{$set:{...data}})
    // console.log(response);
    
    if(response){
      const user = await User.findOne({email:data?.email})
      return{status:true,user:user,message:"user updated "}
    }else{
      return {status:false,message:"error in updating user"}
    }
  },
  findUser:async(id:string)=> {
    // console.log('id');
    // console.log(id);
    
    const user = await User.findById(id)
    // console.log('user');
    // console.log(user);
    
    if(user){
      return {status:true,user}
    }else{
      return {status:false,message:"Error in getting user data"}
    }
  },
  getAllUsers:async()=>{
    const users = await User.find({}).sort({createdOn:-1})
    if(users){
      return {status:true, users}
    }else{
      return {status:false,message:'Error in fetching all users'}
    }
  },
    changeStatus: async (id:string,status:string) => {

    let state = true;
    if (status == "Active") state = false;

    try {
     const response= await User.findOneAndUpdate({ _id: id }, { status: state });
 console.log(response);
     
      const users = await User.find({}).sort({createdOn:-1})
      if(response){

        return {status:true,users:users,message:'User status updated'}
      }else{
        return { status: false, message:'Error in changing user status'}
      }

    } catch (err) {
        console.log('Error in changing user status',err);
    }
  },
  

};
