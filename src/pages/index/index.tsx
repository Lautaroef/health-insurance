import Hero from "./Hero";
import PrimaryDataForm from "./PrimaryDataForm";
import "./../../styles/home.sass";

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
