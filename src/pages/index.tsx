import Image from "next/image";
import Hero from "components/home/Hero";
import PrimaryDataForm from "components/home/PrimaryDataForm";

import urlFamily from "images/family.svg";
import urlBaseHero from "images/base-hero.png";

export default function Index() {
  return (
    <main className="main-home">
      <section className="hero-section">
        <Image
          priority
          src={urlFamily}
          objectFit="scale-down"
          layout="fill"
          objectPosition="right"
          style={{
            zIndex: 2,
          }}
        />
        <Image src={urlBaseHero} objectFit="fill" layout="fill" priority />
        <Hero />
      </section>
      <section className="form-section">
        <PrimaryDataForm />
      </section>
    </main>
  );
}
