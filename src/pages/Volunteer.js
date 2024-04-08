import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Volunteer = () => {
  const { t } = useTranslation();

  return (
    <div className="container p-5">
      <div className="row">
        {/* Details Column */}
        <div className="col-lg-6">
          <h1 style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('volunteer.subtitle-1')}</h1>
          <p>
          {t('volunteer.content-1')}
          </p>
          <p>
          {t('volunteer.content-2')}
          </p>
          <p>
          {t('volunteer.content-4')}
          </p>
          <p>
          {t('volunteer.content-5')}
          </p>
          <h1 style={{ color: '#58c459', fontWeight: '600', textAlign: 'center', marginTop: '50px' }}>{t('volunteer.subtitle-2')}</h1>
          <div className='d-flex justify-content-center'>
            <Card className='m-3' style={{ maxWidth: '500px' }}>
              <div className="row g-0">
                <div className="col-md-6">
                  <Card.Body className="p-2">
                    <ListGroup variant="flush">
                      <ListGroup.Item>{t('volunteer.options.1')}</ListGroup.Item>
                      <ListGroup.Item>{t('volunteer.options.2')}</ListGroup.Item>
                      <ListGroup.Item>{t('volunteer.options.3')}</ListGroup.Item>
                      <ListGroup.Item>{t('volunteer.options.4')}</ListGroup.Item>
                      <ListGroup.Item>{t('volunteer.options.5')}</ListGroup.Item>
                      <ListGroup.Item>{t('volunteer.options.6')}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </div>
                <div className="col-md-6">
                  <Card.Body className="p-2">
                    <ListGroup variant="flush">
                      <ListGroup.Item>{t('volunteer.options.7')}</ListGroup.Item>
                      <ListGroup.Item>{t('volunteer.options.8')}</ListGroup.Item>
                      <ListGroup.Item>{t('volunteer.options.9')}</ListGroup.Item>
                      <ListGroup.Item>{t('volunteer.options.10')}</ListGroup.Item>
                      <ListGroup.Item>{t('volunteer.options.11')}</ListGroup.Item>
                      <ListGroup.Item>{t('volunteer.options.12')}</ListGroup.Item>
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
          <h1 style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('volunteer.subtitle-3')}</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">{t('volunteer.form.first')}</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">{t('volunteer.form.last')}</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">{t('volunteer.form.email')}</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="telephone" className="form-label">{t('volunteer.form.phone')}</label>
              <input type="tel" className="form-control" id="telephone" />
            </div>
            <div className="mb-3">
              <label htmlFor="volunteeringType" className="form-label">{t('volunteer.form.type')}</label>
              <select class="custom-select border-0 px-4">
                <option value="">{t('volunteer.form.options.select')}</option>
                <option value="1">{t('volunteer.form.options.1')}</option>
                <option value="2">{t('volunteer.form.options.2')}</option>
                <option value="3">{t('volunteer.form.options.3')}</option>
                <option value="4">{t('volunteer.form.options.4')}</option>
                <option value="5">{t('volunteer.form.options.5')}</option>
                <option value="6">{t('volunteer.form.options.6')}</option>
                <option value="7">{t('volunteer.form.options.7')}</option>
                <option value="8">{t('volunteer.form.options.8')}</option>
                <option value="9">{t('volunteer.form.options.9')}</option>
                <option value="10">{t('volunteer.form.options.10')}</option>
                <option value="11">{t('volunteer.form.options.11')}</option>
                <option value="12">{t('volunteer.form.options.12')}
                </option>
                <option value="13">{t('volunteer.form.options.13')}</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">{t('volunteer.form.message')}</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="over18" />
                <label className="form-check-label" htmlFor="over18">
                {t('volunteer.form.age')}
                </label>
              </div>
            </div>
            <button type="submit" className="nav__cta m-auto">
                {t('volunteer.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
