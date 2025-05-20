import { Link as WouterLink } from "wouter";

// A compatibility layer for Next.js Link component
export default function Link({ href, children, className = "", onClick = () => {} }: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <WouterLink href={href} onClick={onClick}>
      <div className={className}>{children}</div>
    </WouterLink>
  );
}