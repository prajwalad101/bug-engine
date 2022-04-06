export const formatIssues = (issues, session) => {
  const filteredIssues = issues.filter((issue) => {
    let assigneeIds = issue.assignees.map((assignee) => assignee._id);
    if (assigneeIds.includes(session.user.id)) {
      return true;
    } else {
      return false;
    }
  });

  return filteredIssues;
};
