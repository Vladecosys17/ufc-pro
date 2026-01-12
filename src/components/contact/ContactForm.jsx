import { useState } from "react";

const WHATSAPP_NUMBER = "521XXXXXXXXXX";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [allowWhatsapp, setAllowWhatsapp] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function getWhatsappLink() {
    const text = `
Hola, soy ${form.name}.
Quiero conocer cómo apoyar los programas de desarrollo comunitario.
`.trim();

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    console.log({ ...form, allowWhatsapp });
  }

  if (submitted) {
    return (
      <section>
        <h2>Gracias por dar el primer paso</h2>

        <p>
          Recibimos tu información. Te contactaremos para explicarte cómo puedes
          apoyar de forma clara y transparente.
        </p>

        {allowWhatsapp && form.phone && (
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Hablar ahora por WhatsApp
          </a>
        )}

        <p>
          <strong>Tu interés ya es un apoyo.</strong>
        </p>
      </section>
    );
  }

  return (
    <section>
      <h2>Da el primer paso para apoyar</h2>

      <p>
        Déjanos tus datos y te explicamos personalmente cómo tu apoyo puede
        generar impacto real.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono (opcional)"
          value={form.phone}
          onChange={handleChange}
        />

        <label>
          <input
            type="checkbox"
            checked={allowWhatsapp}
            onChange={(e) => setAllowWhatsapp(e.target.checked)}
          />
          Prefiero que me contacten también por WhatsApp
        </label>

        <button type="submit" className="btn btn-primary">
          Quiero apoyar
        </button>

        <small>
          Usamos tu información solo para contactarte sobre este apoyo.
        </small>
      </form>
    </section>
  );
}
