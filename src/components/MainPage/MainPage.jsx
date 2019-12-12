import React, { Component } from "react";
import Items from "./Items";

import Slider from "./Slider";

import TrendingProductList from "../TrendingProductList";

export default class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5 container">
          <div className="container card py-5">
            <div class="row">
              <div class="col-xs-6 col-md-3">
                {" "}
                <Items />
              </div>
              <div class="col-xs-6 col-md-6 ">
                {" "}
                <Slider />
              </div>
              <div class="col-xs-6 col-md-3">
                {" "}
                <Items />
              </div>
            </div>
          </div>
          <TrendingProductList />
        </div>
      </React.Fragment>
    );
  }
}
