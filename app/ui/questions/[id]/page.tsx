import { fetchQuestion } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";

export default async function Page({
  params }: { params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const question = await fetchQuestion(id);
  return (
    <div>
      <h1 className="flex items-center text-3xl font-black">
        <HashtagIcon className="mr-2 h-6 w-6" /> {question.title}
      </h1>
    </div>
  );
}
