import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import * as selectors from './selectors';

const Feature1 = ({ name, email, setName, setEmail }) => (
  <div>
    Hello, <input value={name} onChange={e => setName(e.target.value)} />! Your
    email is <input value={email} onChange={e => setEmail(e.target.value)} />.
  </div>
);

export default connect(
  state => ({
    name: selectors.getName(state),
    email: selectors.getEmail(state),
  }),
  {
    setName: actions.setName,
    setEmail: actions.setEmail,
  }
)(Feature1);
