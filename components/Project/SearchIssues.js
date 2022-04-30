import Issues from "./Issues";

export default function SearchIssues({ project, issues, searchField }) {
  const filteredIssues = issues.filter((issue) => {
    return (
      issue.name.toLowerCase().includes(searchField.toLowerCase()) ||
      issue.submitter.name.toLowerCase().includes(searchField.toLowerCase()) ||
      issue.priority.toLowerCase().includes(searchField.toLowerCase()) ||
      issue.type.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  return (
    <div>
      <Issues project={project} issues={filteredIssues} />
    </div>
  );
}
