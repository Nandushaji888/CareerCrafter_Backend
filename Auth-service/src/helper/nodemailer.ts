import nodemailer from "nodemailer";

const generateOTP = () => {
  return Math.floor(Math.random() * 900000 + 10000).toString();
};

const sendOTP = async (email: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const otp = generateOTP();
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Verify Your Account ✔",
    text: `Your OTP is ${otp}`,
    html: `<b>
        <h2 style="color: #3498db;">Verify Your Account</h2>
        <p style="font-size: 16px;">Thank you for creating an account! To complete the verification process, use the following OTP:</p>
        <p style="font-size: 24px; font-weight: bold; color: #2ecc71;">Your OTP is: ${otp}</p>
        <p style="font-size: 14px; margin-top: 20px;">Click the button below to verify your email:</p>
        <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #2ecc71; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 10px;">Verify Email</a>
      </b>
      `,
  });
  if(info){
    return{status:true,otp:otp}
  }else{
    return{status:false,message:'Error in sending mail'}
  }

};

export{sendOTP}
