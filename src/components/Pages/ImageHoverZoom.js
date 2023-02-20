import React from "react";
import { Image } from "react-bootstrap";
import './ImageHoverzoom.css';


const ImageHoverZoom = (props) => {
    return (
      <div className="img-wrapper">
        <Image width={50} height={50} fluid src={props.imagepath} alt="" className="hover-zoom" />
      </div>
    );
  };
  export default ImageHoverZoom;