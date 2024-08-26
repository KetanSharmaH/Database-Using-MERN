import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Nav className="flex-column bg-dark p-3 vh-100">
      <Nav.Link as={Link} to="/" className="text-white">
        Dashboard
      </Nav.Link>
      <Nav.Link as={Link} to="/notifications" className="text-white">
        Notifications
      </Nav.Link>
      <Nav.Link as={Link} to="/user-profile" className="text-white">
        User Profile
      </Nav.Link>
    </Nav>
  );
}

export default Sidebar;
