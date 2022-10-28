import { useState } from "react";
import Image from "next/image";

import urlLogo from "images/logo.png";
import urlIconShield from "images/icon-shield.svg";
import urlIconMobile from "images/icon-mobile.svg";
import urlIconMoney from "images/icon-money.svg";
import urlIconClinic from "images/icon-clinic.svg";
import urlIconBack from "images/icon-back.svg";
import urlIconBackDisabled from "images/icon-back-disabled.svg";
import urlIconNext from "images/icon-next.svg";
import urlIconNextDisabled from "images/icon-next-disabled.svg";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const goNextSlide = () => {
    if (currentSlide < 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goPreviousSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <div className="mt-20">
        <Image src={urlLogo} alt="Wayfair" className="logo-image" width={120} height={36} />
      </div>

      <div className="hero-section__info">
        <h1 className="hero-section__info__title">
          <span className="light">Seguro de</span>
          <br /> Salud
        </h1>
        <ul className="hero-section__info__services--large">
          <li className="flex align-center">
            <Image
              alt="ico"
              className="hero-icon"
              width={24}
              height={24}
              src={urlIconShield}
            />
            <p>Cómpralo de manera fácil y rápida</p>
          </li>
          <li className="flex align-center">
            <Image
              alt="ico"
              className="hero-icon"
              width={24}
              height={24}
              src={urlIconMobile}
            />
            <p>Cotiza y compra tu seguro 100% digital</p>
          </li>
          <li className="flex align-center">
            <Image alt="ico" className="hero-icon" width={24} height={24} src={urlIconMoney} />
            <p>Hasta S/.12 millones de cobertura anual</p>
          </li>
          <li className="flex align-center">
            <Image
              alt="ico"
              className="hero-icon"
              width={24}
              height={24}
              src={urlIconClinic}
            />
            <p>Más de 300 clínicas en todo Argentina</p>
          </li>
        </ul>

        <ul className="hero-section__info__services--small">
          {currentSlide === 1 && (
            <li className="">
              <Image
                alt="ico"
                className="hero-icon"
                width={24}
                height={24}
                src={urlIconShield}
              />
              <p>Cómpralo de manera fácil y rápida</p>
            </li>
          )}
          {currentSlide === 2 && (
            <li className="">
              <Image
                alt="ico"
                className="hero-icon"
                width={24}
                height={24}
                src={urlIconMobile}
              />
              <p>Cotiza y compra tu seguro 100% digital</p>
            </li>
          )}
          {currentSlide === 3 && (
            <li className="">
              <Image
                alt="ico"
                className="hero-icon"
                width={24}
                height={24}
                src={urlIconMoney}
              />
              <p>Hasta S/.12 millones de cobertura anual</p>
            </li>
          )}
          {currentSlide === 4 && (
            <li className="">
              <Image
                alt="ico"
                className="hero-icon"
                width={24}
                height={24}
                src={urlIconClinic}
              />
              <p>Más de 300 clínicas en todo Argentina</p>
            </li>
          )}
          <div className="flex align-center">
            <Image
              alt="<"
              className="back-icon"
              src={currentSlide === 1 ? urlIconBackDisabled : urlIconBack}
              onClick={goPreviousSlide}
            />
            <span>{currentSlide}</span>
            <span>/ 04</span>
            <Image
              alt=">"
              className="next-icon"
              src={currentSlide === 4 ? urlIconNextDisabled : urlIconNext}
              onClick={goNextSlide}
            />
          </div>
        </ul>
      </div>
      <div className="hero-section__copyright">
        <span>&copy; {new Date().getFullYear()} Wayfair Seguros y Reaseguros</span>
      </div>
    </>
  );
}

export default Hero;
