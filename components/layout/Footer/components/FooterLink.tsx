import Link from "next/link";

export default function FooterLink({
  link,
  title,
}: {
  link: string;
  title: string;
}) {
  return (
    <Link href={link} className="text-on-surface-variant">
      {title}
    </Link>
  );
}
