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

function BarChart({ openIssues }) {
  const options = {
    responsive: true,
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
        backgroundColor: "rgba(255,114,118,0.5)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Medium",
        data: mediumIssueData,
        fill: false,
        borderColor: "#742774",
      },
      {
        label: "Low",
        data: lowIssueData,
        fill: false,
        borderColor: "#742774",
      },
    ],
  };
  return <Bar data={data} options={options}></Bar>;
}

export default BarChart;
