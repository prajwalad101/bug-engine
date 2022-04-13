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

export const formatPagination = (issues, pageNum, limit) => {
  const skip = (pageNum - 1) * limit;
  const filteredIssues = issues.slice(skip, skip + limit);
  return filteredIssues;
};
