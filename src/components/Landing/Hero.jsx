import "./Hero.css";
import av1 from "../assets/hero/av1.png";

const Hero = () => {
  return (
    <div className="hero">
      <svg viewBox="0 0 100 100" className="orbit-svg">
        <circle cx="50" cy="50" r="95" className="orbit" />
        <circle cx="50" cy="50" r="75" className="orbit" />
        <circle cx="50" cy="50" r="50" className="orbit" />

        <g className="orbiting-group">
          <image
            xlinkHref={av1}
            className="orbiting-element"
            x="96"
            y="50"
            cx={50}
            cy={50}
            height="8"
            width="8"
          />
        </g>
        <g className="orbiting-group">
          <image
            xlinkHref={av1}
            className="orbiting-element"
            x="-4"
            y="50"
            height="8"
            width="8"
            cx={50}
            cy={50}
          />
        </g>
        <g className="orbiting-group">
          <image
            xlinkHref={av1}
            className="orbiting-element"
            x="50"
            y="96"
            height="8"
            width="8"
            cx={50}
            cy={50}
          />
        </g>

        <g className="orbiting-group">
          <image
            xlinkHref={av1}
            className="orbiting-element"
            x="50"
            y="-4"
            height="8"
            width="8"
            cx={50}
            cy={50}
          />
        </g>

        <g className="orbiting-group">
          <image
            xlinkHref={av1}
            className="orbiting-element"
            x="121"
            y="50"
            height="8"
            width="8"
            cx={50}
            cy={50}
          />
        </g>
        <g className="orbiting-group">
          <image
            xlinkHref={av1}
            className="orbiting-element"
            x="141"
            y="50"
            height="8"
            width="8"
            cx={0}
            cy={0}
          />
        </g>

        <g className="orbiting-group">
          <image
            xlinkHref={av1}
            className="orbiting-element"
            x="-29"
            y="50"
            height="8"
            width="8"
            cx={0}
            cy={0}
          />
        </g>

        <g className="orbiting-group">
          <image
            xlinkHref={av1}
            className="orbiting-element"
            x="-49"
            y="50"
            height="8"
            width="8"
            cx={0}
            cy={0}
          />
        </g>
      </svg>
    </div>
  );
};

export default Hero;
