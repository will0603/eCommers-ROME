import SideNavItem, { NavItemProps } from "@components/SideNavItem";
import "./index.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface SideNavGroupWrapperProps {
  navGroupItems?: NavItemProps[];
  titleGroupItems?: string;
  iconGroupItems?: React.ReactNode;
  goBack?: () => void;
}

const SideNavGroupWrapper = ({
  navGroupItems,
  titleGroupItems,
  iconGroupItems,
  goBack,
}: SideNavGroupWrapperProps) => {
  return (
    <div className="sidenav_group_wrapper_main_container">
      {titleGroupItems && (
        <div className="sidenav_group_wrapper_title" onClick={goBack && goBack}>
          {goBack && (
            <p className="sidenav_group_wrapper_back_icon">
              <MdOutlineKeyboardArrowLeft />
            </p>
          )}
          <p>{titleGroupItems}</p>
          {iconGroupItems && (
            <p className="sidenav_group_wrapper_icon">{iconGroupItems}</p>
          )}
        </div>
      )}
      <ul className="sidenav_group_wrapper_links_list">
        {navGroupItems &&
          navGroupItems.map((navGroupItem, index) => {
            const { path, title, onCallToAction, icon, dropDownInfo } =
              navGroupItem;
            return (
              <li className="sidenav_nav_item_link" key={index}>
                {
                  <SideNavItem
                    title={title}
                    path={path}
                    onCallToAction={onCallToAction}
                    icon={icon}
                    dropDownInfo={dropDownInfo}
                  />
                }
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SideNavGroupWrapper;
