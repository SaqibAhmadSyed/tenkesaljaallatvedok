import React, { useState, useCallback, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { extendedSchema } from '../schema';
import { Modal } from 'react-bootstrap';
import CustomModal from './CustomModal';

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
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [captchaExpired, setCaptchaExpired] = useState(false);
  const [captchaCompleted, setCaptchaCompleted] = useState(false);

  const onChange = useCallback(() => {
    setCaptchaExpired(false);
    setCaptchaCompleted(true);
  }, []);

  const setRecaptchaCookie = () => {
    document.cookie = "_GRECAPTCHA=value; Secure; HttpOnly; SameSite=None; Partitioned";
  };

  useEffect(() => {
    setRecaptchaCookie(); // Call the function when the component mounts
  }, []); // Ensure this effect runs only once when the component mounts

  const onSubmit = async (values, actions, event) => {
    try {
      // Prevent form submission if event is defined
      event?.preventDefault();
  
      const isFormValid = await actions.validateForm();

      if (!isFormValid || !captchaCompleted) {
        if (!captchaCompleted) {
        setTitle(t('form.title-error-1'));
        setMessage(t('form.error-1'));
        setShowModal(true);
        }
        return;
      }
      // Check if reCAPTCHA has expired
      if (captchaExpired) {
        setTitle(t('form.title-error-1'));
        setMessage(t('form.error-2'));
        setShowModal(true);
        return;
      }
  
      let subject = `${formType} Form`;
      let templateId = '';
  
      if (formType === 'contact') {
        templateId = 'template_0s3ny78'; // Contact form template ID
      } else if (formType === 'volunteer') {
        templateId = 'template_7v2h6z8'; // Volunteer form template ID
      }
  
      const emailValues = { ...values, subject: subject, formType: formType };
      await emailjs.send('service_omqyjro', templateId, emailValues, '-eacAiqGiTr84k5tV');
  
      actions.resetForm();
      setTitle(t('form.title-success-1'));
      setMessage(t('form.success-1'));
      setShowModal(true);
    } catch (error) {
      setTitle(t('form.title-error-2'));
      setMessage(t('form.error-3'));
      setShowModal(true);
    }
  };
  

  return (
    <>
      {showModal && (
             <CustomModal
             showModal={showModal}
             setShowModal={setShowModal}
             setCaptchaCompleted={setCaptchaExpired}
             title={title}
             message={message}
           />
      )}
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
                onExpired={() => setCaptchaExpired(true)}
              />
            </div>
            {/* Submit button */}
            <button
  type="submit"
  onClick={(event) => {
    if (captchaExpired) {
      event.preventDefault(); // Prevent form submission if captcha is expired
      setTitle(t('form.title-error-1'));
      setMessage(t('form.error-1'));
      setShowModal(true);
    }
  }}
  className={`nav__cta m-auto ${isSubmitting || !captchaExpired ? 'disabled' : ''}`}
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
