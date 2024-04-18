import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomForm from '../Components/CustomForm';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-4">
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
        <div className='col-lg-4'></div>
      </div>
    </div>
  );
}

export default Contact;