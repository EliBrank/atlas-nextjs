import { fetchAnswers } from "@/lib/data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const answers = await fetchAnswers(id);
  return Response.json(answers.map((question) => ({
    id: question.id,
    answer: question.answer,
    question_id: question.question_id,
  })));
}
