export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // simulate page load
  // await new Promise((r) => setTimeout(r, 2000));

  return (
    <div>Topic Page: {id}</div>
  );
}
