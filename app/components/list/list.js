import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../listitem/listitem';
import { fetchItems, removeItem } from '../../actions';




class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove.bind(this);
  }

  componentWillMount() {
    this.props.fetchItems();
  }

  handleRemove() {

  }

  render() {
     let list = this.props.items.map( item => {
         let click = this.props.removeItem.bind(this, item);
         return <ListItem key={item} name={item} ind={1} onRemove={ click } />;
     });
     return <ul className="list">{list}</ul>;
  }
}


function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps, { fetchItems, removeItem })(List);
