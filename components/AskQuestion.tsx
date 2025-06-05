import { addQuestion } from "@/lib/actions";

export function AskQuestion({ topic }: { topic: string }) {
  return (
    <form className="relative my-8" action={addQuestion}>
      <input type="hidden" name="topic_id" value={topic} className="hidden" />
      <input
        type="text"
        name="title"
        placeholder="Ask a question"
        className="border-atlas-white-300 focus:ring-atlas-teal mt-1 block w-full rounded-md border bg-inherit py-3 pr-28 pl-3 text-lg text-gray-900 placeholder-gray-400 focus:ring-3 focus:outline-hidden"
      />
      <button className="absolute top-2 right-2 flex h-10 w-24 items-center justify-center rounded-md border bg-secondary px-4 text-lg text-white focus:bg-secondary">
        Ask
      </button>
    </form>
  );
}
