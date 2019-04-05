import React, { Component } from 'react';

class dateComp extends Component {
  constructor(props) {
    super(props);
    this.state = { Day: '', Time: '' };
    this.newDate = this.newDate.bind(this);
  }

  newDate() {
    let date = new Date();
    switch (date.getDay()) {
      case 1:
        this.setState({ Day: 'Monday' });
        break;
      case 2:
        this.setState({ Day: 'Tuesday' });
        break;
      case 3:
        this.setState({ Day: 'Wednesday' });
        break;
      case 4:
        this.setState({ Day: 'Thursday' });
        break;
      case 5:
        this.setState({ Day: 'Firday' });
        break;
      default:
        this.setState({ Day: 'Moday' });
    }
    if (date.getHours() < 12) {
      this.setState({
        Time:
          date.getHours() + 'AM:' + date.getMinutes() + ':' + date.getSeconds()
      });
    } else {
      var PMDate = date.getHours() - 12;
      this.setState({
        Time: PMDate + 'PM:' + date.getMinutes() + ':' + date.getSeconds()
      });
    }
  }

  render() {
    return (
      <div
        classstyle="ui card"
        style={{
          position: 'absolute',
          width: '580px',
          left: '40%',
          top: '40%'
        }}
      >
        <div className="ui card">
          <div className="content">
            <button className="ui button primary" onClick={this.newDate}>
              Date
            </button>
            <h1>Today is {this.state.Day}</h1>
            <h1>Time is {this.state.Time}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default dateComp;
