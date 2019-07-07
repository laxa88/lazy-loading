import React from 'react';

import Feature1 from './feature1/Feature1';
import Feature2 from './feature2/Feature2';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
        <Feature1 />
        <Feature2 />
      </div>
    );
  }
}

export default App;
