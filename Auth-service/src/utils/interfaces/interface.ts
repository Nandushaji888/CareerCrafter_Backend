export enum AuthType {
    User = 'user',
    Admin = 'admin',
    Recruiter = 'recruiter'
}

export interface IUser extends Document {
    name: string;
    email: string;
    phone: string;
    password: string;
    type: AuthType;
    status: boolean;
}

export interface IRecruiter extends Document {
    name: string;
    email: string;
    phone: string;
    password: string;
    worksAt:string,
    type: AuthType;
    status: boolean;
}

export interface IAdmin extends Document {
    name: string;
    email: string;
    password: string;
    type: AuthType;
}