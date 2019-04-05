export const datefunc = () => {
  let date = new Date();
  switch (date.getDay()) {
    case 1:
      this.setState({ date: 'Monday' });
      break;
    case 2:
      this.setState({ date: 'Tuesday' });
      break;
    case 3:
      this.setState({ date: 'Wednesday' });
      break;
    default:
      this.setState({ date: 'Sunday' });
  }
  if (date.getHours() < 12) {
    this.setState({
      time: `${date.getHours()} PM: ${date.getMinutes()} : ${date.getSeconds()}`
    });
  } else {
    this.setState({
      time: `${date.getHours() -
        12} PM: ${date.getMinutes()} : ${date.getSeconds()}`
    });
  }
};
