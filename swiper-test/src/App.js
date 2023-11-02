import logo from "../src/435.png";
import { useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import next from "../src/next_icon.jpg";

function App() {
  const ref = useRef();
  const [isOverflow, setIsOverflow] = useState();
  const [scrollState, setScrollState] = useState("right");
  useLayoutEffect(() => {
    const { current } = ref;
    if (current) {
      const hasOverflow = current.scrollWidth > current.clientWidth;
      setIsOverflow(hasOverflow);
    }
  }, [ref]);

  const moveRight = () => {
    const { current } = ref;
    if (current) {
      current.scrollLeft = current.clientWidth;
    }
  };
  return (
    <div className="swiper">
      <div className="swiper-container" ref={ref}>
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
        {isOverflow ? (
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
