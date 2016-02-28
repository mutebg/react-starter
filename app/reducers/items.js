import {
    ADD_ITEM,
    REMOVE_ITEM,
    EDIT_ITEM,
    FETCH_ITEMS,
} from '../constants';

const initState = [
    'Demo 1', 'Demo 2'
];

export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return [ ...state, ...action.payload];

        case ADD_ITEM:
            return [ ...state, action.payload ];

        case REMOVE_ITEM:
            let index = state.indexOf(action.payload);
            if ( index >= 0 ) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ];
            }
            return state;

        default:
            return state;
    }
};
