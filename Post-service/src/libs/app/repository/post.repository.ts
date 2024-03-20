import {
  IPost,
  WorkArrangementType,
  employmentType,
} from "../../../utils/interfaces/interfaces";
import { schema } from "../database";
const { Category, Post } = schema;

export default {
  createPost: async (data: IPost) => {
    try {
      const postData = {
        postName: data?.postName,
        company: data?.company,
        responsibilities: data?.responsibilities,
        jobDescription: data?.jobDescription,
        skills: data?.skills,
        qualification: data?.qualification,
        salary: data?.salary,
        category: data?.category,
        questions: data?.questions,
        recruiterEmail: data?.recruiterEmail,
        recruitingPlace: data?.recruitingPlace,
        closingDate: data?.closingDate,
        workArrangementType: data?.workArrangementType,
        employmentType: data.employmentType,
        isPremium: data.isPremium,
        isListed: data.isListed,
        recruiterId: data?.recruiterId,
        isRejected: data?.isRejected,
      };

      let response = await Post.create(postData);
      if (response) {
        return { status: true, message: "post created", response };
      } else {
        return { status: false, message: "error in creating post" };
      }
    } catch (error) {
      console.log("error in post.repository create post", error);
    }
  },
  findJobPost: async (id: string) => {
    try {
      const jobDetails = await Post.findById(id);
      if (jobDetails) {
        return { status: true, jobDetails };
      } else {
        return { status: false, message: "Error in fetching the job details" };
      }
    } catch (error) {
      console.log("error in finding job in post service", error);
    }
  },
  pendingPostCount: async () => {
    try {
      const count = await Post.find({
        $and: [{ isListed: false, isRejected: false }],
      });
      return { status: true, count };
    } catch (error) {
      console.log("error in finding pending post", error);
    }
  },
  changeStatus: async (id: string, status: string) => {
    try {
      let state;
      if (status === "List") {
        state = true;

        const response = await Post.updateOne(
          { _id: id },
          { $set: { isListed: state, isRejected: false } }
        );

        if (response) {
          const postData = await Post.findById(id);
          return { status: true, postData, message: "Job post has accepted" };
        } else {
          return { status: false, message: "Error in changing status" };
        }
      } else {
        const response = await Post.findByIdAndUpdate(id, { isRejected: true });

        if (response) {
          return { status: true, message: "Job has been rejected" };
        } else {
          return { status: false, message: "Error in deleting job data" };
        }
      }
    } catch (err) {
      console.log("Error in changing job status", err);
      return {
        status: false,
        message: "Error occurred while changing job status",
      };
    }
  },

  getAllPosts: async (
    page: number,
    limit: number,
    search: string,
    location: string,
    qualification: string,
    skills: string,
    workArrangementType: WorkArrangementType,
    employmentType: employmentType
  ) => {
    try {
      page = Math.max(page, 1);
      const searchRegex = new RegExp(search, "i");
      const locationRegex = new RegExp(location, "i");
      const qualificationRegex = new RegExp(qualification, "i");
      const skillsRegex = new RegExp(skills, "i");
  
      const postDatas = await Post.find({
        $and: [
          { isListed: true },
          {
            $or: [
              { postName: searchRegex },
              { company: searchRegex },
            ],
          },
          { recruitingPlace: locationRegex },
          { qualification: qualificationRegex },
          { skills: skillsRegex },
          workArrangementType ? { workArrangementType } : {},
          employmentType ? { employmentType } : {},
        ],
      })
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);
  
      const totalJobs = await Post.countDocuments({
        $and: [
          {
            $or: [
              { postName: searchRegex },
              { company: searchRegex },
              { recruitingPlace: searchRegex },
            ],
          },
          { qualification: qualificationRegex },
          { skills: skillsRegex },
          workArrangementType ? { workArrangementType } : {},
          employmentType ? { employmentType } : {},
          { isListed: true },
        ],
      });
  
      return {
        status: true,
        postDatas,
        page,
        totalPages: Math.ceil(totalJobs / limit),
      };
    } catch (error) {
      return {
        status: false,
        message: "Error in getting post datas: " , error,
      };
    }
  },
  
  recruiterListJobs: async (id: string) => {
    try {
      const response = await Post.find({ recruiterId: id }).sort({createdAt: -1 })
      if (response) {       
        return { status: true, jobList: response };
      } else {
        return { status: false, message: "Unable to List Jobs at the moment" };
      }
    } catch (error) {
      console.log("error in recruiterList Jobs in post repository", error);
    }
  },
};
