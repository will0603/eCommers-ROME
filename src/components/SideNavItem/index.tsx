import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SideNavGroupWrapper from "../SideNavGroupWrapper";
import "./index.scss";

export interface NavItemProps {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  dropDownInfo?: NavItemProps[];
  onCallToAction?: () => void;
}

const SideNavItem = ({
  title,
  path,
  icon,
  dropDownInfo,
  onCallToAction,
}: NavItemProps) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div
      className="sidenavitem_main_container"
      onClick={path ? () => navigate(path) : onCallToAction}
    >
      <div
        className="sidenavitem_container"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <div className="sidenavitem_content_container">
          {icon && <div className="sidenavitem_icon_container">{icon}</div>}
          {title && <span>{title}</span>}
        </div>
        {dropDownInfo && (
          <div className="sidenavitem_dropdown_icon_container">
            <MdKeyboardArrowRight />
          </div>
        )}
      </div>
      <div
        className={
          showDropDown && dropDownInfo
            ? "sidenavitem_dropdown_container open"
            : "sidenavitem_dropdown_container"
        }
      >
        <SideNavGroupWrapper
          navGroupItems={dropDownInfo}
          iconGroupItems={icon}
          titleGroupItems={title}
          goBack={() => setShowDropDown(false)}
        />
      </div>
    </div>
  );
};

export default SideNavItem;
