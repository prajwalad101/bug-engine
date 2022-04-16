import Image from "next/image";
import { getFormattedDate } from "../../utils/formatDate";

export default function Comment({ comment }) {
  // console.log(comment);
  const firstName = comment.sender.name.split(" ")[0];
  const date = getFormattedDate(comment.createdAt);

  return (
    <div className="mb-7">
      <div className="flex items-center gap-2">
        <Image
          src={comment.sender.image}
          alt="comment-sender-image"
          width={33}
          height={33}
          className="rounded-full"
        />
        <p className="pl-2">{firstName}</p>
        <p className="text-gray-600">commented on {date}</p>
      </div>
      <div className="border-gray-300 border py-2 px-4 rounded-md mt-3 max-w-[420px]">
        {comment.comment}
      </div>
    </div>
  );
}
