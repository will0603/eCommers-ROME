import NavBar from "@components/NavBar";
import "./index.scss";
import ScrollToTop from "@/hooks/useSrollToTop.tsx";

interface MainContainerProps {
  hasNavBar?: boolean;
  children: React.ReactNode;
}

const MainContainer = ({ hasNavBar = true, children }: MainContainerProps) => {
  return (
    <ScrollToTop>
      <div className="main_container">
        {hasNavBar && <NavBar />}
        <div className="main_content_container">{children}</div>
      </div>
    </ScrollToTop>
  );
};

export default MainContainer;
