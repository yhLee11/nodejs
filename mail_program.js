const nodemailer = require('nodemailer')
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "",
    pass: ""
  }
};
const send = async(option)=>{
  nodemailer.createTransport(email).sendMail(option,(error,info)=>{//callback
    if(error){
      console.log(error);
    }else{
      console.log(info);
      return info.response;
    }
  });
};
let email_data={
  from: 'mrncd1@g mail.com',
  to: 'mrncd1@gmail.com',
  subject: "This is nodemailer test",
  text: "hello world"
}
send(email_data);
