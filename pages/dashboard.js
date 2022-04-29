import { useState } from "react";
import { useSession } from "next-auth/react";

import { formatIssues } from "../utils/issuesFunc";
import LineChart from "../components/Dashboard/LineChart";
import BarChart from "../components/Dashboard/BarChart";
import useProjects from "../hooks/useProjects";
import Card from "../components/Dashboard/Card";
import { Tabs } from "../components/Dashboard/Tabs";
import UserDropdown from "../components/UI/Heading/UserDropdown";
import LoadingSpinner from "../components/LoadingSpinner";

function DashboardPage({ admin }) {
  const isAdmin = admin.current;
  const { isLoading, isError, data, error } = useProjects();
  const { data: session, status } = useSession();

  const [chartType, setChartType] = useState("status");

  const projects = data?.data;

  if (isLoading) return <LoadingSpinner />;

  let allIssues = projects.map((project) => {
    return project.issues.map((issue) => issue);
  });
  allIssues = allIssues.flat();

  if (!isAdmin && session.user.role !== "demo") {
    allIssues = formatIssues(allIssues, session);
  }

  const openIssues = allIssues.filter((issue) => issue.status === "Open");
  const completedIssues = allIssues.filter(
    (issue) => issue.status === "Completed"
  );

  const noProjects = projects.length;
  const noOpenIssues = openIssues.length;
  const noCompletedIssues = completedIssues.length;

  return (
    <div className="m-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold mb-3">Dashboard</h1>
        <div className="hidden lg:block">
          <UserDropdown isAdmin={isAdmin} />
        </div>
      </div>
      <div className="flex gap-5 sm:gap-10 mb-5">
        <div className="hidden vsm:block">
          <Card message={"Active Projects"} data={noProjects} />
        </div>
        <Card message={"Open Issues"} data={noOpenIssues} />
        <Card message={"Completed Issues"} data={noCompletedIssues} />
      </div>
      <Tabs setChartType={setChartType} />

      {chartType === "status" && (
        <LineChart openIssues={openIssues} completedIssues={completedIssues} />
      )}
      {chartType === "priority" && <BarChart openIssues={openIssues} />}
    </div>
  );
}

export default DashboardPage;
