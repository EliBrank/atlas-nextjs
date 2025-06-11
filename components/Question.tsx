import VoteButton from "./VoteButton";
import Link from "next/link";

type QuestionProps = {
  id: string;
  text: string;
  votes: number;
};

export function Question({ id, text, votes }: QuestionProps) {
  return (
    <div className="flex items-center border-t border-r border-l p-6 first:rounded-t-md last:rounded-b-md last:border-b">
      <div className="mr-2 rounded-xl bg-secondary px-2 text-sm text-white">
        {votes}
      </div>
      <Link
        className="text w-full text-left font-semibold"
        href={`/ui/questions/${id}`}
      >
        {text}
      </Link>
      <VoteButton id={id} />
    </div>
  );
}
