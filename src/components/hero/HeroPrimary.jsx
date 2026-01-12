import { Link } from "react-router-dom";

export default function HeroPrimary() {
  return (
    <section>
      <h1>
        Convierte tu apoyo en acciones
        <br />
        que fortalecen comunidades locales
      </h1>

      <p>
        Impulsamos programas comunitarios con impacto directo en personas y
        familias.
      </p>

      <Link to="/contact">Quiero apoyar este proyecto</Link>
    </section>
  );
}
