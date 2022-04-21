// import chart components
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { sortIssueByPriority } from "../../utils/chartFunction";
import { chartOptions } from "../../utils/chartOptions";

function BarChart({ openIssues }) {
  const options = {
    // responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Issue By Priority",
      },
    },
  };

  const { highIssueData, mediumIssueData, lowIssueData } =
    sortIssueByPriority(openIssues);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "High",
        data: highIssueData,
        fill: true,
        backgroundColor: "#cc8678",
      },
      {
        label: "Medium",
        data: mediumIssueData,
        fill: false,
        backgroundColor: "#a29fd6",
      },
      {
        label: "Low",
        data: lowIssueData,
        fill: false,
        backgroundColor: "#b8b8b8",
      },
    ],
  };
  return (
    <div className="h-[40vh] sm:h-[60vh]">
      <Bar data={data} options={chartOptions} width={400}></Bar>
    </div>
  );
}

export default BarChart;
