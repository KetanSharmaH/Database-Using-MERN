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
          <Nav.Link as={Link} to="/" className="text-white fs-5 ps-5 pt-4">
            Dashboard
          </Nav.Link>
          <Sidebar />
        </Col>
        <Col md={10} className="p-0">
          <Navbar bg="dark" variant="dark">
            <Col md={10}></Col>
            <Col md={2}>
              <Navbar.Brand>Ketan</Navbar.Brand>
            </Col>
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
      <Row>
        <Col md={6}>
          <Chart title="Internet Sensor Graph" />
        </Col>
        <Col md={6}>
          <Chart title="Motion Graph Sensor" />
        </Col>
      </Row>
      <Chart title="Latency Sensor Graph" />
    </>
  );
}

function Notifications() {
  return <h4>Notifications</h4>;
}

export default App;
