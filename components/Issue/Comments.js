import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import useComments from "../../hooks/comment/useComments";

import useCreateComment from "../../hooks/comment/useCreateComment";

import Comment from "./Comment";
import DogeUser from "../../public/img/doge-user.png";
import LoadingSpinner from "../LoadingSpinner";

function Comments({ projectId, issueId }) {
  const { data: session } = useSession();
  const mutation = useCreateComment(projectId, issueId);

  const [comment, setComment] = useState("");

  const { isLoading, isError, data, error } = useComments(projectId, issueId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error: ${error}</div>;
  }

  const addComment = () => {
    if (session.user.role === "demo") {
      return;
    }
    mutation.mutate(
      { comment, sender: session.user },
      { onSuccess: () => setComment("") }
    );
  };

  let comments = data?.data;

  return (
    <div className="tablet:ml-5">
      <h1 className="text-lg text-gray-500 mb-7 hidden tablet:block">
        Comments
      </h1>
      <div className="flex items-center gap-3 mt-4">
        <div className="flex items-center min-w-[30px]">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt="User-img"
              width={33}
              height={33}
              className="rounded-full"
            />
          ) : (
            <Image src={DogeUser} alt="user profile" width={35} height={35} />
          )}
        </div>

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
          className={`bg-blue-500 shadow-md px-4 py-2 rounded-md text-white hover:cursor-pointer hover:bg-blue-700 text-sm ${
            session.user.role === "demo" && "hover:cursor-not-allowed"
          }`}
        >
          Send
        </button>
      </div>
      {/* Comments list */}
      <div className="mt-10">
        {comments
          .slice(0)
          .reverse()
          .map((el, index) => (
            <Comment key={el._id} comment={el} />
          ))}
      </div>
    </div>
  );
}

export default Comments;
