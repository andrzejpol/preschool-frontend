import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {logout} from "../../../authService.ts";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
  }, [navigate]);

  return <p>Trwa wylogowywanie...</p>;
};

export default Logout;
