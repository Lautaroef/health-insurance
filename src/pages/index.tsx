import Image from "next/image";
import Hero from "components/home/Hero";
import PrimaryDataForm from "components/home/PrimaryDataForm";

export default function Index() {
  return (
    <main className="main-home">
      <section className="hero-section">
        <Hero />
      </section>
      <section className="form-section">
        <PrimaryDataForm />
      </section>
    </main>
  );
}
