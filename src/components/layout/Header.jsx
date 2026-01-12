import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const isContact = pathname === "/contact";

  return (
    <header>
      <Link to="/">Union Fuerza Cambio</Link>

      {!isContact && (
        <Link to="/contact">
          Apoyar
        </Link>
      )}
    </header>
  );
}
