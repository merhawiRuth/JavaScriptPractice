import React, { Component } from 'react';
//import GetDate from './components/DateComp';
import FormateDate from './components/rotate';
import CalDiv from './components/CalDiv';
import CharFront from './components/FcharFrontAndBack';

class App extends Component {
  render() {
    return (
      <div>
        <div className="ui grid">
          <div className="four wide column">
            <FormateDate />
          </div>
          <div className="four wide column">
            <CalDiv />
          </div>
          <div className="four wide column">
            <FormateDate />
          </div>
          <div className="four wide column">
            <CharFront />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
