import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";
import { urlDecoded } from "@/helpers";

const BreadCumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationPath = location?.pathname;
  const locationInfo = locationPath.split("/").filter((word) => word !== "");

  return (
    <ul className="breadcumb--main--container">
      <li onClick={() => navigate("/")}>
        <span>Inicio</span>
        <MdKeyboardArrowRight />
      </li>
      {locationInfo &&
        locationInfo?.map((word, index) => {
          return (
            <li key={index}>
              <span>{urlDecoded(word)}</span>
              <MdKeyboardArrowRight />
            </li>
          );
        })}
    </ul>
  );
};

export default BreadCumb;
