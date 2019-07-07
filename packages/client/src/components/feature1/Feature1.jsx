import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import React from 'react';

import * as actions from './actions';
import * as selectors from './selectors';

const Feature2 = Loadable({
  loader: () => import('../feature2/Feature2'),
  loading: () => <div>Loading</div>,
});

const Feature1 = ({
  name,
  email,
  isFeature2Visible,
  setName,
  setEmail,
  fetchUser,
}) => (
  <div>
    Hello, <input value={name} onChange={e => setName(e.target.value)} />! Your
    email is <input value={email} onChange={e => setEmail(e.target.value)} />.
    <button onClick={() => fetchUser()}>Click to fetch user</button>
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
  }
)(Feature1);
