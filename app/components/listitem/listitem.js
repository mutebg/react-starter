import React from 'react';

class ListItem extends React.Component {
  render() {
    return (<li>
        <span>{this.props.name}</span>
        <button onClick={this.props.onRemove}>remove</button>
    </li>);
  }
}
ListItem.propTypes = {
  name: React.PropTypes.string,
  onRemove: React.PropTypes.func,
};

export default ListItem;
