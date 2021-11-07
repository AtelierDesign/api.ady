import React from 'react';
import { Row, Col } from 'reactstrap';


const ThreeCols = () => (
  <div className="container-fluid mt-3">
    <div className="row">
      <div className="col p-3 bg-lime9 text-white">Lime9</div>
      <div className="col p-3 bg-sky8 text-white">Sky8</div>
    </div>
    <div className="row dark-theme">
      <div className="col p-3 bg-skyDark8 text-white dark-theme">SkyDark8</div>
      <div className="col p-3 bg-bronzeDark3 text-white">BronzeDark3</div>
    </div>
  </div>
);

export default ThreeCols;
