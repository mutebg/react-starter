import './home.scss';
import React from 'react';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
      this.setState({count: this.state.count + 1});
  }

  render() {
    return <div className="home" onClick={this.handleOnClick}>Counter: {this.state.count}</div>;
  }
}
