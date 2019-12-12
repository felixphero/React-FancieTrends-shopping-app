import React, { Component } from "react";

import Title from "./Title";
import TrendingProduct from "./TrendingProduct";
import { ProductConsumer } from "../context";

export default class TrendingProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Trending" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return (
                      <TrendingProduct key={product.id} product={product} />
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
