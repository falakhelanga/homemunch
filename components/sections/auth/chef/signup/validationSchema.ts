import * as Yup from "yup";

export const chefSignUoValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Please enter your name."),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Please enter your last name."),
  emailAdress: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  phoneNumber: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Please enter your phone number."),
  homeAdress: Yup.string().required("Please enter your home address."),
  password: Yup.string()
    .required("Please enter your password.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
