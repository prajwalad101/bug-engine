import Issues from "./Issues";

export default function SearchIssues({ project, issues, searchField }) {
  console.table(issues[0]);

  const filteredIssues = issues.filter((issue) => {
    return (
      issue.name.toLowerCase().includes(searchField.toLowerCase()) ||
      issue.submitter.name.toLowerCase().includes(searchField.toLowerCase()) ||
      issue.priority.toLowerCase().includes(searchField.toLowerCase()) ||
      issue.type.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  // console.log(filteredIssues);

  return (
    <div>
      <Issues project={project} issues={filteredIssues} />
    </div>
  );
}
