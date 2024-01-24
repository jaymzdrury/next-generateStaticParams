import { Metadata } from "next";
import Link from "next/link";

export const metadata = (): Metadata => {
  return {
      title: 'Main Page',
  };
};

export default function Home(): JSX.Element {
  return (
    <main>
      <h1>Hello</h1>
      <Link href='/data/1'>Slug</Link>
    </main>
  );
}
