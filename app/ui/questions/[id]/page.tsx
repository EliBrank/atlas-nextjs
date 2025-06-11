import { fetchAnswers, fetchQuestion } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";
import AnswerForm from "@/components/AnswerForm";
import { Answer } from "@/components/Answer";

export default async function Page({
  params }: { params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const question = await fetchQuestion(id);
  const answers = await fetchAnswers(id);

  const answersSorted = [...answers].sort((a, b) => {
    if (a.is_best) return -1;
    if (b.is_best) return 1;
    return 0;
  });

  return (
    <div>
      <h1 className="flex items-center text-3xl font-black">
        <HashtagIcon className="mr-2 h-6 w-6" /> {question.title}
      </h1>
      <AnswerForm
        question_id={question.id}
      />

      {answersSorted.map((answer) => (
        <Answer
          key={answer.id}
          id={answer.id}
          text={answer.answer}
          isBest={answer.id === question.answer_id ? true : false}
          questionId={question.id}
        />
      ))}
    </div>
  );
}
