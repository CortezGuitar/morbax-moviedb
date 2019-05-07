import React, { Component } from 'react';

import Form from '../Form';

class Header extends Component {
  render() {
    return (
      <div className="row p-2">
        <div className="col-lg-3">
          <button
            className="btn btn-lg btn-info"
            style={{ height: '100%' }}
            onClick={() => document.location.reload()}
          >
            Morbax-MovieDB
          </button>
        </div>
        <div className="col-lg-9 pt-3">
          <Form />
        </div>
      </div>
    );
  }
}

export default Header;
