import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email, otp) {
  await resend.emails.send({
    from: "BuyMeABeer <noreply@yourdomain.com>",
    to: email,
    subject: "Verify your BuyMeABeer account",

    html: `
      <div>
        <h2>Verify your email</h2>

        <p>Your verification code is:</p>

        <h1>${otp}</h1>

        <p>This code expires in 5 minutes.</p>
      </div>
    `,
  });
}