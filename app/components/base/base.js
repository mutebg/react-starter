import './base.scss';
import React from 'react';


export default class Base extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="base">{ this.props.children }</div>;
  }
}
