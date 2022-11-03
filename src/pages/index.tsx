import Head from "next/head";

import Image from "next/image";
import Hero from "components/home/Hero";
import PrimaryDataForm from "components/home/PrimaryDataForm";

import urlFamily from "images/family.svg";
import urlBaseHero from "images/base-hero.png";

export default function Index() {
  return (
    <>
      <Head>
        <title>Health Insurance</title>
        <meta name="description" content="Health Insurance" />
      </Head>
      <main className="main-home">
        <section className="hero-section">
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
          <Image
            priority
            layout="fill"
            objectFit="fill"
            src={urlBaseHero}
            alt="Background image"
          />
          <Hero />
        </section>
        <section className="form-section">
          <PrimaryDataForm />
        </section>
      </main>
    </>
  );
}
