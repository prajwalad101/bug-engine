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
  // page 1, skip 0, page2, skip 10
  const skip = (pageNum - 1) * limit;
  const filteredIssues = issues.slice(skip, limit);
  return filteredIssues;
};
