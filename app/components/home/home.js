import './home.scss';
import React from 'react';
import { connect } from 'react-redux';
import { fetchItems, addItem, removeItem } from '../../actions';
import List from '../list/list';




class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
      this.props.addItem(this.refs.item.value);
      this.refs.item.value = "";
  }

  render() {
      return <div className="home">
          <List />
          <input type="text" ref="item" />
          <button onClick={this.handleSubmit}>Add</button>
      </div>;
  }
}

export default connect(null, { addItem })(Home);
