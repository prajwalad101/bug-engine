import { useSession } from "next-auth/react";
import { useState } from "react";
import useComments from "../../hooks/comment/useComments";
import useCreateComment from "../../hooks/comment/useCreateComment";

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
    <div>
      <div>
        {data?.data.map((el) => (
          <p key={el._id}>{el.comment}</p>
        ))}
      </div>
      <input
        type="text"
        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={addComment}>Send</button>
    </div>
  );
}

export default Comments;
