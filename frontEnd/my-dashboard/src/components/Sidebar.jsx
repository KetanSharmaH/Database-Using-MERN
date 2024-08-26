import IconReact from "../assets/IconReact.jsx";
import { Card, Row, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Nav
      className="flex-column bg-dark vh-100 sticky-top"
      style={{ padding: "18px" }}
    >
      <Card className="bg-primary" border="dark" style={{ height: "100%" }}>
        <Row>
          <Col md="3">
            <IconReact />
          </Col>
          <Col md="9" className="text-white fs-5" style={{ marginTop: "14px" }}>
            CREATIVE TIM
          </Col>
        </Row>
        <hr />
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-2"
          style={{ fontSize: "12px" }}
        >
          <Row>
            <Col md="3"></Col>
            <Col md="9" className="text-white">
              DASHBOARD
            </Col>
          </Row>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <Row>
            <Col md="3"></Col>
            <Col md="9" className="text-white">
              ICONS
            </Col>
          </Row>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <Row>
            <Col md="3"></Col>
            <Col md="9" className="text-white">
              MAP
            </Col>
          </Row>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/notifications"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <Row>
            <Col md="3"></Col>
            <Col md="9" className="text-white">
              NOTIFICATIONS
            </Col>
          </Row>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/user-profile"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <Row>
            <Col md="3"></Col>
            <Col md="9" className="text-white">
              USER PROFILE
            </Col>
          </Row>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <Row>
            <Col md="3"></Col>
            <Col md="9" className="text-white">
              TABLE LIST
            </Col>
          </Row>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <Row>
            <Col md="3"></Col>
            <Col md="9" className="text-white">
              TYPOGRAPHY
            </Col>
          </Row>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <Row>
            <Col md="3"></Col>
            <Col md="9" className="text-white">
              RTL SUPPORT
            </Col>
          </Row>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="text-white"
          style={{ fontSize: "12px", marginTop: "150px" }}
        >
          <Row>
            <Col md="3"></Col>
            <Col md="9" className="text-white">
              UPGRADE TO PRO
            </Col>
          </Row>
        </Nav.Link>
      </Card>
    </Nav>
  );
}

export default Sidebar;
