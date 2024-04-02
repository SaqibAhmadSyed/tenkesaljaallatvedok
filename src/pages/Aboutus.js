import React from "react";
import Title from "../Components/Title/Title";
import { useTranslation } from "react-i18next";

const Aboutus = () => {

  const { t } = useTranslation();
  
  return (
    <div>

      <div className="container p-5" style={{ padding: "3rem 1rem" }}>
        <div className="pb-lg px-3 px-lg-5 text-center">
          <br />
          <h6 style={{ fontSize: "16px" }}>
            {t('about.text-1')}
            <br />
            <br />
            {t('about.text-2')}
            <br />
            <br /> 
            <div className="text-center">
              <img src="../img/puppy.jpg" alt="" style={{ maxWidth: "100%" }} />
            </div>
            <br />
            {t('about.text-3')}
            <br />
            <br />
            <div className="text-center">
              <img src="../img/shelter.jpg" alt="" style={{ maxWidth: "100%" }} />
              <p>{t('about.img-desc')}</p>
            </div>
            {t('about.text-4')}
            <br />
            <br />
            {t('about.text-5')}
            <br />
            <br />
            {t('about.text-6')}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
