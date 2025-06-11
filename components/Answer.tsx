import { handleSetBestAnswer } from "@/lib/actions";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type AnswerProps = {
  id: string;
  text: string;
  isBest: boolean;
  questionId: string;
};

export function Answer({ id, text, isBest, questionId }: AnswerProps) {
  const bestAnswerStyle = "min-w-[-48rem] bg-primary text-white outline-hidden ring-2 ring-primary"

  return (
    <div className="flex items-center justify-between border-t border-r border-l p-6 first:rounded-t-md last:rounded-b-md last:border-b">
      {text}
      <form action={handleSetBestAnswer} className="flex items-center">
        <input type="hidden" name="question_id" value={questionId} />
        <input type="hidden" name="answer_id" value={id} />
        <button
          type="submit"
          className={`${isBest ? bestAnswerStyle : ''} h-8 w-8 min-w-[2rem] rounded-full ring-gray-200 active:bg-primary active:text-white active:ring-2 active:ring-primary active:outline-hidden`}
          aria-label={isBest ? 'Best answer' : 'Mark as best answer'}
        >
          <CheckCircleIcon />
        </button>
      </form>

    </div>
  );
}
