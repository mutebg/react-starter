import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    console.log('my props',this.props);
  }

  render() {
      return <li>{this.props.name}
        <button onClick={ this.props.onRemove }>remove</button>
        </li>;
  }
}

export default ListItem;
