import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(req, res) {
  const body = await req.json();

  const { name, email, message } = body;
  console.log(email, name, message);

  if (!name) {
    return new NextResponse("name is require", { status: 4001 });
  }
  if (!email) {
    return new NextResponse("email is require", { status: 4001 });
  }
  if (!message) {
    return new NextResponse("message is require", { status: 4001 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_CLIENT_EMAIL,
        pass: process.env.GOOGLE_CLIENT_PASSWORD,
      },
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: email, // sender address
        to: process.env.GOOGLE_CLIENT_EMAIL, // list of receivers
        replyTo: email,
        subject: `MESSAGE FROM ${name}`, // Subject line

        html: `
          <div>
          <h2>This message is from ${name} with email Address ${email}</h2>
          <h3>${message}</h3> 
          </div>
        `, // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    }

    main().catch(console.error);

    return new NextResponse("message sent successfully", { status: 200 });
  } catch (error) {
    console.log(error);

    return new NextResponse("nodemailer Api error", { status: 500 });
  }
}
