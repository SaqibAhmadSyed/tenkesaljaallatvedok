import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, ListGroup } from 'react-bootstrap';

const DonateToUs = () => {
    const { t } = useTranslation();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className="container mt-5">
                <h1 className='text-center m-4' style={{ color: '#58c459', fontWeight: '600' }}>{t('donate-to-us.subtitle')}</h1>
                <p>{t('donate-to-us.details')}</p>
                <p>See a list of items below for more details:</p>

                {windowWidth >= 1080 ? (
                    <div className="row d-flex justify-content-center flex-wrap">
                        <div className="col-md-9">
                            <div className="row mb-4">
                                <div className="col-sm-4">
                                    <Card>
                                        <Card.Img variant="top" src="../img/dog-food.jpg" style={{ maxHeight: '350px' }} /> {/* Adjust max height */}
                                        <Card.Body>
                                            <Card.Title style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('donate-to-us.food.title')}</Card.Title>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>{t('donate-to-us.food.list-1')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.food.list-2')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.food.list-3')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.food.list-4')}</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-4">
                                    <Card>
                                        <Card.Img variant="top" src="../img/accessories-dog.jpg" style={{ maxHeight: '350px' }} /> {/* Adjust max height */}
                                        <Card.Body>
                                            <Card.Title style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('donate-to-us.accessories.title')}</Card.Title>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>{t('donate-to-us.accessories.list-1')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.accessories.list-2')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.accessories.list-3')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.accessories.list-4')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.accessories.list-5')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.accessories.list-6')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.accessories.list-7')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.accessories.list-8')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.accessories.list-9')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.accessories.list-10')}</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-4">
                                    <Card>
                                        <Card.Img variant="top" src="../img/medical-device.jpg" style={{ maxHeight: '350px' }} /> {/* Adjust max height */}
                                        <Card.Body>
                                            <Card.Title style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('donate-to-us.medicines.title')}</Card.Title>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>{t('donate-to-us.medicines.list-1')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.medicines.list-2')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.medicines.list-3')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.medicines.list-4')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.medicines.list-5')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.medicines.list-6')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.medicines.list-7')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.medicines.list-8')}</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-sm-12">
                                    <Card className="">
                                        <Card.Img variant="top" src="../img/clean-tool.jpg" style={{ maxHeight: '350px' }} />
                                        <Card.Body>
                                            <Card.Title style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('donate-to-us.cleaning.title')}</Card.Title>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>{t('donate-to-us.cleaning.list-1')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.cleaning.list-2')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.cleaning.list-3')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.cleaning.list-4')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.cleaning.list-5')}</ListGroup.Item>
                                                <ListGroup.Item>{t('donate-to-us.cleaning.list-6')}</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                    {/* First column */}
                    <div className="col-md-6">
                        <div className="row mb-4">
                            <div className="col-sm-12 mb-3">
                                <Card>
                                    <Card.Img variant="top" src="../img/dog-food.jpg" style={{ maxHeight: '350px' }} /> {/* Adjust max height */}
                                    <Card.Body>
                                        <Card.Title style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('donate-to-us.food.title')}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>{t('donate-to-us.food.list-1')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.food.list-2')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.food.list-3')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.food.list-4')}</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-12">
                                <Card>
                                    <Card.Img variant="top" src="../img/medical-device.jpg" style={{ maxHeight: '350px' }} /> {/* Adjust max height */}
                                    <Card.Body>
                                        <Card.Title style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('donate-to-us.medicines.title')}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>{t('donate-to-us.medicines.list-1')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.medicines.list-2')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.medicines.list-3')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.medicines.list-4')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.medicines.list-5')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.medicines.list-6')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.medicines.list-7')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.medicines.list-8')}</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row mb-4">
                            <div className="col-sm-12 mb-3">
                                <Card>
                                    <Card.Img variant="top" src="../img/accessories-dog.jpg" style={{ maxHeight: '350px' }} /> {/* Adjust max height */}
                                    <Card.Body>
                                        <Card.Title style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('donate-to-us.accessories.title')}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>{t('donate-to-us.accessories.list-1')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.accessories.list-2')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.accessories.list-3')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.accessories.list-4')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.accessories.list-5')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.accessories.list-6')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.accessories.list-7')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.accessories.list-8')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.accessories.list-9')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.accessories.list-10')}</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-12">
                                <Card>
                                    <Card.Img variant="top" src="../img/clean-tool.jpg" style={{ maxHeight: '350px' }} /> {/* Adjust max height */}
                                    <Card.Body>
                                        <Card.Title style={{ color: '#58c459', fontWeight: '600', textAlign: 'center' }}>{t('donate-to-us.cleaning.title')}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>{t('donate-to-us.cleaning.list-1')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.cleaning.list-2')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.cleaning.list-3')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.cleaning.list-4')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.cleaning.list-5')}</ListGroup.Item>
                                            <ListGroup.Item>{t('donate-to-us.cleaning.list-6')}</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default DonateToUs;
