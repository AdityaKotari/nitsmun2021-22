// *Components*
import { useEffect, lazy, Suspense } from "react";
import Loading from "../Loading";
import Secretary from "../Secretary";

// *CSS*
import "./Home.css";

const Timer = lazy(() => import('../Timer'));
// const Update = lazy(() => import("../Update"));
const Article = lazy(() => import("../Article"));
const Director = lazy(() => import("../Director"));
const Carousel = lazy(() => import("../Carousel"));

const Home = (props) => {
  useEffect(() => {
    // *Setting Up Page Title*
    document.title = props.title;
  }, [props.title]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="home">
        {/*Intro Section*/}
        <div className="home-sec" id="intro">
          <img
            className="intro-bg-pic"
            src="/img/dashboard_pic2-min.jpg"
            alt="NITSMUN"
          />

          <div className="intro-logo">
            <img src="/img/logoBigWhite.svg" alt="NITSMUN" />
          </div>
        </div>
        {/*Timer Section */}
        {/* <div className="home-sec" id="apply" style={{paddingTop:"0"}}> */}
        <Timer />

        {/* Mock Mun */}
        {/* <div className="home-apply" style={{ paddingTop: "0" }}>
          <div
            className="container-fluid p-0"
            style={{
              overflowX: "hidden",
              fontFamily: "var(--font2)",
            }}
          >
            <div className="separator">
              <div className="line"></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "var(--color-8-100)",
                  height: "70px",
                }}
              >
                <h2
                  style={{
                    fontVariant: "small-caps",
                    color: "var(--color-1-100)",
                    fontFamily: "var(--font2)",
                    fontWeight: "bold",
                  }}
                >
                  MOCK MUN 2022
                </h2>
              </div>
              <div className="line"></div>
            </div>
            <div className="line"></div>
          </div>
          <br />
          <img
            style={{ height: "auto", width: "100%" }}
            src="img/mockmun22.png"
            alt="Apply Now"
          />
          <div>
            <Update />
          </div>
          -- Applications Closed --
        </div> */}

        {/* </div> */}
        {/* update section */}
        {/*Director's Message Section*/}
        <div>
          <Director />
        </div>
        {/*Secretary's Message Section*/}
        <div>
          <Secretary />
        </div>
        {/* Glimpse from past conference */}
        <div>
          <Carousel />
        </div>
        {/* Article & Social */}
        <div>
          <Article />
        </div>
        {/*Articles Section*/}
      </div>
    </Suspense>
  );
};

export default Home;
