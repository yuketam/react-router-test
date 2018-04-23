import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  
  constructor() {
    super();
  }
  
  componentWillMount() {
    const { router } = this.context;
    this.setState({ routingMonitor: router });
  }
  
  render() {
    const { children } = this.props || {};
    const { routingMonitor } = this.state;
    
    return (
      <div className="gl_wrapper">
        <h1> Hello World, this is hi from global </h1>
        <div className="gl_inner">
          <div className="gl_child">
            {children}
          </div>
          <div className="gl_routing">
            {routingMonitor}
          </div>
        </div>
      </div>
    );
  }
}

export default App;