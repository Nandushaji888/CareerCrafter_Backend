import { ObjectId } from 'mongoose';


export interface IUser {
    _id:string,
    name: string;
    email: string;
    phone: string;
    password: string;
    type: AuthType;
    status: boolean;
    isGoogle:boolean;
    dateOfBirth:string;
    appliedJobs:ObjectId;
    savedJobs:ObjectId;
    aboutYou:string;
    resume:string;
    qualification:string;
    skills:string;
    profilePic:string;
    createdOn:Date;
    editedOn:Date;
    currentLoaction:string;
    readyToReallocate:boolean;
    secondarySkills:string;
}

export enum AuthType {
    User = 'user',
    Admin = 'admin',
    Recruiter = 'recruiter'
}

export enum employmentType{
    Fulltime='fulltime',
    PartTime='parttime',
    Internship='internship'
}

export interface IPost {
    _id:string;
    postName?: string;
    company?: string;
    recruitingPlace?:string;
    createdAt?:Date;
    employmentType?:employmentType;
    isPremium?:boolean;
    isListed?:boolean;
    // category?:ObjectId;

}