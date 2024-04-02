import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import { Card, ListGroup } from 'react-bootstrap';

const Donate = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="container p-5">
                <h1 className='text-center mb-3' style={{ color: '#58c459', fontWeight: '600' }}>{t("donate.subtitle-1")}</h1>
                <h4 className='text-center mb-5'>{t("donate.subtitle-2")}</h4>
                <div className='d-flex justify-content-center flex-wrap'>
                    <div className="col-lg-4 mb-4">
                        <Card className="shadow">
                            <Card.Img variant="top" src="../img/donate-1.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t("donate.list-title-1")}</Card.Title>
                                <ListGroup variant="flush">
                                    <Card.Subtitle className="mt-2 text-muted">{t("donate.content-1")}</Card.Subtitle>
                                    <ListGroup.Item>{t("donate.content-2")}</ListGroup.Item>
                                    <ListGroup.Item>{t("donate.content-3")}</ListGroup.Item>
                                    <Card.Subtitle className="mt-3 text-muted">{t("donate.content-4")}</Card.Subtitle>
                                    <ListGroup.Item>{t("donate.content-5")}</ListGroup.Item>
                                    <ListGroup.Item>{t("donate.content-6")}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-4 mb-4">
                        <Card className="shadow">
                            <Card.Img variant="top" src="../img/donate-2.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t("donate.list-title-2")}</Card.Title>
                                <Card.Text>
                                    {t("donate.content-7")}
                                    <br />
                                    <NavLink
                                        to="/donating-items-to-us"
                                        className=""
                                        style={{ color: '#58c459', textDecoration: 'none' }}
                                        onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                                    >
                                        {t("donate.content-8")}&nbsp;
                                    </NavLink>
                                    {t("donate.content-9")}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donate;
