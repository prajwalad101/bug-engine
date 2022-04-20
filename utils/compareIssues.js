function compareIssues(newIssue, oldIssue) {
  const changedItems = {
    type: { isChanged: false },
    status: { isChanged: false },
    assignees: { isChanged: false },
    priority: { isChanged: false },
  };

  if (newIssue.type && newIssue.type !== oldIssue.type) {
    changedItems.type = {
      isChanged: true,
      oldItem: oldIssue.type,
      newItem: newIssue.type,
    };
  }
  if (newIssue.status && newIssue.status !== oldIssue.status) {
    changedItems.status = {
      isChanged: true,
      oldItem: oldIssue.status,
      newItem: newIssue.status,
    };
  }
  if (newIssue.priority && newIssue.priority !== oldIssue.priority) {
    changedItems.priority = {
      isChanged: true,
      oldItem: oldIssue.priority,
      newItem: newIssue.priority,
    };
  }
  if (
    newIssue.assignees &&
    newIssue.assignees.length !== oldIssue.assignees.length
  ) {
    changedItems.assignees = {
      isChanged: true,
      oldItem: oldIssue.assignees.length,
      newItem: newIssue.assignees.length,
    };
  }

  const changedInfo = [];
  if (changedItems.type.isChanged !== false) {
    changedInfo.push({ changed: "type", ...changedItems.type });
  }
  if (changedItems.status.isChanged !== false) {
    changedInfo.push({ changed: "status", ...changedItems.status });
  }
  if (changedItems.priority.isChanged !== false) {
    changedInfo.push({ changed: "priority", ...changedItems.priority });
  }
  if (changedItems.assignees.isChanged !== false) {
    changedInfo.push({ changed: "assignees", ...changedItems.assignees });
  }

  return changedInfo;
}

export default compareIssues;
