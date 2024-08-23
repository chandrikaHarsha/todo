import Navbar from "react-bootstrap/Navbar";
import { FcInspection } from "react-icons/fc";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#" className="text-light p-2">
          <FcInspection /> Today's Action Chart
        </Navbar.Brand>
      </Navbar>
    </>
  );
};
export default Header;
