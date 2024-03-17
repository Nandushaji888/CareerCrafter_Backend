import { ObjectId } from "mongoose";
import { schema } from "../database";

const { ChatParticipants, Conversation, Message } = schema;

export default {
  sendMessage: async (
    senderId: ObjectId,
    receiverId: ObjectId,
    message: string
  ) => {
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save()
    // await newMessage.save()
    const result = await Promise.all([conversation.save(), newMessage.save()]);

    if(result){
        return {status:true,newMessage}
    }else{
        return {status:true,message:'Error in sending message'}

    }
  },
};
