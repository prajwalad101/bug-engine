import Image from "next/image";
import { getFormattedDate } from "../../utils/formatDate";

export default function Comment({ comment }) {
  const firstName = comment.sender.name.split(" ")[0];
  const date = getFormattedDate(comment.createdAt);

  return (
    <div className="mb-7">
      <div className="flex items-center gap-2">
        <div className="flex items-center min-w-[30px]">
          <Image
            src={comment.sender.image}
            alt="comment-sender-image"
            width={33}
            height={33}
            className="rounded-full"
          />
        </div>
        <p className="pl-2">{firstName}</p>
        <p className="text-gray-600 text-sm">commented on {date}</p>
      </div>
      <div className="border-gray-300 text-[15px] border py-2 px-4 rounded-md mt-3 max-w-[420px]">
        {comment.comment}
      </div>
    </div>
  );
}
