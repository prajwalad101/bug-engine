import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import useComments from "../../hooks/comment/useComments";
import useCreateComment from "../../hooks/comment/useCreateComment";
import Comment from "./Comment";

function Comments({ projectId, issueId }) {
  const { data: session } = useSession();
  const mutation = useCreateComment(projectId, issueId);

  const [comment, setComment] = useState("");

  const { isLoading, isError, data, error } = useComments(projectId, issueId);

  if (isLoading) {
    return <div>Loading comments</div>;
  }

  if (isError) {
    return <div>Error: ${error}</div>;
  }

  const addComment = () => {
    mutation.mutate(
      { comment, sender: session.user },
      { onSuccess: () => setComment("") }
    );
  };

  return (
    <div className="ml-5">
      <h1 className="text-lg text-gray-500 mb-7">Comments</h1>
      <div className="flex items-center gap-3 mt-4">
        <Image
          src={session.user.image}
          alt="User-img"
          width={33}
          height={33}
          className="rounded-full"
        />

        <input
          type="text"
          placeholder="Add a comment"
          className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 max-w-[300px] focus:outline-none
      "
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={addComment}
          className="bg-blue-500 shadow-md px-4 py-2 rounded-md text-white hover:cursor-pointer hover:bg-blue-700 text-sm"
        >
          Send
        </button>
      </div>
      {/* Comments list */}
      <div className="mt-10">
        {data?.data.map((el) => (
          <Comment key={el._id} comment={el} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
