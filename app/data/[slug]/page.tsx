import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllData, getData } from "../../../actions/actions";

export const generateMetadata = ({ params }: Params): Metadata => {
  return {
    title: `${params.slug}`,
  };
};

export async function generateStaticParams() {
  const data: Data[] = await getAllData();
  return data.map((d) => ({
    slug: d.id.toString(),
  }));
}

export default async function Slug({ params }: Params): Promise<JSX.Element> {
  const { slug } = params;
  if (Number(slug) > 10) notFound();

  const { name } = await getData(slug);

  return (
    <main>
      <h1>{slug}</h1>
      <p>{name}</p>
    </main>
  );
}
