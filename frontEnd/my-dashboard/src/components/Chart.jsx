import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
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
import { Card, Button, ButtonGroup } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ title }) {
  const data = {
    labels: ["22:14", "22:34", "22:54", "23:14", "23:34", "23:54", "00:14"],
    datasets: [
      {
        label: "Internet Speed (Mbps)",
        data: [30, 50, 40, 60, 50, 70, 60],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <Card className="mb-4 bg-dark text-white">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ButtonGroup className="mb-3">
          <Button variant="primary">Last 3 hours</Button>
          <Button variant="primary">Last 24 hours</Button>
          <Button variant="primary">Last 7 days</Button>
          <Button variant="primary">Last 30 days</Button>
        </ButtonGroup>
        <Line data={data} />
      </Card.Body>
    </Card>
  );
}

export default Chart;
