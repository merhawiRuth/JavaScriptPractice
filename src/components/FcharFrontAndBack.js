import React, { Component } from 'react';

class FCharFrontAndBack extends Component {
  constructor(props) {
    super(props);
    this.state = { init: '', added: '' };
    this.addedFunc = this.addedFunc.bind(this);
  }

  addedFunc() {
    let all =
      this.state.init.substr(0, 1) +
      this.state.init +
      this.state.init.substr(0, 1);
    this.setState({
      added: all.toUpperCase()
    });
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div classstyle="ui card">
          <div
            style={{ marginTop: '25px', marginBottom: '25px' }}
            className="ui card"
          >
            Create a new string from a given string with the first character of
            the given string added at the front and back.
          </div>
        </div>

        <div classstyle="ui card">
          <div className="ui card">
            <div className="content">
              <div className="ui input" style={{ marginBottom: '25px' }}>
                <input
                  type="input"
                  value={this.state.init}
                  onChange={e => this.setState({ init: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="ui button primary"
                onClick={this.addedFunc}
              >
                Add
              </button>
              <div style={{ padding: '10px' }} className="ui container">
                <div
                  style={{ padding: '5px', marginRight: '25px' }}
                  className="ui card"
                >
                  added word: {this.state.added}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FCharFrontAndBack;
