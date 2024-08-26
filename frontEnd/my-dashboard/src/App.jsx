import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Chart from "./components/Chart.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-dark text-white p-0">
          <Sidebar />
        </Col>
        <Col md={10} className="p-0">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Dashboard</Navbar.Brand>
          </Navbar>
          <Container fluid className="p-4 bg-secondary text-white">
            <Routes>
              <Route path="/" element={<MainDashboard />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/user-profile" element={<UserProfile />} />
            </Routes>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

function MainDashboard() {
  return (
    <>
      <Chart title="Internet Sensor Graph" />
      <Chart title="Motion Graph Sensor" />
      <Chart title="Latency Sensor Graph" />
    </>
  );
}

function Notifications() {
  return <h4>Notifications</h4>;
}

export default App;
