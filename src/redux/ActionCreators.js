import * as ActionTypes from './ActionTyes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    //mapear los parametros recibidos por el arrow en el payload
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});