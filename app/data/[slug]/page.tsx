import { Metadata } from "next";
import { notFound } from "next/navigation";

export interface Data {
  id: string,
  name: string
}

export type Params = {
  params: {
    slug: string
  }
}

export const generateMetadata = ({params}: Params): Metadata => {
  return {
      title: `${params.slug}`,
  };
};

async function getData (id: string): Promise<Data> {

  const res = await fetch(`${process.env.URL}/api/${id}`)
  const data = await res.json()

  if(!res.ok) throw new Error()

  return data

}

export async function generateStaticParams(): Promise<Data[]> {
  const data = await fetch(`${process.env.URL}/api`).then((res) => res.json());
  return data.map((d: Data) => ({
    slug: d.id.toString()
  }))
}

export default async function Slug ({params}: Params): Promise<JSX.Element> {
    
  const { slug } = params
  if (Number(slug) > 10) notFound()
    
  const { name } = await getData(slug)

  return (
    <main>
      <h1>{slug}</h1>
      <p>{name}</p>
    </main>
  );

}