import * as Yup from "yup";

export const chefSignUoValidationSchema = Yup.object().shape({
  emailAdress: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),

  password: Yup.string()
    .required("Please enter your password.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});
