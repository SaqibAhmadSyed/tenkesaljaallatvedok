// CustomForm component

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { basicSchema } from '../schema';

const CustomForm = ({
  firstNameLabel,
  lastNameLabel,
  emailLabel,
  phoneLabel,
  typeLabel,
  messageLabel,
  ageLabel,
  submitLabel
}) => {
  const { t } = useTranslation();

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        volunteeringType: '',
        message: '',
        over18: false
      }}
      validationSchema={basicSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div className={`mb-3 ${errors.firstName && touched.firstName ? 'is-invalid' : ''}`}>
            <label htmlFor="firstName" className="form-label">{t(firstNameLabel)}</label>
            <Field
              name="firstName"
              type="text"
              className={`form-control`}
              id="firstName"
            />
            <ErrorMessage name="firstName" component="p" className='text-danger' />
          </div>
          <div className={`mb-3 ${errors.lastName && touched.lastName ? 'is-invalid' : ''}`}>
            <label htmlFor="lastName" className="form-label">{t(lastNameLabel)}</label>
            <Field
              name="lastName"
              type="text"
              className={`form-control`}
              id="lastName"
            />
            <ErrorMessage name="lastName" component="p" className='text-danger' />
          </div>
          <div className={`mb-3 ${errors.email && touched.email ? 'is-invalid' : ''}`}>
            <label htmlFor="email" className="form-label">{t(emailLabel)}</label>
            <Field
              name="email"
              type="email"
              className={`form-control`}
              id="email"
              placeholder='example@email.com'
            />
            <ErrorMessage name="email" component="p" className='text-danger' />
          </div>
          <div className={`mb-3 ${errors.phoneNumber && touched.phoneNumber ? 'is-invalid' : ''}`}>
            <label htmlFor="phoneNumber" className="form-label">{t(phoneLabel)}</label>
            <Field
              name="phoneNumber"
              type="tel"
              className={`form-control`}
              id="phoneNumber"
              placeholder="+36 123456789"
            />
            <ErrorMessage name="phoneNumber" component="p" className='text-danger' />
          </div>
          <div className={`mb-3 ${errors.volunteeringType && touched.volunteeringType ? 'is-invalid' : 'text-danger'}`}>
            <label htmlFor="volunteeringType" className="form-label">{t(typeLabel)}</label>
            <Field
              as="select"
              className={`form-control`}
              name="volunteeringType"
              id="volunteeringType"
            >
              <option value="">{t('form.options.select')}</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((option) => (
                <option key={option} value={option}>{t(`form.options.${option}`)}</option>
              ))}
            </Field>
            <ErrorMessage name="volunteeringType" component="p" className='text-danger' />
          </div>
          <div className={`mb-3 ${errors.message && touched.message ? 'is-invalid' : ''}`}>
            <label htmlFor="message" className="form-label">{t(messageLabel)}</label>
            <Field
              name="message"
              as="textarea"
              className={`form-control`}
              id="message"
              rows="3"
            />
          </div>
          <div className={`mb-3 ${errors.over18 && touched.over18 ? 'is-invalid' : ''}`}>
            <div className="form-check">
              <Field
                className="form-check-input"
                type="checkbox"
                id="over18"
                name="over18"
              />
              <label className="form-check-label" htmlFor="over18">
                {t(ageLabel)}
              </label>
            </div>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className={`nav__cta m-auto ${isSubmitting ? 'disabled' : ''}`}
            style={{ opacity: isSubmitting ? 0.5 : 1 }}
          >
            {t(submitLabel)}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CustomForm;
