import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../listitem/listitem';
import { fetchItems, removeItem } from '../../actions';


class List extends React.Component {

  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    const list = this.props.items.map(item => {
      const click = this.props.removeItem.bind(this, item);
      return <ListItem key={item} name={item} ind={1} onRemove={ click } />;
    });
    return <ul className="list">{list}</ul>;
  }
}

List.propTypes = {
  items: React.PropTypes.array,
  fetchItems: React.PropTypes.func,
  removeItem: React.PropTypes.func,
};


function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps, { fetchItems, removeItem })(List);
