const { Resend } = require("resend");
const path = require("path");
const fs = require("fs");

const sendContactMessage = async (email) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const htmlPath = path.join(__dirname, "..", "public", "contactEmail.html");
    const emailHtml = fs.readFileSync(htmlPath, "utf-8");

    const data = await resend.emails.send({
      from: process.env.RESEND_EMAIL,
      to: email,
      subject: "Gracias por tu mensaje",
      html: emailHtml,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendContactMessage;
