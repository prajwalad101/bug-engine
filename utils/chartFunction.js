export const sortIssuesByStatus = (openIssues, completedIssues) => {
  const openData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const completedData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  openIssues.forEach((issue) => {
    let date = issue.createdAt;
    date = new Date(date);

    const month = date.getMonth();
    openData[month]++;
  });

  completedIssues.forEach((issue) => {
    let date = issue.createdAt;
    date = new Date(date);

    const month = date.getMonth();
    completedData[month]++;
  });

  return { openData, completedData };
};

export const sortIssueByPriority = (openIssues) => {
  const highIssueData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const mediumIssueData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const lowIssueData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const highIssues = openIssues.filter((issue) => issue.priority === "High");
  const mediumIssues = openIssues.filter(
    (issue) => issue.priority === "Medium"
  );
  const lowIssues = openIssues.filter((issue) => issue.priority === "Low");

  highIssues.forEach((issue) => {
    let date = issue.createdAt;
    date = new Date(date);

    const month = date.getMonth();
    highIssueData[month]++;
  });

  mediumIssues.forEach((issue) => {
    let date = issue.createdAt;
    date = new Date(date);

    const month = date.getMonth();
    mediumIssueData[month]++;
  });

  lowIssues.forEach((issue) => {
    let date = issue.createdAt;
    date = new Date(date);

    const month = date.getMonth();
    lowIssueData[month]++;
  });

  return { highIssueData, mediumIssueData, lowIssueData };
};
