import React from "react";

const LinkImage = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className={props.link_class}
    >
      <img src={props.img} alt="" className={props.img_class} />
    </a>
  );
};

export default LinkImage;
