import React from "react";
import brands from './disc-list.json';
import Discs from './Discs';

class Brands extends React.Component {
  render() {
    const discRows = brands.map((brand, i) => (
      <React.Fragment>
        <h3>{ brand.name }</h3>
        <Discs discs={ brand.discs }></Discs>
      </React.Fragment>
    ));

    return <div>{ discRows }</div>;
  }
}

export default Brands;
