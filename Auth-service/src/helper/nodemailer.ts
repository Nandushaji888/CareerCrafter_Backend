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
        <p style="font-size: 16px;">Thank you for creating Account! To complete the verification process, use the following OTP:</p>
        <p style="font-size: 24px; font-weight: bold; color: #2ecc71;">Your OTP is: ${otp}</p>
        
      </b>
      `,
  });
  if(info){
    console.log("Email has been sent :-", info.response);
    return{status:true,otp:otp}
  }else{
    return{status:false,message:'Error in sending mail'}
  }

};

export{sendOTP}
