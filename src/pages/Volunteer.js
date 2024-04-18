import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, ListGroup } from 'react-bootstrap';
import { FormikProvider } from 'formik';
import CustomForm from '../Components/CustomForm';

const Volunteer = () => {
  const { t } = useTranslation();

  return (
    <div className="container p-5">
      <div className="row">
        {/* Details Column */}
        <div className="col-lg-6">
          <h1 style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>
            {t('volunteer.subtitle-1')}
          </h1>
          <p>{t('volunteer.content-1')}</p>
          <p>{t('volunteer.content-2')}</p>
          <p>{t('volunteer.content-4')}</p>
          <p>{t('volunteer.content-5')}</p>
          <h1 style={{ color: '#58c459', fontWeight: '600', textAlign: 'center', marginTop: '50px' }}>
            {t('volunteer.subtitle-2')}
          </h1>
          <div className='d-flex justify-content-center'>
            <Card className='m-3' style={{ maxWidth: '500px' }}>
              <div className="row g-0">
                <div className="col-md-6">
                  <Card.Body className="p-2">
                    <ListGroup variant="flush">
                      {[1, 2, 3, 4, 5, 6].map((option) => (
                        <ListGroup.Item key={option}>{t(`volunteer.options.${option}`)}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </div>
                <div className="col-md-6">
                  <Card.Body className="p-2">
                    <ListGroup variant="flush">
                      {[7, 8, 9, 10, 11, 12].map((option) => (
                        <ListGroup.Item key={option}>{t(`volunteer.options.${option}`)}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className='col-2'></div>
        {/* Form Column */}
        <div className="col-lg-4">
          <h1 style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>
            {t('volunteer.subtitle-3')}
          </h1>
          <FormikProvider value={null}>
            <CustomForm
              firstNameLabel="form.first"
              lastNameLabel="form.last"
              emailLabel="form.email"
              phoneLabel="form.phone"
              typeLabel="form.type"
              messageLabel="form.message"
              ageLabel="form.age"
              submitLabel="form.submit"
              formType="Volunteer"
            />
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
