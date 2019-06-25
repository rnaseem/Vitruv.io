import React from "react"
import "./style.css";
import vitruvianMan from "./vitruvianManShortened.mp4";

class VitruviAnimation extends React.Component {
  
    state = { fillOpacityLegs: "0", 
    fillOpacityHead: "0",
    fillOpacityTorso: "0",
    fillOpacityRightArm: "0",
    fillOpacityLeftArm: "0",
    fillOpacityLegs: "0",
    fillOpacityGenits: "0",
    fillOpacityFeet: "0"
  }


    hoverLegs = () => {
        this.setState({fillOpacityLegs: "0.61194032"})
      }
      hoverHead = () => {
        this.setState({fillOpacityHead: "0.61194032"})
      }
      hoverLeftArm = () => {
        this.setState({fillOpacityLeftArm: "0.61194032"})
      }
      hoverFeet = () => {
        this.setState({fillOpacityFeet: "0.61194032"})
      }
      hoverRightArm = () => {
        this.setState({fillOpacityRightArm: "0.61194032"})
      }
      hoverGenits = () => {
        this.setState({fillOpacityGenits: "0.61194032"})
      }
      hoverTorso = () => {
        this.setState({fillOpacityTorso: "0.61194032"})
      }
      
      
      unhoverLegs = () => {
        this.setState({fillOpacityLegs: "0"})
      }
      unhoverHead = () => {
        this.setState({fillOpacityHead: "0"})
      }
      unhoverLeftArm = () => {
        this.setState({fillOpacityLeftArm: "0"})
      }
      unhoverFeet = () => {
        this.setState({fillOpacityFeet: "0"})
      }
      unhoverRightArm = () => {
        this.setState({fillOpacityRightArm: "0"})
      }
      unhoverGenits = () => {
        this.setState({fillOpacityGenits: "0"})
      }
      unhoverTorso = () => {
        this.setState({fillOpacityTorso: "0"})
      }
      
    
    render() {
    return (
        <>
        <video autoPlay
            muted
            id="myVideo">
            <source src={vitruvianMan}
                type="video/mp4"></source>
        </video>


<div class="content">
        <svg 
      version="1.1"
      id="svg5286"
      width={1920}
      height={1080}
    >
      <defs id="defs5290">
        <filter
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter6309"
          x="-0.1510531"
          width="1.3021062"
          y="-0.74472683"
          height="2.4894537"
        >
          <feGaussianBlur
            stdDeviation="21.137464"
            id="feGaussianBlur6311"
          />
        </filter>
        <filter
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter6373"
          x="-0.20985512"
          width="1.4197102"
          y="-0.22099784"
          height="1.4419957"
        >
          <feGaussianBlur
            stdDeviation="16.483667"
            id="feGaussianBlur6375"
          />
        </filter>
        <filter
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter6905"
          x="-0.15759811"
          width="1.3151962"
          y="-0.46348411"
          height="1.9269682"
        >
          <feGaussianBlur
            stdDeviation="10.402516"
            id="feGaussianBlur6907"
          />
        </filter>
        <filter
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter6969"
          x="-0.3481464"
          width="1.6962928"
          y="-0.18219064"
          height="1.3643813"
        >
          <feGaussianBlur
            stdDeviation="23.209765"
            id="feGaussianBlur6971"
          />
        </filter>
        <filter
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter7057"
          x="-0.12337516"
          width="1.2467503"
          y="-0.57762005"
          height="2.1552401"
        >
          <feGaussianBlur
            stdDeviation="16.775764"
            id="feGaussianBlur7059"
          />
        </filter>
        <filter
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter7065"
          x="-0.11376365"
          width="1.2275273"
          y="-0.53089694"
          height="2.0617939"
        >
          <feGaussianBlur
            stdDeviation="9.4615302"
            id="feGaussianBlur7067"
          />
        </filter>
        <filter
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter7549"
          x="-0.42296405"
          width="1.8459281"
          y="-0.49181854"
          height="1.9836371"
        >
          <feGaussianBlur
            stdDeviation="27.918412"
            id="feGaussianBlur7551"
          />
        </filter>
      </defs>
      <path
      id="legs"
        style={{
          fill: "#c16912",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          fillOpacity: this.state.fillOpacityLegs,
          filter: "url(#filter6969)"
        }}
        d="m 872.87129,548.11881 c 14.25742,85.54456 14.25742,85.54456 14.25742,85.54456 l -17.42574,112.47524 30.09901,107.72278 101.38612,-4.75248 1.5842,-101.38614 -7.92081,-26.93069 17.42571,-49.10891 -4.7524,-12.67327 22.1782,-106.13861 z"
        id="path5296"
        onMouseOver={() => this.hoverLegs()}
        onMouseOut={() => this.unhoverLegs()}
      />
      <path
      id="genits"
        style={{
          fill: "#c16912",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          fillOpacity: this.state.fillOpacityGenits,
          filter: "url(#filter6905)"
        }}
        d="m 874.45545,454.65347 c 3.16831,55.44554 3.16831,53.86138 3.16831,53.86138 h 155.24754 l -1.5842,-50.69307 z"
        id="path5300"
        onMouseOver={() => this.hoverGenits()}
        onMouseOut={() => this.unhoverGenits()}
      />
      <path
      id="torso"
        style={{
          fill: "#c16912",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          fillOpacity: this.state.fillOpacityTorso,
          filter: "url(#filter6373)"
        }}
        d="m 861.78218,250.29703 30.09901,91.88119 -11.08911,68.11881 -1.58416,17.42574 156.83168,-3.16831 -11.0891,-28.51486 7.9208,-20.59406 -9.505,-26.93069 26.9307,-82.37624 -1.5841,-17.42574 z"
        id="path5302"
        onMouseOver={() => this.hoverTorso()}
        onMouseOut={() => this.unhoverTorso()}
      />
      <path
      id="rightArm"
        style={{
          fill: "#c16912",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          fillOpacity: this.state.fillOpacityRightArm,
          filter: "url(#filter6309)"
        }}
        d="M 1061.3861,183.76238 1120,198.0198 l 57.0297,1.58416 123.5644,-7.92079 85.5445,-15.84159 11.0891,44.35644 -88.7128,12.67327 h -53.8614 l -42.7723,11.08911 -41.1881,-9.50495 -104.5545,7.92079 z"
        id="path5306"
        onMouseOver={() => this.hoverRightArm()}
        onMouseOut={() => this.unhoverRightArm()}
      />
      <path
      id="head"
        style={{
          fill: "#c16912",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          fillOpacity: this.state.fillOpacityHead,
          filter: "url(#filter7549)"
        }}
        d="m 955.24752,41.188119 -41.18811,6.336633 -22.17822,23.762377 -15.84159,42.772281 12.67327,33.26732 14.25743,30.09901 h 49.10891 l 55.44559,-3.16831 26.9306,-44.35644 -7.9207,-50.693069 -22.1783,-31.683169 z"
        id="path5308"
        onMouseOver={() => this.hoverHead()}
        onMouseOut={() => this.unhoverHead()}
      />
      <path
      id="feet"
        style={{
          fill: "#c16912",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          fillOpacity: this.state.fillOpacityFeet,
          filter: "url(#filter7065)"
        }}
        d="m 896.63366,871.28713 v 42.77228 h 199.60394 l -9.5049,-19.00991 -66.5347,-15.84158 -9.5049,-7.92079 z"
        id="path5310"
        onMouseOver={() => this.hoverFeet()}
        onMouseOut={() => this.unhoverFeet()}
      />
      <path
      id="leftArm"
        style={{
          fill: "#c16912",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          fillOpacity: this.state.fillOpacityLeftArm,
          fillRule: "nonzero",
          filter: "url(#filter7057)"
        }}
        d="m 841.18812,188.51485 4.75247,55.44555 -50.69307,-4.75248 -53.86138,-1.58416 -58.61386,3.16832 -68.11881,-12.67327 -93.46535,1.58416 -1.58416,-55.44554 55.44554,6.33663 36.43565,15.84158 28.51485,4.75248 41.18812,-6.33663 52.27723,4.75247 26.93069,3.16832 52.27723,-4.75248 z"
        id="path5312"
        onMouseOver={() => this.hoverLeftArm()}
        onMouseOut={() => this.unhoverLeftArm()}
      />
    </svg>
</div>
 </>)
    
}
}

export default VitruviAnimation