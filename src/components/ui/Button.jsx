export default function Button({
  children,
  variant = "primary",
  as = "button",
  href,
  onClick,
}) {
  const Component = as;
  const className = `btn btn-${variant}`;

  if (as === "a" && !href) {
    throw new Error("Button as='a' requires href");
  }

  return (
    <Component className={className} href={href} onClick={onClick}>
      {children}
    </Component>
  );
}
