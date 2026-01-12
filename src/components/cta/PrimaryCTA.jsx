import { Link } from "react-router-dom";

export default function PrimaryCTA() {
  return (
    <section>
      <h2>Tu apoyo puede generar impacto real</h2>
      <p>
        Da el primer paso y conoce cómo puedes apoyar
        programas comunitarios activos.
      </p>

      <Link to="/contact">
        Quiero apoyar este proyecto
      </Link>
    </section>
  );
}
