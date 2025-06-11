import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function VoteButton({ id }: { id: string }) {
  return (
    <form action={addAnswerVote}>
      <input type="hidden" name="id" value={id} className="hidden" />
      <button
        type="submit"
        className="h-8 w-8 min-w-[2rem] cursor-pointer rounded-full ring-gray-200 active:bg-primary active:text-white active:ring-2 active:ring-primary active:outline-none"
      >
        <CheckCircleIcon />
      </button>
    </form>
  );
}
