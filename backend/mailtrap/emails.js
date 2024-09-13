import { mailtrapClient, sender } from "./mailtrap.config.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "email Verification",
    });
    console.log("email sent successfully", response);
  } catch (error) {
    console.error(`error sending verification`, error);
    throw new Error(`error sending verification email:${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "bddb4e29-cfdb-4ee1-a07c-bd38e361d112",
      template_variables: {
        company_info_name: "auth company",
        name: name,
        company_info_address: "cairo Egypt",
        company_info_city: "qena",
        company_info_zip_code: "4857",
        company_info_country: "egypt",
      },
    });
    console.log("welcom email sent successfully", response);
  } catch (error) {
    console.error(`error sending welcome email `, error);
    throw new Error(error);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "RESET your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "password Reset",
    });
  } catch (error) {
    console.log(`Error sending password reset email ${error}`);
    throw new Error(`Error sending password reset email ${error}`);
  }
};

export const sendResetSuccessEmail = (email) => {
  const recipient = [{ email }];
  try {
    const response = mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Rest Successfull",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
    console.log("password reset email sent successfully", response);
  } catch (error) {
    console.log("error from send successfull email reset");
  }
};
