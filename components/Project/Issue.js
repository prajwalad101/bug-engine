function Issue({ issue }) {
  return (
    <div className="border-2 rounded-md p-2 mb-3 shadow-md">
      <p>{issue.name}</p>
      <div className="text-gray-600">
        <span className="text-sm ">{issue.submitter}, </span>
        <span className="text-sm ">2 days ago</span>
        <p className="text-sm py-2 text-blue-300"># {issue.type}</p>
      </div>
    </div>
  );
}

export default Issue;
