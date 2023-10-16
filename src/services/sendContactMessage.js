const { Resend } = require("resend");

const sendContactMessage = async (email) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: process.env.RESEND_EMAIL,
      to: email,
      subject: "Gracias por tu mensaje de contacto",
      html: "<h2>Gracias por tu mensaje, pronto recibirás más información.</h2>",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendContactMessage;
