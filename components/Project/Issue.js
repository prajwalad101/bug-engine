function Issue({ issue }) {
  return (
    <div>
      <p>{issue.name}</p>
      <p>{issue.submitter}</p>
    </div>
  );
}

export default Issue;
