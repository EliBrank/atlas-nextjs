import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { addVote } from "@/lib/actions";

export default function VoteButton({ id }: { id: string }) {
  return (
    <form action={addVote}>
      <input type="hidden" name="id" value={id} className="hidden" />
      <button
        type="submit"
        className="hover:text-atlas-teal h-8 w-8 min-w-[2rem] rounded-full ring-gray-200 active:bg-primary active:text-white active:ring-2 active:ring-primary active:outline-none"
      >
        <HandThumbUpIcon />
      </button>
    </form>
  );
}
