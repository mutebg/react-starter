import {ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, FETCH_ITEMS} from '../constants';

export const addItem = (name) => {
    return {
        type: ADD_ITEM,
        payload: name
    };
};

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    };
};

export const editItem = (id, name) => {
    return {
        type: EDIT_ITEM,
        payload: {id, name}
    };
};

export const fetchItems = () => {
    let request = fetch('https://stoyandelev.com/api/projects')
        .then( response => response.json() )
        .then( response => response.projects.map( (item) => item.title ));

    return {
        type: FETCH_ITEMS,
        payload: request
    };
};
