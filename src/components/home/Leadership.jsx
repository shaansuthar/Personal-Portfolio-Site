import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          <p className="lead" dangerouslySetInnerHTML={{ __html: message }}></p>
        </div>
        <div className="col-md-7">
          <Carousel interval="5000">
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 rounded mx-auto"
                    src={value.img}
                    alt="First slide"
                    // width={imageSize.width}
                    // height="auto"
                  />
                  <Carousel.Caption>
                    <div className="rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                      <h3>{value.label}</h3>
                      <p>
                        {value.paragraph}
                      </p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
