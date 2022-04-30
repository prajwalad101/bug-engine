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

export const getIssueId = (issueId) => {
  const idArr = issueId.split("");

  const idNum = idArr.filter((char) => !isNaN(char)).join("");
  const id1 = idNum.slice(0, 2);
  const id2 = idNum.slice(-3);

  const id = id1 + id2;

  return id;
};
