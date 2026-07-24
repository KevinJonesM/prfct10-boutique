export default function SignatureText({
  as: Tag = "span",
  children,
  className = "",
  variant = "section",
  ...props
}) {
  return (
    <Tag className={`signature-text signature-text--${variant} ${className}`.trim()} {...props}>
      <span className="signature-text__offset" aria-hidden="true">
        {children}
      </span>
      <span className="signature-text__main">{children}</span>
    </Tag>
  );
}
