import * as yup from 'yup';

const nameRules = /^[a-zA-ZÀ-ÿ'\-]+$/;
const phoneRules = /^\+(?:[0-9] ?){6,14}[0-9](?: ?\([0-9]+\))?$/;

// Define the basic schema
export const basicSchema = yup.object().shape({
  firstName: yup.string().matches(nameRules, "Invalid characters/Érvénytelen karakterek").required("First name required/Keresztnév kötelező"),
  lastName: yup.string().matches(nameRules, "Invalid characters/Érvénytelen karakterek").required("Last name required/Vezetéknév kötelező"),
  email: yup.string().email('Email not valid/Email nem érvényes').required("Email required/Email szükséges"),
  phoneNumber: yup.string().matches(phoneRules, 'Phone number not valid/Telefonszám nem érvényes').required("Phone number required/Szükséges telefonszám"),
});

// Extend the schema if the formType is not 'Contact'
export const extendedSchema = formType => {
  let schema = basicSchema;
  if (formType === 'volunteer') {
    schema = schema.shape({
      volunteeringType: yup.string().required('Select a volunteering type/Válassza ki az önkéntesség típusát'),
    });
  }
  return schema;
};
