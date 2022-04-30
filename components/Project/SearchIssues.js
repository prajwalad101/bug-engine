import Issues from "./Issues";

export default function SearchIssues({ project, issues, searchField }) {
  let filteredIssues = issues.filter((issue) => {
    return (
      issue.name.toLowerCase().includes(searchField.toLowerCase()) ||
      issue.submitter.name.toLowerCase().includes(searchField.toLowerCase()) ||
      issue.priority.toLowerCase().includes(searchField.toLowerCase()) ||
      issue.type.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  // sort issues based on date
  filteredIssues = filteredIssues.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div>
      <Issues project={project} issues={filteredIssues} />
    </div>
  );
}
