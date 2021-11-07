import React from 'react';

import Logo from './Logo';

const HeroDark = () => (
  <>
    <div className="container-xl bg-dark text-secondary px-4 py-5 text-center hero">
      <div className="center_elements">
        <h1 className="display-5 fw-bold text-white">Dark mode hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
            most popular front-end open source toolkit, featuring Sass variables and mixins,
            responsive grid system, extensive prebuilt components, and powerful JavaScript
            plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">
              Custom button
            </button>
            <button type="button" className="btn btn-outline-light btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HeroDark;
