function Issue({ issue }) {
  return (
    <div className="flex flex-col gap-1 mb-5">
      <h2 className="text-lg font-medium">{issue.name}</h2>
      <div className="flex text-sm text-[#575757]">
        <p className="">#{issue.type}</p> {"/"}
        <p>2 days ago by {issue.submitter}</p>
      </div>
      <hr className="hr-line" />
    </div>
  );
}

export default Issue;
