import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTyes';

export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            //El payload del addComment en ActionCreators
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            //Crea un nuevo state con el comment concatenado
            return state.concat(comment);
        default:
            return state;
    }
}