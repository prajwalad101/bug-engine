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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const options = {
    maintainAspectRatio: false,
  };

  const data = {
    labels,
    datasets: [
      {
        label: "# of votes",
        data: [2, 43, 523],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} width={400} height={600} options={options} />
    </div>
  );
};

export default BarChart;
