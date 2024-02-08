import React, { useState } from "react";
import "./index.scss";

interface AccordionInfoProps {
  title?: string;
  content?: React.ReactNode;
}

const AccordionInfo = ({
  title = "Accordion Info",
  content,
}: AccordionInfoProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="accordion--info--main--container"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="accordion--info--header--container">
        <strong>{title}</strong>
        <div
          className={
            isOpen ? "accordion--open--button open" : "accordion--open--button"
          }
        >
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={
          isOpen
            ? "accordion--info--content--container open"
            : "accordion--info--content--container"
        }
      >
        {content}
      </div>
    </div>
  );
};

export default AccordionInfo;
