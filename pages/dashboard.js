import { useState } from "react";

import LineChart from "../components/Dashboard/LineChart";
import BarChart from "../components/Dashboard/BarChart";
import useProjects from "../hooks/useProjects";

function DashboardPage() {
  const { isLoading, isError, data, error } = useProjects();

  const [chartType, setChartType] = useState("status");

  const projects = data?.data;

  if (isLoading) return null;

  let allIssues = projects.map((project) => {
    return project.issues.map((issue) => issue);
  });

  allIssues = allIssues.flat();

  const openIssues = allIssues.filter((issue) => issue.status === "Open");
  const completedIssues = allIssues.filter(
    (issue) => issue.status === "Completed"
  );

  const noIssues = allIssues.length;
  const noProjects = projects.length;
  const noOpenIssues = openIssues.length;
  const noCompletedIssues = completedIssues.length;

  return (
    <div>
      {/* Header */}
      <div className="mb-5 ml-5">
        <h1>No Issues: {noIssues}</h1>
        <h1>No Projects: {noProjects}</h1>
        <h1>Open Issues: {noOpenIssues}</h1>
        <h1>Completed Issues: {noCompletedIssues}</h1>
      </div>
      <div className="flex gap-5 ml-5">
        <button onClick={() => setChartType("status")}>Issue by Status</button>
        <button onClick={() => setChartType("priority")}>
          Issue By Priority
        </button>
      </div>
      {chartType === "status" && (
        <LineChart openIssues={openIssues} completedIssues={completedIssues} />
      )}
      {chartType === "priority" && <BarChart openIssues={openIssues} />}
    </div>
  );
}

export default DashboardPage;
