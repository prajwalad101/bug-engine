import { Line } from "react-chartjs-2";
import { sortIssuesByStatus } from "../../utils/chartFunction";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ openIssues, completedIssues }) => {
  const { openData, completedData } = sortIssuesByStatus(
    openIssues,
    completedIssues
  );

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Issue By Status",
      },
    },
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Completed",
        data: completedData,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Open",
        data: openData,
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
