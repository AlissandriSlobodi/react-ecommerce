import { Component } from "react";
import AboutUs from "./AboutUs";
import HeroImage from "./HeroImage";
import ShopNowCont from "./ShopNowCont";
export default class Home extends Component {
  render() {
    return (
      <div>
        <HeroImage />
        <ShopNowCont />
        <AboutUs />
      </div>
    );
  }
}
