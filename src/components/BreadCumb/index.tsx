import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

const BreadCumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationPath = location?.pathname;
  const locationInfo = locationPath.split("/").filter((word) => word !== "");
  console.log({ locationInfo });
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
              <span>{decodeURI(word)}</span>
              <MdKeyboardArrowRight />
            </li>
          );
        })}
    </ul>
  );
};

export default BreadCumb;
