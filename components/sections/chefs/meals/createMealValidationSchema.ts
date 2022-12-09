import * as Yup from "yup";

export const createMealValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Your Dish name is too Short")
    .required("Please enter your dish name."),
  price: Yup.number()
    .min(1, "Your dish price must be greater than 0")
    .required("Please enter your dish price"),
  description: Yup.string().required("Please please describe your dish."),
  qty: Yup.number()
    .min(1, "Your dish quantity must be greater than 0")
    .required("Please enter your dish quantity"),
  availability: Yup.array()
    .min(1, "Please select the availability of your dish")
    .required("required"),
  dishImage: Yup.string()
    .min(2, "Your Dish name is too Short")
    .required("Please upload at least one image of your dish."),
  cuisineType: Yup.string().required("Please select type of cuisine."),
  dishType: Yup.string().required("Please select your dish type."),
});
