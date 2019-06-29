import React from "react"
import "./style.css";
import vitruvianWoman from "./vitruvianWoman.jpg";
import SymptomModal from "../SymptomModal"
const $ = window.$;

class VitruvianWoman extends React.Component {

    state = {
        fillOpacityBreasts: "0",
        fillOpacityHead: "0",
        selectedRegion: null
    }

    hoverBreasts = () => {
        this.setState({ fillOpacityBreasts: "0.61194032" })
    }
    hoverGenitals = () => {
        this.setState({ fillOpacityGenitals: "0.61194032" })
    }

    unhoverBreasts = () => {
        this.setState({ fillOpacityBreasts: "0" })
    }
    unhoverGenitals = () => {
        this.setState({ fillOpacityGenitals: "0" })
    }

    handleSymptomModal = (e) => {
        e.preventDefault();
        $("#symptomModal").modal("show");
        this.setState({
          selectedRegion: e.target.id  
        })
    }

    render = () => {
        return (

            <>
                <img id="woman" alt="vitruvianWoman" height="1300" width="1440" src={vitruvianWoman} />
                <div className="content">

                    <svg version="1.1" id="svg1569" width={1440} height={1300}>
                        <defs id="defs1573">
                            <filter style={{ colorinterpolationfilters: "srgb" }} id="filter2138" x="-0.20555801" width="1.411116" y="-0.44292858" height="1.8858572">
                                <feGaussianBlur stdDeviation="26.011342" id="feGaussianBlur2140" />
                            </filter>
                            <filter style={{ colorinterpolationfilters: "srgb" }} id="filter2150" x="-0.22098462" width="1.4419692" y="-0.47879999" height="1.9576">
                                <feGaussianBlur stdDeviation="24.101076" id="feGaussianBlur2152" />
                            </filter>
                        </defs>
                        <path id="breasts" style={{ fillOpacity: this.state.fillOpacityBreasts, fill: '#ca7e00', stroke: '#000000', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, fillOpacity: this.state.fillOpacityBreasts, filter: 'url(#filter2150)' }} onMouseOver={this.hoverBreasts} onMouseOut={this.unhoverBreasts} onClick={this.handleSymptomModal} d="m 582.22453,158.57447 30.20185,63.75946 16.77881,46.98066 85.5719,1.67788 92.28343,-1.67788 21.81245,-48.65854 15.10092,-70.47098 -124.16316,1.67788 z" />
                        <path id="ladyGenitals" style={{ fillOpacity: this.state.fillOpacityGenitals, fill: '#ca7e00', stroke: '#000000', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, fillOpacity: this.state.fillOpacityGenitals, filter: 'url(#filter2138)' }} onMouseOver={this.hoverGenitals} onMouseOut={this.unhoverGenitals} d="m 827.19509,422.00171 33.55761,92.28343 -102.35071,30.20185 -31.87973,3.35576 -46.98066,-3.35576 -43.62489,-6.71152 -40.26913,-15.10093 -26.84609,-20.13456 -11.74516,-15.10093 10.06728,-35.23549 18.45668,-25.16821 10.06729,-20.13456 68.7931,6.71152 55.37005,-6.71152 43.6249,3.35576 z" />
                    </svg>
                </div>
                <SymptomModal selectedRegion={this.state.selectedRegion} />
            </>
        )

    }
}
export default VitruvianWoman
