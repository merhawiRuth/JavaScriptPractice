import React, { Component } from 'react';

class CalDiv extends Component {
  //   constructor(props) {
  //     super(props);
  state = { first: '', second: '', Result: '' };

  // this.multiply = this.multiply.bind(this);
  // this.divid = this.divid.bind(this);
  // this.clear = this.clear.bind(this);

  //   clear() {
  //     this.setState({ first: null, second: null, Result: null });
  //   }
  multiply(e) {
    this.setState({ Result: this.state.first * this.state.second });
    console.log(this.state);
    e.preventDefault();

    //e.preventDefault();
    // if (this.state.first !== null && this.state.first !== null) {
    //   this.setState({ Result: this.state.first * this.state.second });
    // } else {
    //   return <div>Please enter number</div>;
    // }
  }
  divid() {}
  render() {
    return (
      <form>
        <div style={{ margin: '10px' }}>
          <div className="ui card">
            calculate multiplication and division of two numbers
          </div>
          <div className="ui card">
            <div className="content">
              <div className="ui input" style={{ marginBottom: '25px' }}>
                <label>1 #</label>
                <input
                  type="number"
                  value={this.state.first}
                  onChange={e => this.setState({ first: e.target.value })}
                  placeholder="first number"
                />
              </div>
              <div className="ui input" style={{ marginBottom: '25px' }}>
                <label>2 #</label>
                <input
                  type="number"
                  value={this.state.second}
                  onChange={e => this.setState({ second: e.target.value })}
                  placeholder="Second number"
                />
              </div>
              <button
                name="submit"
                style={{ padding: '10px' }}
                type="submit"
                className="ui button primary"
                onClick={e => this.multiply(e)}
              >
                Multiply
              </button>
              <button
                style={{ padding: '10px' }}
                type="submit"
                className="ui button primary"
                onClick={() => this.divid()}
              >
                Divid
              </button>
              <div style={{ padding: '10px' }} className="ui container">
                <div
                  style={{ padding: '5px', marginRight: '25px' }}
                  className="ui card"
                >
                  Result: {this.state.Result}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default CalDiv;
