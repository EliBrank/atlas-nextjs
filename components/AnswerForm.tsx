import { addAnswer } from "@/lib/actions";

export default function AnswerForm({ question_id }: { question_id: string }) {
  return (
    <form className="relative my-8" action={addAnswer}>
      <input type="hidden" name="question_id" value={question_id} className="hidden" />
      <input
        type="text"
        name="answer"
        placeholder="Answer question"
        className="mt-1 block w-full rounded-md border bg-inherit py-3 pr-28 pl-3 text-lg text-gray-900 placeholder-gray-400 focus:ring-3 focus:outline-hidden"
      />
      <button
        className="absolute top-1.5 right-2 flex h-10 w-24 cursor-pointer items-center justify-center rounded-md border bg-secondary px-4 text-lg text-white focus:bg-secondary"
      >
        Answer
      </button>
    </form>
  );
}
