import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import * as selectors from './selectors';

const Feature2 = ({ address1, address2, setAddress1, setAddress2 }) => (
  <div>
    Your address is:

    <p>
      <input value={address1} onChange={e => setAddress1(e.target.value)} />
    </p>

    <p>
      <input value={address2} onChange={e => setAddress2(e.target.value)} />
    </p>
  </div>
);

export default connect(
  state => ({
    address1: selectors.getAddress1(state),
    address2: selectors.getAddress2(state),
  }),
  {
    setAddress1: actions.setAddress1,
    setAddress2: actions.setAddress2,
  }
)(Feature2);
