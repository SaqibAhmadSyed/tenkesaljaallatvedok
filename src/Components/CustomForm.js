import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { extendedSchema } from '../schema';
import { Modal } from 'react-bootstrap';

const CustomForm = ({
  firstNameLabel,
  lastNameLabel,
  emailLabel,
  phoneLabel,
  typeLabel,
  messageLabel,
  ageLabel,
  submitLabel,
  formType
}) => {
  const { t } = useTranslation();
  const [captchaCompleted, setCaptchaCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onChange = () => {
    setCaptchaCompleted(true);
  };

  const onSubmit = async (values, actions) => {
    try {
      const isFormValid = await actions.validateForm(); // Validate all form fields
      
      let subject = `${formType} Form`;
      let templateId = '';

      if (formType === 'contact') {
        templateId = 'template_0s3ny78'; // Contact form template ID
      } else if (formType === 'volunteer') {
        templateId = 'template_7v2h6z8'; // Volunteer form template ID
      }
  
      const emailValues = { ...values, subject: subject, formType: formType };
      await emailjs.send('service_omqyjro', templateId, emailValues, '-eacAiqGiTr84k5tV');
  
      if (!isFormValid || !captchaCompleted) {
        if (!captchaCompleted) {
          console.log('Captcha not completed');
        }
        return;
      }
  
      actions.resetForm();
      setShowModal(true); // Show modal on successful form submission
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }
  };
  
  return (
    <>
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      keyboard={false}
      centered // Center the modal vertically and horizontally
    >
      <Modal.Header closeButton>
        <Modal.Title>Form submitted successfully!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your form has been submitted successfully.
      </Modal.Body>
      <Modal.Footer>
        <button className="nav__cta" onClick={() => setShowModal(false)}> {/* Change button color */}
          Close
        </button>
      </Modal.Footer>
    </Modal>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        volunteeringType: '', // Include the volunteeringType field in initialValues
        message: '',
        formType: ''
      }}
      validationSchema={extendedSchema(formType)} // Use extendedSchema here
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">{t(firstNameLabel)}</label>
          <Field
            name="firstName"
            type="text"
            className={`form-control`}
            id="firstName"
          />
          <ErrorMessage name="firstName" component="p" className='text-danger' />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">{t(lastNameLabel)}</label>
          <Field
            name="lastName"
            type="text"
            className={`form-control`}
            id="lastName"
          />
          <ErrorMessage name="lastName" component="p" className='text-danger' />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">{t(emailLabel)}</label>
          <Field
            name="email"
            type="email"
            className={`form-control`}
            id="email"
            placeholder="example@email.com"
          />
          <ErrorMessage name="email" component="p" className='text-danger' />
        </div>
        <div className="mb-3">
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
        {typeLabel && formType !== 'customer' && formType !== 'contact' && (
          <div className="mb-3">
            <label htmlFor="volunteeringType" className="form-label">{t(typeLabel)}</label>
            <Field
              as="select"
              className={`form-control`}
              name="volunteeringType"
              id="volunteeringType"
            >
              <option value="">{t('form.options.select')}</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((option) => (
                <option key={option} value={t(`form.options.${option}`)}>
                  {t(`form.options.${option}`)}
                </option>
              ))}
            </Field>
            <ErrorMessage name="volunteeringType" component="p" className='text-danger' />
          </div>
        )}
        {ageLabel && formType !== 'contact' && (
          <div className="mb-3">
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
        )}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">{t(messageLabel)}</label>
          <Field
            name="message"
            as="textarea"
            className={`form-control`}
            id="message"
            rows="3"
          />
        </div>
        <div className="mb-3">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              onChange={onChange}
            />
          </div>
          {/* Submit button */}
          <button
            disabled={isSubmitting || !captchaCompleted} // Disable button if submitting or reCAPTCHA not completed
            type="submit"
            className={`nav__cta m-auto ${isSubmitting ? 'disabled' : ''}`}
            style={{ opacity: isSubmitting ? 0.5 : 1 }}
          >
            {t(submitLabel)}
          </button>
      </Form>
      )}
    </Formik>
    </>
  );
}

export default CustomForm;
