export enum UserType {
    User = 'user',
    Admin = 'admin',
    Recruiter = 'recruiter'
}

export interface IUser extends Document {
    name: string;
    email: string;
    phone: string;
    password: string;
    type: UserType;
    status: boolean;
}