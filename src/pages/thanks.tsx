import Image from "next/image";
import { useRouter } from "next/router";

import urlManOk from "images/man-ok.svg";
import urlBannerThanks from "images/banner-thanks.svg";
import urlLogo from "images/logo.png";
import urlFamily from "images/family.svg";
import urlBaseHero from "images/base-hero.png";
import Head from "next/head";

function Thanks() {
  const router = useRouter();

  const goHomePage = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Thank you for choosing Wayfair!</title>
        <meta name="description" content="Thank you for choosing Wayfair!" />
      </Head>
      <main className="main-thanks">
        <header className="header-thanks-mobile">
          <Image className="logo-image" src={urlLogo} alt="Wayfair" width={120} height={36} />
        </header>
        <div className="banner-thanks">
          <Image src={urlBannerThanks} alt="Wayfair" />
        </div>
        <section className="separator-thanks-section">
          <Image
            priority
            alt="Family"
            layout="fill"
            src={urlFamily}
            objectFit="scale-down"
            objectPosition="right"
            style={{
              zIndex: 2,
            }}
          />
          <Image src={urlBaseHero} objectFit="fill" layout="fill" priority />
          <div className="mt-20 ml-30-percent">
            <Image
              width={120}
              height={36}
              alt="Wayfair"
              src={urlLogo}
              className="logo-image"
            />
          </div>
        </section>
        <section className="detail-thanks-section w-100p">
          <div className="w-50p">
            <Image className="man-ok" src={urlManOk} alt="check" />
            <h2 className="light">
              Revisa nuestros<br></br>
              <strong className="color-primary">servicios y exclusiones</strong>
            </h2>
          </div>
          <div className="py-20 w-50p">
            <span className="font-12">
              Queremos conocer mejor la salud de los asegurados. Un asesor{" "}
              <strong>se pondrá en contacto</strong> contigo en las siguientes{" "}
              <strong>48 horas.</strong>
            </span>
          </div>
          <div className="flex justify-end w-50p">
            <button type="submit" className="btn font-11" onClick={goHomePage}>
              IR A SALUD
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Thanks;
