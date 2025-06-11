import { fetchQuestions } from "@/lib/data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const questions = await fetchQuestions(id);
  return Response.json(questions.map((question) => ({
    id: question.id,
    title: question.title,
    topic_id: question.topic_id,
    votes: question.votes
  })));
}
