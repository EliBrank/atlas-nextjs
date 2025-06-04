import { HashtagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  id: string;
  text: string;
};

export function Topic({ id, text }: Props) {
  return (
    <Link
      href={`/ui/topics/${id}`}
      className="border-atlas-white-300 flex items-center border-t border-r border-l p-6 first:rounded-t-md last:rounded-b-md last:border-b"
    >
      <p className="text flex w-full text-left font-semibold">
        <HashtagIcon className="mr-2 h-6 w-6" />
        {text}
      </p>
    </Link>
  );
}
