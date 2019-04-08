import React, { Component } from 'react';

class rotate extends Component {
  constructor(props) {
    super(props);
    this.state = { init: '', rotate: '', changed: true };
    this.rotateOnClick = this.rotateOnClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({ init: event.target.value });
  }
  rotateOnClick() {
    let rotated = '';
    for (let i = this.state.init.length - 1; i >= 0; i--) {
      rotated += this.state.init[i];
    }
    this.setState({ rotate: rotated });
    // this.setState({
    //   init: this.state.init
    //     .split('')
    //     .reverse()
    //     .join('')
    // });
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div classstyle="ui card">
          <div
            style={{ marginTop: '25px', marginBottom: '25px' }}
            className="ui card"
          >
            What word do you want to rotate?
          </div>
        </div>

        <div classstyle="ui card">
          <div className="ui card">
            <div className="content">
              <div className="ui input" style={{ marginBottom: '25px' }}>
                <input
                  type="input"
                  value={this.state.init}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="ui button primary"
                onClick={this.rotateOnClick}
              >
                Rotate
              </button>
              <div style={{ padding: '10px' }} className="ui container">
                <div
                  style={{ padding: '5px', marginRight: '25px' }}
                  className="ui card"
                >
                  Rotated word: {this.state.rotate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default rotate;
