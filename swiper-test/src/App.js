import logo from "../src/435.png";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import next from "../src/next_icon.jpg";

function App() {
  const ref = useRef();
  const [isOverflow, setIsOverflow] = useState();
  const [disableSrollState, setDisableScrollState] = useState("left");
  useLayoutEffect(() => {
    const { current } = ref;
    if (current) {
      const hasOverflow = current.scrollWidth > current.clientWidth;
      setIsOverflow(hasOverflow);
    }
  }, [ref]);

  const handleScroll = () => {
    const { current } = ref;
    console.log("current", current);
    if (current) {
      console.log("scrollWidth", current.scrollLeft);
      console.log("current.scrollWidth", current.scrollWidth);
      console.log("current.clientWidth", current.clientWidth);
      console.log("current.offsetWidth", current.offsetWidth);
      console.log(
        "(current.scrollWidth - current.clientWidth) / 2",
        current.scrollWidth - current.clientWidth
      );

      if (current.scrollLeft > 0) {
        setDisableScrollState("");
      }
      if (
        Math.ceil(current.scrollLeft) ===
        current.scrollWidth - current.clientWidth
      ) {
        setDisableScrollState("right");
      }
      if (current.scrollLeft === 0) {
        setDisableScrollState("left");
      }
      // if (
      //   current.scrollLeft <=
      //   (current.scrollWidth - current.clientWidth) / 8
      // ) {
      //   setDisableScrollState("right");
      // } else {

      // }
    }
  };

  const moveRight = () => {
    const { current } = ref;
    if (current) {
      current.scrollLeft = current.scrollLeft + 35;
    }
  };

  const moveLeft = () => {
    const { current } = ref;
    if (current) {
      current.scrollLeft = current.scrollLeft - 35;
    }
  };

  useEffect(() => {
    const { current } = ref;
    if (current) {
      current.addEventListener("scroll", () => handleScroll(ref));
    }
    return () => {
      if (current) {
        window.removeEventListener("scroll", () => handleScroll(ref));
      }
    };
  }, []);
  return (
    <div className="swiper">
      <div className="swiper-container">
        {isOverflow && disableSrollState !== "left" ? (
          <div className="prev-icon" onClick={moveLeft}>
            <img src={next} alt="" />
          </div>
        ) : (
          ""
        )}
        <div className="swiper-wrapper" ref={ref}>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
          <div className="swiper-item">
            <img src={logo} alt="" />
            <p>test</p>
          </div>
        </div>
        {isOverflow && disableSrollState !== "right" ? (
          <div className="next-icon" onClick={moveRight}>
            <img src={next} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
