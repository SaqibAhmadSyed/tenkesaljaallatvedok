import * as yup from 'yup';

const nameRules = /^[a-zA-ZÀ-ÿ'\-]+$/;
const phoneRules = /^\+(?:[0-9] ?){6,14}[0-9](?: ?\([0-9]+\))?$/;

export const basicSchema = yup.object().shape({
  firstName: yup.string().matches(nameRules).required("First name required"),
  lastName: yup.string().matches(nameRules).required("Last name required"),
  email: yup.string().email('Please enter a valid email').required("Email required"),
  phoneNumber: yup.string().matches(phoneRules, 'Please enter a valid phone number').required("Phone number required"),
  volunteeringType: yup.string().required('Please select a volunteering type'),
});
