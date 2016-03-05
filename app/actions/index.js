import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, FETCH_ITEMS } from '../constants';

export const addItem = name => ({
  type: ADD_ITEM,
  payload: name,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const editItem = (id, name) => ({
  type: EDIT_ITEM,
  payload: { id, name },
});

export const fetchItems = () => {
  const request = fetch('https://stoyandelev.com/api/projects')
    .then(response => response.json())
    .then(response => response.projects.map((item) => item.title));

  return {
    type: FETCH_ITEMS,
    payload: request,
  };
};
