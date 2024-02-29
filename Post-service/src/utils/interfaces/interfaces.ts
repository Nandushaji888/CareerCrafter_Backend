import { ObjectId } from 'mongoose';


export enum WorkArrangementType{
    Remote='remote',
    Hybrid='hybrid',
    Office='office'
}

export enum employmentType{
    Fulltime='fulltime',
    PartTime='parttime',
    Internship='internship'
}

export interface IPost {
    postName?: string;
    company?: string;
    responsibilities?:string,
    jobDescription?:string,
    skillsRequired?:string,
    qualification?:string,
    salary?:string,
    category?:ObjectId,
    questions?:IQuestion[],
    skills?:string,
    recruiterEmail?:string,
    recruitingPlace?:string,
    createdAt?:Date,
    closingDate?:Date,
    workArrangementType?:WorkArrangementType,
    employmentType?:employmentType,
    isPremium?:boolean,
    isListed?:boolean
  
}

export interface ICategory{
    categoryName:string,
    categoryDescription:string,
    isListed:boolean,
    createdAt:Date,
}

export interface IQuestion {
    question: string;
    answer: string;
}

