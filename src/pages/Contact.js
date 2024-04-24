import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomForm from '../Components/CustomForm';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-4 mb-5">
          <h1 style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('contact.subtitle-1')}</h1>
          <CustomForm
            firstNameLabel="form.first"
            lastNameLabel="form.last"
            emailLabel="form.email"
            phoneLabel="form.phone"
            messageLabel="form.message"
            submitLabel="form.submit"
            formType="contact"
          />
        </div>
        <div className='col-2'></div>
        <div className='col-lg-6'>
          <h1 className="mb-5" style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('contact.subtitle-2')}</h1>
          <div className="d-flex justify-content-center">
            <iframe
            title="Google Maps Embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.7021017827205!2d18.291157676668515!3d45.83724600847061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475d37a617a68e3b%3A0xdd78532a2bbc0e67!2zU2lrbMOzcywgUG9zdGFzesOhbGzDoXMsIDc4MDAgSHVuZ2FyeQ!5e0!3m2!1sen!2sca!4v1713897659791!5m2!1sen!2sca"
              width="600"
              height="450"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Contact;
