import mongoose, { Schema, Document } from 'mongoose';
import {IUser,UserType} from '../../../../utils/interfaces/interface'


const userSchema: Schema<IUser> = new Schema<IUser>({
    name: String,
    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Please provide a unique Phone number"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false
    },
    type: {
        type: String,
        enum: Object.values(UserType),
        default: UserType.User
    },
    status: {
        type: Boolean,
        default: true
    }
});

const User = mongoose.model<IUser>("User", userSchema);
export { User, UserType };
