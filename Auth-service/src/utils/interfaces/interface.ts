export enum AuthType {
    User = 'user',
    Admin = 'admin',
    Recruiter = 'recruiter'
}

export interface IUser {
    name: string;
    email: string;
    phone: string;
    password: string;
    type: AuthType;
    status: boolean;
}

export interface IRecruiter {
    name: string;
    email: string;
    phone: string;
    password: string;
    worksAt:string,
    type: AuthType;
    status: boolean;
}

export interface IAdmin {
    name: string;
    email: string;
    password: string;
    type: AuthType;
}