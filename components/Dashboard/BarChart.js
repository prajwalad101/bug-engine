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

function BarChart() {
  var yLabels = {
    0: "Low",
    2: "Medium",
    4: "High",
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "chartArea",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "High",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(255,114,118,0.5)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Medium",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
      {
        label: "Low",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };
  return <Bar data={data} options={options}></Bar>;
}

export default BarChart;
