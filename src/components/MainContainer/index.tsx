import NavBar from "@components/NavBar";
import "./index.scss";

interface MainContainerProps {
  hasNavBar?: boolean;
  children: React.ReactNode;
}

const MainContainer = ({ hasNavBar = true, children }: MainContainerProps) => {
  return (
    <div className="main_container">
      {hasNavBar && <NavBar />}
      <div className="main_content_container">{children}</div>
    </div>
  );
};

export default MainContainer;
