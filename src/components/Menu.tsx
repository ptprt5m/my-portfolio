import Link from "next/link";

export const Menu = () => (
  <div className="flex gap-8">
    <Link href='/' className="transition hover:opacity-60">Home</Link>
    <Link href='/' className="transition hover:opacity-60">About</Link>
    <Link href='/' className="transition hover:opacity-60">Skills</Link>
    <Link href='/' className="transition hover:opacity-60">Experience</Link>
    <Link href='/' className="transition hover:opacity-60">Portfolio</Link>
  </div>
);
