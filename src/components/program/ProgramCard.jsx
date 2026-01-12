export default function ProgramCard({ title, description }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Quiero apoyar</button>
    </article>
  );
}
