import React, { Component } from 'react';

class dateComp extends Component {
  constructor(props) {
    super(props);
    this.state = { Day: '', Time: '' };
    this.newDate = this.newDate.bind(this);
    this.discardDate = this.discardDate.bind(this);
  }
  discardDate() {
    this.setState({ Day: `Discarded`, Time: `I don't know` });
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
      case 6:
        this.setState({ Day: 'Saturday' });
        break;
      case 7:
        this.setState({ Day: 'Sunday' });
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
      <div>
        <div classstyle="ui card">
          <div className="ui card">
            return date in the following format: Today is : Tuesday. Current
            time is : 10 PM : 30 : 38
          </div>
        </div>

        <div classstyle="ui card">
          <div className="ui card">
            <div className="content">
              <button className="ui button primary" onClick={this.newDate}>
                Date
              </button>
              <button className="ui button" onClick={this.discardDate}>
                Discard
              </button>
              <h1>Today is {this.state.Day}</h1>
              <h1>Time is {this.state.Time}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default dateComp;
