import { connect } from 'react-redux';
import React from 'react';

import { Feature2 } from '../feature2';

import * as actions from './actions';
import * as selectors from './selectors';

const Feature1 = ({
  name,
  email,
  isFeature2Visible,
  setName,
  setEmail,
  fetchUser,
  loadFeature2,
}) => (
  <div>
    Hello, <input value={name} onChange={e => setName(e.target.value)} />! Your
    email is <input value={email} onChange={e => setEmail(e.target.value)} />.
    <button onClick={() => fetchUser()}>
      Click to fetch user and lazy load component
    </button>
    <button onClick={() => loadFeature2()}>Click to load feature2 files</button>
    {isFeature2Visible && <Feature2 />}
  </div>
);

export default connect(
  state => ({
    name: selectors.getName(state),
    email: selectors.getEmail(state),
    isFeature2Visible: selectors.isFeature2Visible(state),
  }),
  {
    setName: actions.setName,
    setEmail: actions.setEmail,
    fetchUser: actions.fetchUser,
    loadFeature2: actions.loadFeature2,
  }
)(Feature1);
