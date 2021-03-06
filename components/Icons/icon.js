import React from "react";


const Icon = (props) => {
  if (props.name === "") {
    return null;
  }
  try {
    const Image = require(`./stock/${props.name}`).default;
    if (Image) {
      return (
        <Image
          aria-label={props.name}
          {...props}
        />
      );
    }
    return null;
  } catch (error) {
    return null;
  }
};

export default Icon;
