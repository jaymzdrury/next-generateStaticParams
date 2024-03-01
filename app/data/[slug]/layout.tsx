export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <div style={{ border: "1px  solid black" }}>{children}</div>;
}
