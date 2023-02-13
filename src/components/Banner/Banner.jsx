import { Box } from "@mui/material";
import { fontFamily } from "@mui/system";
import React from "react";
import { Carousel } from "react-bootstrap";
import bgImage from "../../assests/images/bannerImage.webp";

const Banner = () => {
  return (
    <Box
      sx={{
        display : 'flex',
        justifyContent : "center",
        alignItems : 'center',
        minHeight: {
          xs: "500px",
          sm: "600px",
          md: "700px",
        },
        // backgroundColor : "rgba(0,0,0,0.5)",
        background: `url(${bgImage}) rgba(0,0,0,0.4)`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      {/* overlay start */}
      <div
        className="overlay"
        style={{
          zIndex : "2",
          position: "absolute",
          inset: "0",
          background: "#558cab33",
        }}
      ></div>
      {/* overlay end */}
      <Carousel
        touch={true}
        indicators={false}
        controls
        style={{ minHeight: "700px", position: "relative" }}
      >
        <Carousel.Item
          style={{
            height: "700px",
          }}
        >
          <img
            className="d-block w-100"
            style={{
              height: "700px",
            }}
            src={bgImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>
              Let Us take you away
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "700px",
          }}
        >
          <img
            className="d-block w-100 "
            style={{
              height: "700px",
            }}
            src={bgImage}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>
              Let Us take you away
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "700px",
          }}
        >
          <img
            className="d-block w-100"
            style={{
              height: "700px",
            }}
            src={bgImage}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>
              Let Us take you away
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div
        className="home-search-container"
        // style={{
        //   zIndex : "100",
        //   position: "absolute",
        //   top: "55%",
        //   width: "70%",
        //   height: "140px",
        //   margin: "0 auto",
        //   left: "235px",
        //   paddingTop: "25px",
        //   paddingLeft: "25px",
        //   paddingRight: "25px",
        //   paddingBottom: "25px",
        //   background: "rgba(255,255,255,0.26)",
        //   borderRadius: "12px",
        // }}
      >
        <div
          // style={{
          //   display : 'flex',
          //   justifyContent : 'space-between',
          //   width: "100%",
          //   background: "#FFFFFF",
          //   paddingTop: "18px",
          //   paddingBottom: "18px",
          //   paddingLeft: "67px",
          //   paddingRight: "83px",
          // }}
        >
          <input
            type="text"
            placeholder="Search your favourite location"
            // style={{
            //   width: "77%",
            //   height: "50px",
            //   background: "#f2f5f6",
            //   border: "none",
            //   outline: "none",
            //   paddingLeft: "27px",
            //   paddingBlock: "15px",
            //   fontFamily: "'Oswald', sans-serif",
            //   fontSize: "14px !important",
            //   fontWeight: "500 !important",
            //   color: "#72728c !important",
            //   borderRadius : "20px"
            // }}
          />
          <button
            // style={{
            //   width: "161px",
            //   height: "52px",
            //   paddingBlock: "10px",
            //   background: "#181818",
            //   color: "#FFFFFF",
            //   fontFamily: "'Oswald', sans-serif",
            //   fontSize: "16px",
            //   fontWeight: "400",
            //   textTransform: "uppercase",
            //   borderRadius: "20px",
            //   border: "none",
            //   outline: "none",
            //   cursor: "pointer",
            // }}
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </Box>
  );
};

export default Banner;
